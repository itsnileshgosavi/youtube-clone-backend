import User from "../model/user.js";

export const getUser = async (req, res) => {
    try {
        const userid =req.user._id;
        const user = await User.findById(userid);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, user });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}