# Backend Concepts

# Components to focus on : 
- Programming language -> Java,JS, PHP, Golang, C++.
- Database -> Mongo, MySQL, Postgres, SqLite. {ORM,ODM} 

- API -> Application Programming Interface  (basically responses)
    - APIs are mechanisms that enable two software components to communicate with each other using a set of definitions and protocols
    - Example : the weather bureau’s software system contains daily weather data. The weather app on your phone “talks” to this system via APIs and shows you daily weather updates on your phone.

![concept of backend-communication](image.png)

# Javascript based Backend
- things we'll be handling in JS based backend
    1) Data
    2) Files
    3) Third-party API's

- JS runtime environment : NodeJS / Bun / Deno
- it’s essential to maintain a well-structured codebase to ensure scalability, maintainability, and collaboration

# File directory structure :
    - Package.json , .env files, (Readme,git,lint,prettier)
    - Some important files
     1) index : db connect
     2) App : config,cookie,urlencode
     3) Constants : enums, db-name

- For reference (File directory) : https://medium.com/@datasciencenexus/how-to-structure-your-backend-code-in-node-js-c33a31fbf458

![File Structure](image-1.png)

# Directory Structure
    1) DB : Database schema 
    2) Model : Defining Data Structures
    3) Controllers : Controllers are where the logic of your application resides (functions and methods) 
    4) Routes : Mapping the Streets and Highways
    5) Middleware : Helpers for Request Handling
    6) Utils : The utils directory is the home for utility functions that are used throughout your application. 
    7)  More (depends on the file system)



## Deploy backend code in Productions

![alt text](image-2.png)

 * Basic command : npm init -y (to init the node program)

 # Express:  Web framework
    Boiler plate code : 
    const express = require("express");
    const app = express();
    const PORT = 3000

    //Response object and Request object
    // testing the api endpoint 
    app.get("/", (req,res) => {
        res.json({
            message : "Api end points are working"
        });
    });

    //listenin to the server
    app.listen(PORT, function(req,res){
        console.log(`Server is runnin on ${PORT});
    });

# Notes: 
 - const express = require("express") : commmon JS type
 - export express from "express" : using Module types

# dotenv
    Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
    import 'dotenv/config'

# Connect frontend and backend : Fullstack proxy and cors

 - ToolChains and Bundlers : 
        A toolchain is a collection of programming tools that are used to create a software product or perform a complex software development task. A bundler is a tool that helps to bundle JavaScript and CSS.
    
# Additional Libraries
 - Axios : Axios is a promise-based HTTP Client for node.js and the browser.
  It is isomorphic (= it can run in the browser and nodejs with the same codebase).
   On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

- CORS : 
    Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain.
    ![alt text](image-3.png)
    ![alt text](image-4.png)

    link : https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    
    - IP/Domain -> whitelist

- Proxy:
    ![alt text](image-5.png)



## Data Modelling with Mongoose

- Things to keep in mind while designing a Data model, think of all the data point / fields which are required for the backend, so accordingly we can plan the Model with ease.
- Planning the Data model is required for a better and a successful execution of the Project.

![alt text](image-6.png)

Mongoose : Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. 
Mongoose supports Node.js and Deno (alpha).

##  Steps to create a schema:
    import mongoose from "mongoose"
    mongoose.connect("connection string");

    const userSchema = new mongoose.Schema({
        title : String
        // other fields
    })

    export const User = mongoose.model("User",userSchema)

    // whenever we save the schema in mongo db it make the name plural
    eg. "Todo" => todos (lower case and 's' is added in the end)
    
    note : In MongoDB, especially when using Object Data Modeling (ODM) libraries like Mongoose, collection naming follows certain conventions to maintain consistency and predictability. Here's why a model named "Todo" typically maps to a collection named "todos"

Notes : 
- DevDependencies
    These are the packages that are only needed for development and testing, and are not required for your application to run in production. Examples of devDependencies include Babel and Webpack. 
    
- Dependencies
    These are the packages that are required for your application to run in production. They are automatically installed when you run npm install in your project directory. 

 like nodemon and prettier should be used in development phase only not on production grade

# Production level code standards :  file structure 
![alt text](image-7.png)
    (Basic idea - keep things organized, so the code wont get verbose and to maintain the code readability)

#### Some libararies to add into the codebase.
1) Prettier -> .prettierrc ->  configs for the files 
            -> .prettierignore -> to add the names of the files to ignore



#### IIFE (Immediately Involved function Expression)
     - A javascript IIFE is a function that runs the moment it is invoked or called in the Javavscript event loop.
     - Syntax : 
        (function (){ 
            // Function Logic Here. 
        })();
        or
        ()(); //  The function is wrapped in parentheses (function() { ... }), followed by () to immediately invoke it.


## Custom API response and Error Handling
    - Cookie-parser : Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
    - Multer : 
    - Middleware : It is those methods/functions/operations that are called BETWEEN processing the Request and sending the Response in your application method.
    - express.json() and express.urlencoded() for POST and PUT requests, because in both these requests you are sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request.

## StatusCode
![alt text](image-8.png)

