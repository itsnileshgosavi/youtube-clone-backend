
export function signout(req, res) {
    res.clearCookie("authtoken");
    res.status(200).json({ success: true, message: "Logged out successfully" });
}