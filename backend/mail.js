const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});