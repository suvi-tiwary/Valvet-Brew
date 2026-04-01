import express from "express"
import { googleAuth, SignIn, SignOut, Signup } from "../controllers/authController.js"

const authRouter = express.Router()

authRouter.post("/signup",Signup)
authRouter.post("/signin",SignIn)
authRouter.get("/signout",SignOut)
authRouter.post("/google-auth",googleAuth)

export default authRouter