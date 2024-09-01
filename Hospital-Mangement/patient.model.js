import mongoose from "mongoose"
mongoose.connect("")
const patientSchema = new mongoose.Schema({

})

export const patientModel = mongoose.model("MedicalRecords",patientSchema )