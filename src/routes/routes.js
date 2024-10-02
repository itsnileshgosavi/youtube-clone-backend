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
const router = Router();

//user routes
router.post("/user/signup", signup); //signup
router.post("/user/signin", signin ); //login
router.get("/user",tokenAuthenticator, getUser ); //get updated data of logged in user

//channel routes
router.post("/channel/create", tokenAuthenticator, createChannel); //create channel
router.get("/channel/:handle", getChannel); //get channel by handle
router.get("/channel",tokenAuthenticator, getChannelByUser); //get channel of signed in user

//video routes
router.post("/video/upload", ); //upload video
router.get("/video/:videoId", getVideoById); //get video
router.get("/videos", getVideos); //get all videos

//comment routes
router.post("/comment/create/:videoId",tokenAuthenticator, createComment); //create comment
router.delete("/comment/delete/:commentId",tokenAuthenticator, deleteComment ); //remove comment
router.put("/comment/edit/:videoId",tokenAuthenticator, editComment); //edit comment
router.get("/comments/:videoId", getComments); //get all comments of a video

//like routes
router.post("/like/create/:videoId",tokenAuthenticator, createLike ); //create like
router.put("/like/remove/:videoId",tokenAuthenticator, undoLike); //remove like
router.post("/dislike/create/:videoId",tokenAuthenticator, createDislike); //create dislike
router.put("/dislike/remove/:videoId",tokenAuthenticator, undoDislike ); //remove dislike

//subscription routes
router.post("/subscription/create/:channelId",tokenAuthenticator, createSubscription ); //create subscription
router.post("/subscription/remove/:channelId",tokenAuthenticator, undoSubscription); //remove subscription

export default router;