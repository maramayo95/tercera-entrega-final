const twilio = require('twilio')

const sendSMS = async () =>  {
    
    const accountSid = 'AC7f0e919e8f48573fd9948c2df416a246'
    const authToken = '9a40e30eea44be1f3a7b2e89de0dec0f'
    
    const client = twilio(accountSid, authToken)
    
    try {
       const message = await client.messages.create({
          body: 'Hola soy Tulio y me gusta romper las pelotas con la configuración',
          from: '+19705512427',
          to: '+541153271241'
         })
         console.log(message)
    } catch (error) {
       console.log("Todo ok de momento")
    }
}

module.exports =  sendSMS
