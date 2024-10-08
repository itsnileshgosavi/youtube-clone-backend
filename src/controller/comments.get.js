import Comment from "../model/comment.js";

export const getComments = async (req, res) => {
  const { videoId } = req.params;//getting the video id from the url params
  try {
    const comments = await Comment.find({ video: videoId });//searching the comments in the database
    // if no comments found
    if (comments.length === 0) {
      return res.status(404).json({ error: "No comments found" });
    }

    // sending the comments
    res.status(200).json({success: true, comments: comments});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};