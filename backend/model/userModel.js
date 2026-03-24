import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum:["User","Owner","Delivery Boy"]
    },
    otp:{
        type:String
    },
    otpVerified:{
     type:Boolean,
     default:false
    },
    otpExpires:{
        type:Date
    }

},{timestamps:true})

const User = mongoose.model("User",userSchema)
export default User