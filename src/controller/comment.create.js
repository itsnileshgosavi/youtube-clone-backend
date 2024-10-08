import Comment from "../model/comment.js";
import Video from "../model/video.js";

export const createComment = async (req, res) => {
    try {
        const { videoId } = req.params;//getting the video id from the url params
        const user = req.user;//getting the user from the cookie
        const { text } = req.body;//getting the text from the request body
        const video = await Video.findById(videoId);//searching the video in the database
        if (!video) {   
            return res.status(404).json({ success: false, message: "Video not found" });
        }
        console.log("videoId:",videoId);
        //create new comment
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
        await newComment.save();//saving the new comment
        res.status(201).json({ success: true, message: "Comment created successfully", newComment });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}