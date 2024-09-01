import mongoose from "mongoose"
mongoose.connect("")
const doctorsSchema = new mongoose.Schema({

})

export const doctorsModel = mongoose.model("MedicalRecords",doctorsSchema )