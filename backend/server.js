// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;


// Enable Cross-Origin Resource Sharing (CORS) to allow requests from the frontend
app.use(cors({
    origin: 'https://alfredofaustino.com', // URL of frontend (e.g., my personal website domain)
  })
);


// Parse incoming request bodies in JSON format
app.use(bodyParser.json());

// Email sending setup using Nodemailer
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  // Replace the SMTP transport options with your email service credentials
  host: 'smtp-mail.outlook.com', //  SMTP for Gmail: 'smtp.gmail.com'
  port: 587,
  secure: false,
  auth: {
    user: 'alfredofaustino@outlook.com',
    pass: 'Qbasn8!23',
  },
});

// Helper function to send email notification
const sendEmailNotification = async (formData) => {
  try {
    const emailContent = `
      New Contact Form Submission:

      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `;

    const mailOptions = {
      from: 'alfredofaustino@outlook.com', // Replace with your email address
      to: 'alfredofaustino@outlook.com', // Replace with your email address
      subject: 'New Contact Form Submission',
      text: emailContent,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Failed to send email notification:', error);
  }
};

// Endpoint to handle form submissions
app.post('/submit', async (req, res) => {
  const formData = req.body;
  try {
    // ... Your form validation and Firestore insertion logic ...

    // Send email notification to the admin
    await sendEmailNotification(formData);

    // Return a success response to the frontend
    return res.json({ message: 'Form submission successful!' });
  } catch (error) {
    console.error('Form submission failed:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Helper function to validate email format
const isValidEmail = (email) => {
  // Add email validation logic here
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
