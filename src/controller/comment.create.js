import Comment from "../model/comment.js";
import Video from "../model/video.js";

export const createComment = async (req, res) => {
    try {
        const { videoId } = req.params;
        const user = req.user;
        const { text } = req.body;
        const video = await Video.findById(videoId);
        if (!video) {   
            return res.status(404).json({ success: false, message: "Video not found" });
        }
        console.log("videoId:",videoId);
        const newComment = new Comment({
            text,
            video:videoId,
            user:{
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                avatar: user.avatar
            }
        });
        console.log(newComment);
        await newComment.save();
        res.status(201).json({ success: true, message: "Comment created successfully", newComment });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}