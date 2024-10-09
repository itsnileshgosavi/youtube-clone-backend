import Video from "../model/video.js";

export const editVideo = async (req, res) => {
    try {
        const { title, description, thumbnailUrl, category } = req.body; //getting the video details from the request body
        const { user } = req; //getting the user from the cookie
        const { videoId } = req.params;
        const video = await Video.findById(videoId); //searching the video in the database
        if (!video) {
            return res.status(404).json({ success: false, message: "Video not found" });//if the video is not found sending 404
        }
        //updating the video
        video.title = title; 
        video.description = description;
        video.thumbnailUrl = thumbnailUrl;
        video.category = category;

        await video.save(); //saving the updated video
        res.status(200).json({ success: true, message: "Video updated successfully", video }); //sending the updated video

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}