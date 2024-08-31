import express from "express";
import cors from "cors"
const App = express();
const port = process.env.PORT || 8001;



App.get("/api/jokes", function (req, res) {
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
    res.json(jokes)
});

App.listen(port, function(){
    console.log(`server is running on ${port}`);
});
