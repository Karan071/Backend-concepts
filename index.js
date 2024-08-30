// const express = require("express");
import 'dotenv/config'
import express from 'express';
const app = express();
// const PORT = 4000

//Response object and Request object
// testing the api endpoint 
app.get("/", (req,res) => {
    res.json({
        message : "Api end points are working"
    });
});

//listenin to the server
app.listen(process.env.PORT, function(req,res){
    console.log(`Server is runnin on ${process.env.PORT}`)
})