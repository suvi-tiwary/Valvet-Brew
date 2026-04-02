import bcrypt from "bcryptjs"
import User from "../model/userModel.js"
import gentoken from "../config/token.js"
import { sendMail } from "../mail.js"

export const Signup = async(req,res)=>{
    try {
        const {fullname,email,password,role}=req.body
        const existUser = await User.findOne({email})
        if(existUser){
            return res.status(400).json({message:"User already exist"})
        }
        if(password.length<7){
            return res.status(400).json({message:"Password must be of 7 digits "})
        }

        if (!fullname || !email || !password || !role) {
         return res.status(400).json({ message: "All fields are required" })
}
        const hassedPassword= await bcrypt.hash(password,10)
         const user = await User.create({
            fullname,email,password:hassedPassword,role
        })

        const token = gentoken(user._id)

       
         res.cookie("token", token, {
        httpOnly: true,
        secure: false,          // true ONLY in production (https)
        sameSite: "lax",        // 🔥 ADD THIS
         maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(201).send(user)

    } catch (error) {
        return res.status(500).send(`Signup error ${error}`)
    }
}


export const SignIn = async(req,res)=>{
    try {
        const {email,password}=req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"User does not exist"})
        }
        if(!email || !password){
            return res.status(400).send("all fields are required")
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).send("incorrect password")
        }

        const token = gentoken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite: "lax",
            maxAge:7*24*60*60*1000
        })

        return res.status(200).send(user)

    } catch (error) {
        return res.status(500).send(`SignIn error ${error}`)
    }
}


export const SignOut= async(req,res)=>{
    try {
      res.clearCookie("token")
    } catch (error) {
        return res.status(500).send(`Signout error ${error}`)
    }
}

export const sendOtp= async(req,res)=>{
    try {
        let {email}=req.body
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).send("user does not exist")
        }
        const otp = await Math.floor(100000+ Math.random()*900000).toString()
        user.otp=otp
        user.otpExpires=Date.now()+5*60*1000
        
        await user.save()
        await sendMail(email,otp)
        return res.status(200).send("otp send successfully")
    } catch (error) {
        return res.status(500).send(`send otp error ${error}`)
    }
}

export const verifyOtp = async(req,res)=>{
    try {
          let {email,otp}=req.body
        const user = await User.findOne({email})
        if(user.otp!=otp || user.otpExpires<Date.now()){
            return res.status(400).send("Incorrect OTP")
        }
        user.verifyOtp=true
        await user.save()
        return res.status(200).send("otp is verified")
        
    } catch (error) {
        return res.status(500).send(`verify otp error ${error}`)
    }
}

export const resetPassword = async(req,res)=>{
    try {
        let {email,newPassword}=req.body
        const user = await User.findOne({email})
        if(!user || !user.otpVerified){
            return res.status(400).send("otp verification required")
        }

        const hassedPassword = await bcrypt.hash(newPassword,10)
        user.password=hassedPassword
        user.otpVerified=false
        user.otpExpires=null
        user.otp=null
        await user.save()

        return res.status(200).send("Password reset done")

    } catch (error) {
        return res.status(500).send(`reset password error ${error}`)
    }
}


export const googleAuth = async(req,res)=>{
    try {
        let {fullname,email,role}=req.body
        let user = await User.findOne({email})
        if(!user){
              user =  await User.create({
                fullname,email,role
             })
        }

          const token = gentoken(user._id)
           res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite: "lax",
            maxAge:7*24*60*60*1000
        })


    } catch (error) {
        return res.status(500).send(`google auth error ${error}`)
    }
}
