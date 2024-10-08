import Video from "../model/video.js";

export const undoLike = async (req, res) => {
    try {
        const { videoId } = req.params;//getting the video id from the url params
        const user = req.user;//getting the user from the cookie
        const video = await Video.findById(videoId);//searching the video in the database
        if (!video) {
            return res.status(404).json({ success: false, message: "Video not found" });
        }
       
        //remove like if it exists
        video.likedBy = video.likedBy.filter((like) => like.toString() !== user._id.toString());
        video.likes -= 1;//decrement the likes
        await video.save();//saving the updated video
        res.status(200).json({ success: true, message: "Undo like successfully", video });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}