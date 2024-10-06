import Channel from "../model/channel.js";

export const getChannelById = async (req, res) => {
    try {
        const { id } = req.params;
        const channel = await Channel.findById(id);
        res.status(200).json({ success: true, channel });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}