import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/connectDb.js"
import authRouter from "./Routers/authRouter.js"
import userRouter from "./Routers/userRouter.js"
import cors from "cors"



const port = process.env.PORT || 5000

const app = express()
app.use(cors({
      origin:" http://localhost:5173",
      Credential:true
}))
app.use(express.json())
app.use("/api",authRouter)
app.use("/api",userRouter)

app.listen(port,()=>{
    connectDb()
    console.log(`server is running at port ${port}`)
})