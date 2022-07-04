const mongoose = require('mongoose');
const app = require('./app/app')
const sendMail = require('./app/config/nodemailer');
const sendSMS = require('./app/config/twilioSms');
require('dotenv').config()


const PORT = process.env.PORT
const urlBase = process.env.DB

if (process.env.AMBIENTE == 'mongo') mongoose.connect(urlBase)


// app.get('/login', (req,res)=> {
//     res.render('login')
// })
// app.get('/register', (req,res)=> {
//     res.render('register')
// })

// sendMail()
sendSMS()

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
