// const express = require("express");
import "dotenv/config";
import express from "express";
const app = express();
const port = process.env.PORT || 4000;

//Response object and Request object
// testing the api endpoint
app.get("/", (req, res) => {
    res.json({
        message: "Api end points are working",
    });
});

//list of 5 jokes
const jokes = [
    {
        id: 1,
        title: "Why don't programmers like nature?",
        joke: "It has too many bugs.",
    },
    {
        id: 2,
        title: "Why do Java developers wear glasses?",
        joke: "Because they don't C#.",
    },
    {
        id: 3,
        title: "How many programmers does it take to change a light bulb?",
        joke: "None, that's a hardware problem.",
    },
    {
        id: 4,
        title: "Why do programmers prefer dark mode?",
        joke: "Because the light attracts bugs.",
    },
    {
        id: 5,
        title: "What’s a programmer’s favorite hangout place?",
        joke: "The Foo Bar.",
    },
    {
        id: 6,
        title: "Why was the developer unhappy at their job?",
        joke: "They wanted arrays.",
    },
];

app.get('/jokes', (req,res) => {
    res.json({jokes});
})

//listenin to the server
app.listen(port, function () {
    console.log(`Server is runnin on ${port}`);
});
