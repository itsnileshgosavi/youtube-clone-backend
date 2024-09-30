import User from "../model/user.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const pwdHash = await bcrypt.hash(password, 10); // storing hashed password in DB
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: pwdHash,
    });
    res.status(201).json({
      success: true,
      message:"User registered successfully",
      user,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
        error,
      });
    }
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error,
    });
  }
};
