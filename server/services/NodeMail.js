const nodemailer = require('nodemailer');
const dotenv = require("dotenv")
// const htmlFnc = require('../Helper/EmailHtml')
dotenv.config()

async function Sendmail(MailData, htmlFnc, htmlFncOptions) {

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,

            auth: {
                user: process.env.email,
                pass: process.env.emailPassword,
            },
        });
        const mailOptions = {
            from: process.env.email,
            to: MailData.email,
            subject: MailData.subject,
            html: htmlFnc({ ...htmlFncOptions })
        };
        const result = await transporter.sendMail(mailOptions)
        console.log("result", result)
        if (result.accepted.length > 0) {
            return true
        }
        else {
            return null
        }
    } catch (error) {
        console.log("eroror in sending mail", error)
        return null
    }

}


module.exports = Sendmail 
