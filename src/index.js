//require('dotenv').config({path : './env'})
import dotenv from 'dotenv'
import { app } from './app.js';
import connectDB from "./db/index.js";
dotenv.config({
    path: './.env'
})

console.log(process.env.MONGO_URI)
connectDB().then(()=> {
    app.listen(process.env.PORT || 8000 , ()=> {console.log('server is running ')})
}).catch( err=>
    console.log('there is an error in mongodb connection ' , err)

)

//iffe method of creating

// const app = express()
// import express from "express";

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
   
//     app.on('error' , (error)=>{
//         console.log('ERROR' , error)
//         throw error
//     })
//     app.listen(process.env.PORT  , () => {
//         console.log(`App is running on ${process.env.PORT}`)

//     })
//   } catch (error) {
//     console.error(error);
//     throw err;
//   }
// })();
