import Video from "../model/video.js";

export const getVideosByChannel = async (req, res) => {
    try {
        const { channelId } = req.params;
        const videos = await Video.find({ 'channel._id': channelId });
        if (videos.length === 0) {
            return res.status(404).json({ success: false, message: "No videos found" });
        }
        res.status(200).json({ success: true, videos: videos });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}