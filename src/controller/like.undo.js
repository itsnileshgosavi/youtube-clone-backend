import Video from "../model/video.js";

export const undoLike = async (req, res) => {
    try {
        const { videoId } = req.params;
        const user = req.user;
        const video = await Video.findById(videoId);
        if (!video) {
            return res.status(404).json({ success: false, message: "Video not found" });
        }
       
        
        video.likedBy = video.likedBy.filter((like) => like.toString() !== user._id.toString());
        video.likes -= 1;
        await video.save();
        res.status(200).json({ success: true, message: "Undo like successfully", video });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}