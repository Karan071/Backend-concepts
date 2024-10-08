import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        },
        email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        },
        password: {
        type: String,
        required: [true, 'Password is required'],
        },
    },
    { timestamps: true }
    )

const User = mongoose.model("User",UserSchema )