import Video from "../model/video.js";

export const editVideo = async (req, res) => {
    try {
        const { title, description, thumbnailUrl, assetUrl, category } = req.body;
        const { user } = req;
        const { channel } = user;
        const { videoId } = req.params;
        const video = await Video.findById(videoId);
        if (!video) {
            return res.status(404).json({ success: false, message: "Video not found" });
        }

        video.title = title;
        video.description = description;
        video.thumbnailUrl = thumbnailUrl;
        video.assetUrl = assetUrl;
        video.category = category;

        await video.save();
        res.status(200).json({ success: true, message: "Video updated successfully", video });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}