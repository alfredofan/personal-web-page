// functions/submit.js
const nodemailer = require('nodemailer');

exports.handler = async function (event) {
  const formData = JSON.parse(event.body);

  // Email sending setup using Nodemailer
  const transporter = nodemailer.createTransport({
    // Replace the SMTP transport options with your email service credentials
    host: 'smtp-mail.outlook.com', // SMTP for Gmail: 'smtp.gmail.com'
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

  try {
    // ... Your form validation and Firestore insertion logic ...

    // Send email notification to the admin
    await sendEmailNotification(formData);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submission successful!' }),
    };
  } catch (error) {
    console.error('Form submission failed:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
