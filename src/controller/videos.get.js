import Video from "../model/video.js";

export const getVideos = async (req, res) => {
    try {
        const videos = await Video.find({});
        if (videos.length === 0) {
            return res.status(404).json({ success: false, message: "No videos found" });
        }
        res.status(200).json({ success: true, videos });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}