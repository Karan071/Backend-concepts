import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        lowercase : true,
        unique : true,
        required : true,
        unique : true
    },
    email : {
        type : String,
        lowercase : true,
        unique : true,
        required : true,
        unique : true
    },
    password : {
        type : String,
        lowercase : true,
        required : true,
    }
},{timestamps : true})

export const userModel = mongoose.model("User", userSchema);
