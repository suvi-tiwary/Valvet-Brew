import bcrypt from "bcryptjs"
import User from "../model/userModel.js"
import gentoken from "../config/token.js"

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
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            maxAge:7*24*60*60*1000
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
            maxAge:7*24*60*60*1000
        })

        return res.status(200).send(user)

    } catch (error) {
        return res.status(500).send(`SignIn error ${error}`)
    }
}


export const SignOut= async(req,res)=>{
    try {
        res.cookie.clear("token")
    } catch (error) {
        return res.status(500).send(`Signout error ${error}`)
    }
}

