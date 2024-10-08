import Channel from "../model/channel.js";

export const undoSubscription = async (req, res) => {
    try {
        const { channelId } = req.params;//getting the channel id from the url params
        const user = req.user; //getting the user from the cookie
        const channel = await Channel.findById(channelId);//finding the channel
        if (!channel) {
            return res.status(404).json({ success: false, message: "Channel not found" });
        }
        //checking if the user is subscribed to the channel
        if (!channel.subscribedBy.includes(user._id)) {
            return res
                .status(409)
                .json({ success: false, message: "User not subscribed" });
        }
        //removing the user from the subscribedBy array
        //and decrementing the subscribers
        channel.subscribedBy = channel.subscribedBy.filter((sub) => sub.toString() !== user._id.toString());
        channel.subscribers -= 1;
        await channel.save();//saving the channel
        res.status(201).json({ success: true, message: "Unsubscribed successfully" });//sending success
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}