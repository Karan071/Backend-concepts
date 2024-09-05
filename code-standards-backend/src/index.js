import connectDB from "./db/db.js";
import dotenv from 'dotenv'


dotenv.config();
//connection string
connectDB()
.then(()=>{
    console.log(process.env.PORT || 8000, () => {
        console.log(`Server is up and runnnin on ${process.env.PORT}`);
        // Event listener for "Error" event on app
        app.on("Error",(err) => {
            console.log("Express App is not able to connect", err);
        })
    })
})
.catch((err) => {
    console.log("MONGO DB CONNECTION FAILED !!", err);
})












// DB connection strings
// import express from "express"
// const app = express()
// // function connectDB (){}//this is good way to use DB connection string
// // connectDB() // calling the function
//---------------------------------------------------------------------------//
// //better way 

// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         app.on("Error", (err) => {
//             console.log("Express is not able to connect with the DB")
//             throw err;
//         });
//         //listen to app
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is up and runnnin on ${process.env.PORT}`)
//         })
//     } catch (error) {
//        console.error("ERROR: ", error);
//        throw err ;
//     }
// })();