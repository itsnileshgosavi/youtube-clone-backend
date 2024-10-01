import e from "express";
import channel from "../model/channel.js";
import User from "../model/user.js";

export const createChannel = async (req, res) => {
  try {
    const { channelId, channelName, description, channelBanner } = req.body;
    const owner = req.user._id;
    const newChannel = new channel({
      channelId,
      channelName,
      owner,
      description,
      channelBanner,
    });
    const savedChannel = await newChannel.save();
    if (savedChannel) {
      await User.findByIdAndUpdate(owner, {
        $push: {
          channels: { _id: savedChannel._id, handle: savedChannel.channelId },
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
