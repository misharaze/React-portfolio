const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()



const app = express()

app.use(cors());
app.use(bodyParser.json());

app.post('/send',( req, res) => { //путь по которому передаються данные 
const {name, email , message, phone} = req.body;//вытаскиваем все что нам надо из тела запроса



const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.EMAIL_SECURE === 'true',
   auth:{
user: process.env.EMAIL_USER,
pass: process.env.EMAIL_PASS

   },
});
const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `nouveaux messages de ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  try {
   transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Error sending message' });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{

   console.log(`сервер запушен на порту ${PORT}`) 
})

