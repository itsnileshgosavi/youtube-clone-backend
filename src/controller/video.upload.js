import Video from "../model/video.js";
import Channel from "../model/channel.js";

export const uploadVideo = async (req, res) => {
  try {
    const { title, description, thumbnailUrl, assetUrl, category } = req.body; //getting the video details from the request body
    const { user } = req; //getting the user from the cookie
    let channel = user.channels[0];
    if(!channel) {
      channel =await Channel.findOne({owner: user._id}); //incase the channel is not in the cookie getting the channel from the database
    }
     //creating a new video
    const video = new Video({
      title,
      description,
      thumbnailUrl,
      assetUrl,
      category,
      channel:{
        _id: channel._id,
        name: channel.name ? channel.name : channel.channelName,
        avatar: channel.avatar,
      },
    });

    await video.save();
    res.status(201).json({
      message: "Video uploaded successfully",
      success: true,
      video,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to upload video",
      error: error.message,
    });
  }
}