import { Router } from "express";
import { signup } from "../controller/user.signup.js";
import { signin } from "../controller/user.signin.js";

const router = Router();

//user routes
router.post("/user/signup", signup); //signup
router.post("/user/signin", signin ); //login

//video routes
router.post("/video/upload", ); //upload video

//comment routes
router.post("/comment/create", ); //create comment

//like routes
router.post("/like/create", ); //create like

export default router;