import mongoose from "mongoose"
mongoose.connect("")
const patientSchema = new mongoose.Schema({
    name : {
        type : String,
        required :true,
    },
    diagonsedWith : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    bloodGroup : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        enum : ["M","F","Others"]
    },
    admittedIn : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Hospital"
    }
}, {timestamps : true} )

export const patientModel = mongoose.model("Patients",patientSchema )