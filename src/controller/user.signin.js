import User from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Channel from "../model/channel.js";

export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;//getting the email and password from the request body
        const user = await User.findOne({ email }); //finding the user in the database by email
        //sending 404 if the user is not found
        if (!user) {
            return res
                .status(404)
                .json({ message: "User with this email does not exist", success: false });
        }
        const isMatch = await bcrypt.compare(password, user.password); //comparing the password from the request body with the hashed password in the database
        if (!isMatch) {
            return res.status(401).json({ message: "Email or password is incorrect", success: false }); //sending 401 if the password is incorrect
        }
        const channel = await Channel.findOne({ owner: user._id });
        //creating a token
        const token = jwt.sign({ _id: user._id, email: user.email, firstName: user.firstName, lastName: user.lastName, channels: user.channels, channel }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        //storing token in cookie
        if (!token) {
            return res.status(500).json({ message: "Error occurred while generating token", success: false });
        }
        res.cookie("authtoken", token, {
            sameSite: "none",
            credentials: true,
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly:false,
        });
        //sending success response
        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user,
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}