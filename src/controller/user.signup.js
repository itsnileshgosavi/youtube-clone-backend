import User from "../model/user.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, avatar } = req.body;
    const pwdHash = await bcrypt.hash(password, 10); // storing hashed password in DB
    // creating new user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: pwdHash,
      avatar
    });

    // sending success response
    res.status(201).json({
      success: true,
      message:"User registered successfully",
    });
  } catch (error) {
    // checking if user already exists
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
        error,
      });
    }

    // sending error response
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error,
    });
  }
};
