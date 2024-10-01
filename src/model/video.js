import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  commentId: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',  // Reference to the users collection
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  }
});

const videoSchema = new Schema({
  videoId: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  channelId: {
    type: Schema.Types.ObjectId,
    ref: 'Channel',  // Reference to the channels collection
    required: true,
  },
  uploader: {
    type: Schema.Types.ObjectId,
    ref: 'User',  // Reference to the users collection
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  uploadDate: {
    type: Date,
    required: true,
  },
  comments: [commentSchema],  // Array of comment objects
}, { timestamps: true });

const Video = mongoose.model('Video', videoSchema);

export default Video;
