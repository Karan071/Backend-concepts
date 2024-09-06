import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
        index : true // for optimized searching
    },
    email : {
        type : String,
        required: true,
        unique : true,
        lowercase : true,
        trim : true,
    },
     fullName : {
        type : String,
        required: true,
        unique : true,
        trim : true,
    },
    avatar : {
        type : String, // cloudinary url
        required: true,
    },
    coverImage : {
        type : String, // cloudinary url
    },
    watchHistory : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Video"
        }
    ],
    password : {
        type : String,
        required : [true , "Password is required"]
    },
    refreshToken : {
        type : String
    }

},{timestamps : true})

const userModel = mongoose.model("User", userSchema);


export default userModel;