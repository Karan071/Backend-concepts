import mongoose from "mongoose";
// using the connection string we connect with Mongo DB
mongoose.connect("Connection string");

// Creating a schema
const userSchema = new mongoose.Schema({})

//Creating a model
const user = mongoose.model("user", userSchema);
