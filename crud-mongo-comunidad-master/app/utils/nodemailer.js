const {createTransport} = require('nodemailer')
const   sendMail = async (html) =>  {
    const TEST_MAIL = 'botDenodemailer.95@gmail.com'
    
    const transporter = createTransport({
        service: 'gmail',
        port: 587,
        auth: {
            user: TEST_MAIL ,
            pass: process.env.NODEMAILERPASS
        }
    });
    
    const mailOptions = {
        from : TEST_MAIL,
        to: 'matiasaramayo.dev@gmail.com',
        subject: 'Mail de prueba Node.js',
        html: html
    }
    
        const  info = await transporter.sendMail(mailOptions)
        console.log(info)
   
}

module.exports = sendMail