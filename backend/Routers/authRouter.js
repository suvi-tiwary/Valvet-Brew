import express from "express"
import { SignIn, SignOut, Signup } from "../controllers/authController.js"

const authRouter = express.Router()

authRouter.post("/signup",Signup)
authRouter.post("/signin",SignIn)
authRouter.get("/signout",SignOut)

export default authRouter