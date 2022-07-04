const mongoose = require('mongoose');
const app = require('./app/app')
const sendMail = require('./app/config/nodemailer');
const sendSMS = require('./app/config/twilioSms');
const sendWhatsapp = require('./app/config/twilioWhatsapp')
require('dotenv').config()


const PORT = process.env.PORT
const urlBase = process.env.DB

if (process.env.AMBIENTE == 'mongo') mongoose.connect(urlBase)

 sendMail()
// sendSMS()

// sendWhatsapp()

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
