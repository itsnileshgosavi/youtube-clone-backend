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
      default: "",
    },
    channelBanner: {
      type: String,
      default: "",
    },
    subscribers: {
      type: Number,
      default: 0,
    },
    subscribedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "User", // Reference to the users collection
      },
    ],
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
