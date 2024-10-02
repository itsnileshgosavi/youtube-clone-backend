import Video from "../model/video.js";

export const createLike = async (req, res) => {
    try {
        const { videoId } = req.params;
        const user = req.user;
        const video = await Video.findById(videoId);
        if (!video) {
            return res.status(404).json({ success: false, message: "Video not found" });
        }
        if(video.likedBy.includes(user._id)){
            return res.status(400).json({ success: false, message: "Already liked" });
        }
        video.likedBy.push({ user: user._id });
        video.likes += 1;   
        await video.save();
        res.status(201).json({ success: true, message: "Liked successfully", video });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}