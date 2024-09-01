import mongoose from "mongoose"
mongoose.connect("")

const hopitalHours = new mongoose.Schema({
    workingHour : {
        type : Number,
        required : true
    }
})

const doctorsSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    salary : {
        type : Number,
        required: true
    },
    qualifications : {
        type : String,
        required : true
    },
    experience : {
        type : Number,
        default : 0
    },
    worksInHospiptal : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Hospital',
        }
    ]

},{ timestamps : true})

export const doctorsModel = mongoose.model("MedicalRecords",doctorsSchema )