import jwt from "jsonwebtoken"


export const isAuth = async(req,res,next)=>{
    try {
        const token = await req.cookies.token
        if(!token){
            return res.status(400).send("token not found")
        }
        console.log(token)
        const decode=  jwt.verify(token,process.env.JWT_SCREATE)
        console.log(decode)
        req.userId = decode.userId

        next()
        
    } catch (error) {
        return res.status(500).send(`is auth error ${error}`)
    }
}