import Video from "../model/video.js";

export const deleteVideo = async (req, res) => {
    try {
        const { videoId } = req.params;//getting the video id from the url params
        const video = await Video.findByIdAndDelete(videoId);//searching the video in the database
        if (!video) {
            return res.status(404).json({ success: false, message: "Video not found" });//if the video is not found sending 404
        }
        res.status(200).json({ success: true, message: "Video deleted successfully" }); //sending success
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}