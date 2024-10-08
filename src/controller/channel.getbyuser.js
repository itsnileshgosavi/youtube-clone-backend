import Channel from "../model/channel.js";


export const getChannelByUser = async (req, res) => {
    try {
        const userId = req.user._id;//getting the user id from the cookie
        const channel = await Channel.findOne({ owner: userId });//finding the channel
        if (!channel) {
            return res.status(404).json({ success: false, message: "Channel not found" });
        }
        res.status(200).json({ success: true, channel });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}