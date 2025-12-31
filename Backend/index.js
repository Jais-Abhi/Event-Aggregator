import express from "express"
import { configDotenv } from "dotenv"
import connectDB from "./db.js"
configDotenv()


const app = express()

const port  = process.env.PORT || 8000
app.listen(port,async()=>{
    console.log("app is running on port ",port)
    await connectDB()
})

