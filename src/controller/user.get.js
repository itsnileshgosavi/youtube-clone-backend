import User from "../model/user.js";

export const getUser = async (req, res) => {
    try {
        const userid =req.user._id; //getting the user id from the cookie
        const user = await User.findById(userid); //finding the user in the database
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" }); //if the user is not found sending 404
        }
        res.status(200).json({ success: true, user:{_id:user._id,
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            avatar:user.avatar,
            createdAt:user.createdAt,
            channels:user.channels}
         }); //sending the user
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}