import Video from "../model/video.js";

export const uploadVideo = async (req, res) => {
  try {
    const { title, description, thumbnailUrl, assetUrl, category } = req.body;
    const { user } = req;
    const { channel } = user;
    console.log(category,thumbnailUrl,assetUrl);
    const video = new Video({
      title,
      description,
      thumbnailUrl,
      assetUrl,
      category,
      channel:{
        _id: channel._id,
        name: channel.channelName,
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