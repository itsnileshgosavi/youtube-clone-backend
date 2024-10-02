import Comment from "../model/comment.js";

export const editComment = async (req, res) => {
    try {
        const { videoId } = req.params;
        const { text, commentId } = req.body;
        const comment = await Comment.findById(commentId);
        if (!comment) {
            return res.status(404).json({ success: false, message: "Comment not found" });
        }
        comment.text = text;
        await comment.save();
        res.status(200).json({ success: true, message: "Comment updated successfully", comment });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}