import Comment from "../model/comment.js";

export const deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params;//getting the comment id from the url params
        const comment = await Comment.findById(commentId);//finding the comment
        if (!comment) {
            return res.status(404).json({ success: false, message: "Comment not found" });
        }
        await comment.deleteOne();//deleting the comment
        res.status(200).json({ success: true, message: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}