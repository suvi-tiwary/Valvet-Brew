import jwt from "jsonwebtoken"

export const isAuth = (req, res, next) => {
  try {
    console.log("cookies:", req.cookies)
    console.log("token:", req.cookies?.token)
    console.log("type:", typeof req.cookies?.token)

    const token = req.cookies?.token

    if (!token) {
      return res.status(401).send("Token not found")
    }
    console.log("RAW COOKIE:", req.cookies)
    console.log("TOKEN VALUE:", req.cookies.token)
    console.log("TYPE:", typeof req.cookies.token)

    const decoded = jwt.verify(token, process.env.JWT_SCREATE)
    console.log(decoded)

    req.userId = decoded.userId
    next()

  } catch (error) {
    console.log("JWT ERROR:", error.message)
    return res.status(401).send(error.message)
  }
}