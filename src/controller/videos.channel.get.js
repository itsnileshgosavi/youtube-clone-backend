import Video from "../model/video.js";

export const getVideosByChannel = async (req, res) => {
    try {
        const { channelId } = req.params; //getting the channel id from the url params
        const videos = await Video.find({ 'channel._id': channelId }); //finding all videos with the channel id
        if (videos.length === 0) {
            return res.status(404).json({ success: false, message: "No videos found" }); //if no videos are found, returning a 404
        }
        res.status(200).json({ success: true, videos: videos });//sending all the videos
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}