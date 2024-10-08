import Channel from "../model/channel.js";

export const getChannel = async (req, res) => {
    try {
        const { handle } = req.params;//getting the channel id/handle from the url params
        const channel = await Channel.findOne({ channelId: handle });//finding the channel
        //sending the channel
        if (channel) {
            res.status(200).json({ success: true, channel });
        } else {
            res.status(404).json({ success: false, message: "Channel not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}