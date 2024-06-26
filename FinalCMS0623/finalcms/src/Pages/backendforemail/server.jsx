// backend/server.js

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/contact', async (req, res) => {
  const { name, email, mobile, subject, details } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: `Inquiry Received: ${subject}`,
    text: `Dear ${name},\n\nThank you for reaching out to us. We have received your inquiry and will get back to you shortly.\n\nBest regards,\nYour Company`,
  };

  const adminMailOptions = {
    from: 'your-email@gmail.com',
    to: 'admin-email@gmail.com',
    subject: `New Inquiry from ${name}`,
    text: `You have received a new inquiry.\n\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}\nSubject: ${subject}\nDetails: ${details}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(adminMailOptions);
    res.status(200).send('Inquiry sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
