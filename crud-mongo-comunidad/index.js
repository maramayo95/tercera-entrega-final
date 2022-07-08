const mongoose = require('mongoose');
const app = require('./app/app')


// const sendSMS = require('./app/utils/twilioSms');
// const sendWhatsapp = require('./app/utils/twilioWhatsapp')
require('dotenv').config()


const PORT = process.env.PORT
const urlBase = process.env.DB

if (process.env.AMBIENTE == 'mongo') mongoose.connect(urlBase)

// sendSMS()

// sendWhatsapp()

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
