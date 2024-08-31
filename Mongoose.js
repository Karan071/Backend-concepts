import mongoose from "mongoose";
mongoose.connect("");

const userSchema = new mongoose.Schema(
    {
        username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        },
        email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        },
        password: {
        type: String,
        required: true,
        },
    },
    { timestamps: true }
);

const user = mongoose.model("user", userSchema);
