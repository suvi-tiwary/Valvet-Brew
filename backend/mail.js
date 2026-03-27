import nodemailer from "nodemailer"


const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

export const sendMail= async(to,otp)=>{
    try {
        await transporter.sendMail({
            from:process.env.EMAIL,
            to,
            subject:"Reset your password",
             html:`<p>Your otp is <b>${otp}</b>. And it expires in 5 minutes</p>`
        })
    } catch (error) {
        return res.status(500).send(`nodemailer sendotp error ${error}`)
    }
}