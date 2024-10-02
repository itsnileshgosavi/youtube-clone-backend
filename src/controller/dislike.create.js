import Video from "../model/video.js";

export const createDislike = async (req, res) => {
    try {
        const { videoId } = req.params;
        const user = req.user;
        const video = await Video.findById(videoId);
        if (!video) {
            return res.status(404).json({ success: false, message: "Video not found" });
        }
        if (video.dislikedBy.includes(user._id)) {
            return res.status(400).json({ success: false, message: "Already disliked" });
        }
        video.dislikedBy.push({ user: user._id });
        video.dislikes += 1;
        await video.save();
        res.status(201).json({ success: true, message: "Disliked successfully", video });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}