import Video from "../model/video.js";

export const undoDislike = async (req, res) => {
    try {
        const { videoId } = req.params;//getting the video id from the url params
        const user = req.user;//getting the user from the cookie
        const video = await Video.findById(videoId);//searching the video in the database
        if (!video) {
            return res.status(404).json({ success: false, message: "Video not found" });
        }
        video.dislikedBy = video.dislikedBy.filter((dislike) => dislike.toString() !== user._id.toString());//decrementing the dislikes
        video.dislikes -= 1;//decrementing the dislikes
        await video.save();//saving the updated video
        res.status(200).json({ success: true, message: "Undo dislike successfully", video });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}