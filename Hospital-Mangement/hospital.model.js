import mongoose from "mongoose"
mongoose.connect("")
const hospitalSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    addressLine1 : {
        type : String,
        required : true
    },
    addressLine2: {
        type : String,
        required : false
    },
    city : {
        type : String,
        required : true
    },
    specializedIn : [
        { 
        type : String,
        }
    ]
    
})

export const hospitalModel = mongoose.model("Hospital",hospitalSchema )