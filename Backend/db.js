import mongoose from "mongoose";

const connectDB = async()=>{
    mongoose.connect(process.env.ATLAS_URL)
    .then(()=>{
        console.log("Connected to Database")
    })
    .catch((err)=>{
        console.log("error while connecting to DB",err?.message)
    })
}

export default connectDB;