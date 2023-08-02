// frontend/netlify/submit.js
const nodemailer = require('nodemailer');

exports.handler = async function (event) {
  try {
    const data = JSON.parse(event.body);

    // Configure the transporter for nodemailer (you need to set up the email transport here)
    const transporter = nodemailer.createTransport({
      service: 'Outlook', // e.g., 'Gmail', 'Outlook', 'SendGrid', etc.
      auth: {
        user: 'alfredofaustino@outlook.com',
        pass: 'Qbasn8!23',
      },
    });

    // Mail options (customize the email content as you prefer)
    const mailOptions = {
      from: 'alfredofaustino@outlook.com',
      to: 'alfredofaustino@outlook.com',
      subject: `New Contact Form Submission from ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);

    // Return a success response to the frontend
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submission successful!' }),
    };
  } catch (error) {
    console.error('Form submission failed:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Form submission failed. Please try again later.' }),
    };
  }
};
