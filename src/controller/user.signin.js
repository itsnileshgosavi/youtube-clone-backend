import User from "../model/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res
                .status(404)
                .json({ message: "User with this email does not exist", success: false });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Email or password is incorrect", success: false });
        }
        //creating a token
        const token = jwt.sign({ _id: user._id, email: user.email, firstName: user.firstName, lastName: user.lastName }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        //storing token in cookie
        res.cookie("authtoken", token, {
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
            httpOnly: false, //allowing the accessing from js in order to use the token payload
        });
        
        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user,
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}