import e from "express";
import channel from "../model/channel.js";
import User from "../model/user.js";

export const createChannel = async (req, res) => {
  try {
    const { channelId, channelName, description, avatar, channelBanner } = req.body;//getting the channel details from the request body
    const owner = req.user._id;//getting the userid from the cookie
    //creating a new channel
    const newChannel = new channel({
      channelId,
      channelName,
      avatar,
      owner,
      description,
      channelBanner,
    });
    //saving the new channel
    const savedChannel = await newChannel.save();

    //updating the user's channels in the database
    if (savedChannel) {
      await User.findByIdAndUpdate(owner, {
        $push: {
          channels: { _id: savedChannel._id, handle: savedChannel.channelId, name: savedChannel.channelName, avatar: savedChannel.avatar },
        },
      });
      res.status(201).json({
        success: true,
        message: "Channel created successfully",
        newChannel,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Channel creation failed",
      });
    }
  } catch (error) {
    //if channel already exists with the given id
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Sorry, this channel handle is already taken",
        error,
      });
    }
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error,
    });
  }
};
