import mongoose from "mongoose"
const videoSchema = new mongoose.Schema({
    videoFile : {
        type : String,
        required : true
    },
    thumbnail :{
        type : String,
        required : true,
    },
    
})

const videoModel = mongoose.model("video",videoSchema);

export default videoModel;