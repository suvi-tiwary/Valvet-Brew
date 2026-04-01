import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const gentoken = (userId) => {
  try {
    const token = jwt.sign(
      {userId },              // fix key
      process.env.JWT_SCREATE,          // fix env name
      { expiresIn: "7d" }
    )
     
    return token                      // return INSIDE scope

  } catch (error) {
    console.log(`token error ${error}`)
  }
}

export default gentoken