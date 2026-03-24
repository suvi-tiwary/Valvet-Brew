import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/connectDb.js"
import authRouter from "./Routers/authRouter.js"


const port = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use("/api",authRouter)

app.listen(port,()=>{
    connectDb()
    console.log(`server is running at port ${port}`)
})