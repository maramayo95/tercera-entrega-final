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
        subject: 'Comprobante de Compra',
        html: html
    }
    
      await transporter.sendMail(mailOptions)
   
   
}

module.exports = sendMail