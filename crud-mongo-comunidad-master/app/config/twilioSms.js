const twilio = require('twilio')

const sendSMS = async () =>  {
    
    const accountSid = 'AC7f0e919e8f48573fd9948c2df416a246'
    const authToken = '49a106aa8cc6f6b517c59d6a2e7f63f3'
    
    const client = twilio(accountSid, authToken)
    
    try {
       const message = await client.messages.create({
          body: 'Hola soy un SMS desde Node.js! Y se ve que te encanta el pedazo',
          from: '+19705512427',
          to: '+541153271241'
       })
       console.log(message)
    } catch (error) {
       console.log(error)
    }
}

module.exports =  sendSMS
