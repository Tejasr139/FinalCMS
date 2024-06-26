// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   host: 'mtp.example.com',
//   port: 587,
//   secure: false, // or 'STARTTLS'
//   auth: {
//     user: 'your-email@example.com',
//     pass: 'your-password',
//   },
// });

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, email, mobileNumber, subject, details } = req.body;

//     const mailOptions = {
//       from: email,
//       to: 'admin@example.com',
//       subject,
//       text: `Name: ${name}\nEmail: ${email}\nMobile Number: ${mobileNumber}\nDetails: ${details}`,
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         return res.status(500).json({ message: 'Error sending email' });
//       }
//       res.status(200).json({ message: 'Email sent successfully' });
//     });
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }



const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'tp.example.com',
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: 'your-email@example.com',
    pass: 'your-password',
  },
});

app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, mobileNumber, subject, details } = req.body;

  const mailOptions = {
    from: email,
    to: 'admin@example.com',
    subject,
    text: `Name: ${name}\nEmail: ${email}\nMobile Number: ${mobileNumber}\nDetails: ${details}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Error sending email' });
    }
    res.status(200).json({ message: 'Email sent successfully' });
  });
});

app.listen(5173, () => {
  console.log('Server listening on port 4000');
});