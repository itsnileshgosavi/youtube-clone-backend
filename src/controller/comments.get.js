import Comment from "../model/comment.js";

export const getComments = async (req, res) => {
  const { videoId } = req.params;
  try {
    const comments = await Comment.find({ video: videoId });
    if (comments.length === 0) {
      return res.status(404).json({ error: "No comments found" });
    }
    res.status(200).json({success: true, comments: comments});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};