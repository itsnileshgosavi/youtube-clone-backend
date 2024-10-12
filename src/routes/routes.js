import { Router } from "express";
import { signup } from "../controller/user.signup.js";
import { signin } from "../controller/user.signin.js";
import { createChannel } from "../controller/channel.create.js";
import { tokenAuthenticator } from "../middleware/tokenAuthenticator.js";
import { getChannel } from "../controller/channel.get.js";
import { getChannelByUser } from "../controller/channel.getbyuser.js";
import { getUser } from "../controller/user.get.js";
import { getVideos } from "../controller/videos.get.js";
import { getVideoById } from "../controller/video.getById.js";
import { createComment } from "../controller/comment.create.js";
import { deleteComment } from "../controller/comment.delete.js";
import { editComment } from "../controller/comment.edit.js";
import { createLike } from "../controller/like.create.js";
import { createDislike } from "../controller/dislike.create.js";
import { undoLike } from "../controller/like.undo.js";
import { undoDislike } from "../controller/dislike.undo.js";
import { createSubscription } from "../controller/subscribe.create.js";
import { undoSubscription } from "../controller/subscribe.undo.js";
import { getComments } from "../controller/comments.get.js";
import { uploadVideo } from "../controller/video.upload.js";
import { getChannelById } from "../controller/channel.getbyid.js";
import { getVideosByChannel } from "../controller/videos.channel.get.js";
import { deleteVideo } from "../controller/video.delete.js";
import { editVideo } from "../controller/video.edit.js";
import upload from "../config/multerConfig,.js";
import { uploadAvatar } from "../controller/uploadAvatar.js";
import { uploadBanner } from "../controller/uploadBanner.js";
import { increamentViewCount } from "../controller/increamentViewCount.js";
import { signout } from "../controller/user.signout.js";

const router = Router();

//user routes
router.post("/user/signup", signup); //signup
router.post("/user/signin", signin ); //login
router.get("/user",tokenAuthenticator, getUser ); //get updated data of logged in user
router.post("/user/logout", tokenAuthenticator, signout);

//channel routes
router.post("/channel/create", tokenAuthenticator, upload.single('avatar'), createChannel); //create channel
router.get("/channel/:handle", getChannel); //get channel by handle
router.get("/channel",tokenAuthenticator, getChannelByUser); //get channel of signed in user
router.get("/channelbyid/:id", getChannelById); //get channel by id

//video routes
router.post("/video/upload", tokenAuthenticator, uploadVideo); //upload video
router.get("/video/:videoId", getVideoById); //get video
router.get("/videos", getVideos); //get all videos
router.get("/videos/channel/:channelId", getVideosByChannel); //get video by channel id
router.delete("/video/delete/:videoId",tokenAuthenticator, deleteVideo ); //remove video
router.put("/video/edit/:videoId",tokenAuthenticator, editVideo); //edit video

//comment routes
router.post("/comment/create/:videoId",tokenAuthenticator, createComment); //create comment
router.delete("/comment/delete/:commentId",tokenAuthenticator, deleteComment ); //remove comment
router.put("/comment/edit/:videoId",tokenAuthenticator, editComment); //edit comment
router.get("/comments/:videoId", getComments); //get all comments of a video

//like routes
router.post("/video/like/:videoId",tokenAuthenticator, createLike ); //create like
router.post("/video/unlike/:videoId",tokenAuthenticator, undoLike); //remove like
router.post("/video/dislike/:videoId",tokenAuthenticator, createDislike); //create dislike
router.post("/video/undodislike/:videoId",tokenAuthenticator, undoDislike ); //remove dislike

//subscription routes
router.post("/channel/subscribe/:channelId",tokenAuthenticator, createSubscription ); //create subscription
router.post("/channel/unsubscribe/:channelId",tokenAuthenticator, undoSubscription); //remove subscription

//upload image
router.post("/upload/avatar", upload.single('avatar'), uploadAvatar);//upload avatar to cloudinary
router.post("/upload/banner/:channelId", tokenAuthenticator, upload.single('banner'), uploadBanner); //upload banner to cloudinary

//increase view count
router.get("/video/view/:videoId", increamentViewCount);//increase view count

export default router;