import mongoose from "mongoose";

// User Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxlength: [32, "First Name should be at most 32 characters long"]
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxlength: [32, "Last Name should be at most 32 characters long"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxlength: [256, "Email should be at most 256 characters long"]
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password should be at least 6 characters long"],
        maxlength: [256, "Password should be at most 256 characters long"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("User", userSchema);
