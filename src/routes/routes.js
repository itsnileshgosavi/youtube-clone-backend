import { Router } from "express";
import { signup } from "../controller/user.signup.js";
import { signin } from "../controller/user.signin.js";
import { createChannel } from "../controller/channel.create.js";
import { tokenAuthenticator } from "../middleware/tokenAuthenticator.js";
import { getChannel } from "../controller/channel.get.js";
import { getChannelByUser } from "../controller/channel.getbyuser.js";
import { getUser } from "../controller/user.get.js";

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
router.get("/video/:videoId", ); //get video
router.get("/videos", ); //get all videos

//comment routes
router.post("/comment/create/:videoId", ); //create comment

//like routes
router.post("/like/create/:videoId", ); //create like

export default router;