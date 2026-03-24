import jwt from "jsonwebtoken"

const gentoken = async(userid)=>{
    try {
        const token = await jwt.sign({userid},process.env.JWT_SCREATE,{expiresIn:"7d"})
        console.log(token)
    } catch (error) {
        console.log(`token error ${error}`)
    }
}

export default gentoken