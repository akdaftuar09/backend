import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path: './env'
})


connectDB()

// import express from 'express'
// const app = express()

// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
//         app.on("error", ()=> {
//             console.log("ERRR: ", error)
//             throw error
//         })
//         app.listen(process.env.PORT, ()=> {
//             console.log(`App is listenting on port ${process.env.PORT}`);
            
//         })

//     } catch (error){
//         console.error("Error: ", error)
//         throw err

//     };
    
// })()


