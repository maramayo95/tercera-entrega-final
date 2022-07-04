const client = require('twilio')(accountSid, authToken); 

const accountSid = process.env.ACCOUNTSID ; 
const authToken = process.env.AUTHTOKEN; 

const sendWhatsapp = () => {
    client.messages 
          .create({ 
             body: 'Como le entro a los sanbuchitos de bondiola', 
             from: 'whatsapp:'+ process.env.CELUTWILIOWP,       
             to: 'whatsapp:'+ process.env.MICELUTWILIOWP 
           }) 
          .then(message => console.log(message.sid)) 
          .done();

}

module.exports =  sendWhatsapp
