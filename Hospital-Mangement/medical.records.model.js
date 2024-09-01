import mongoose from "mongoose"
mongoose.connect("")
const medicalRecordSchema = new mongoose.Schema({

})

export const medicalRecordModel = mongoose.model("MedicalRecords",medicalRecordSchema )