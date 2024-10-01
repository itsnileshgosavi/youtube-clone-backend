import { Schema } from "mongoose";
import mongoose from "mongoose";

const channelSchema = new Schema(
  {
    channelId: {
      type: String,
      required: true,
      unique: true,
    },
    channelName: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the users collection
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    channelBanner: {
      type: String,
    },
    subscribers: {
      type: Number,
      default: 0,
    },
    videos: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Channel = mongoose.model("Channel", channelSchema);
export default Channel;
