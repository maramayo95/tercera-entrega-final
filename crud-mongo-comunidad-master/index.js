const mongoose = require('mongoose');
const app = require('./app/app')
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


app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
