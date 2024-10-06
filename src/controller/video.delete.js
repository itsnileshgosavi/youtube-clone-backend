import Video from "../model/video.js";

export const deleteVideo = async (req, res) => {
    try {
        const { videoId } = req.params;
        const video = await Video.findByIdAndDelete(videoId);
        if (!video) {
            return res.status(404).json({ success: false, message: "Video not found" });
        }
        res.status(200).json({ success: true, message: "Video deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}