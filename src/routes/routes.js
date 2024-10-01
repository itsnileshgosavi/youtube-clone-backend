import { Router } from "express";
import { signup } from "../controller/user.signup.js";
import { signin } from "../controller/user.signin.js";
import { createChannel } from "../controller/channel.create.js";
import { tokenAuthenticator } from "../middleware/tokenAuthenticator.js";

const router = Router();

//user routes
router.post("/user/signup", signup); //signup
router.post("/user/signin", signin ); //login

//channel routes
router.post("/channel/create", tokenAuthenticator, createChannel); //create channel

//video routes
router.post("/video/upload", ); //upload video

//comment routes
router.post("/comment/create", ); //create comment

//like routes
router.post("/like/create", ); //create like

export default router;