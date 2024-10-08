import Video from "../model/video.js";

export const getVideoById = async (req, res) => {
    try {
        const { videoId } = req.params; // Get the video ID from the request parameters
        const video = await Video.findById(videoId); //searching the video in the database
        if (!video) {
            return res.status(404).json({ success: false, message: "Video not found" }); //if the video is not found sending 404
        }
        res.status(200).json({ success: true, video }); //sending the video
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}