import Channel from "../model/channel.js";

export const createSubscription = async (req, res) => {
    try {
        const { channelId } = req.params;
        const user = req.user;
        const channel = await Channel.findById(channelId);
        if (!channel) {
            return res.status(404).json({ success: false, message: "Channel not found" });
        }
        if (channel.subscribedBy.includes(user._id)) {
            return res
                .status(409)
                .json({ success: false, message: "User already subscribed" });
        }
        channel.subscribedBy.push(user._id);
        channel.subscribers += 1;
        await channel.save();
        res.status(201).json({ success: true, message: "Subscribed successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}