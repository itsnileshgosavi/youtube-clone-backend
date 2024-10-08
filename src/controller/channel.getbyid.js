import Channel from "../model/channel.js";

export const getChannelById = async (req, res) => {
    try {
        const { id } = req.params;//getting the channel id from the url params
        const channel = await Channel.findById(id);//finding the channel
        res.status(200).json({ success: true, channel });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}