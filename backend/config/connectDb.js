import mongoose from "mongoose"

const connectDb = async()=>{
    try {
        console.log("URL:", process.env.MONGODB_URL);
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("database connected")
    } catch (error) {
        console.log("database error",error.message)
    }
}

export default connectDb