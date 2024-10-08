import Comment from "../model/comment.js";

export const editComment = async (req, res) => {
    try {
        const { text, commentId } = req.body;//getting the text from the request body
        const comment = await Comment.findById(commentId);//finding the comment
        if (!comment) {
            return res.status(404).json({ success: false, message: "Comment not found" });
        }
        comment.text = text;//updating the comment text
        await comment.save();//saving the updated comment
        res.status(200).json({ success: true, message: "Comment updated successfully", comment });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}