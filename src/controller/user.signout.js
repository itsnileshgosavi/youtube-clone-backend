
export function signout(req, res) {
    res.clearCookie("authtoken", {
        sameSite: "none",
        secure: true,
        Credentials: true,
    });
    res.status(200).json({ success: true, message: "Logged out successfully" });
}