
export function signout(req, res) {
    res.clearCookie("authtoken", {
        sameSite: "none",
        secure: true,
        Credentials: true,
        domain:"youtube-backend-eight.vercel.app",
    });

    res.status(200).json({ success: true, message: "Logged out successfully" });
}