import Video from "../model/video.js";

export const getVideoById = async (req, res) => {
    try {
        const { videoId } = req.params;
        const video = await Video.findById(videoId);
        if (!video) {
            return res.status(404).json({ success: false, message: "Video not found" });
        }
        res.status(200).json({ success: true, video });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}