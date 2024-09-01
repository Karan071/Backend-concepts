import mongoose from "mongoose"
mongoose.connect("")
const hospitalSchema = new mongoose.Schema({

})

export const hospitalModel = mongoose.model("MedicalRecords",hospitalSchema )