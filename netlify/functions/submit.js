// netlify/submit.js

const axios = require('axios');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const formData = JSON.parse(event.body);

    // Replace these variables with your email configuration
    const emailRecipient = 'alfredofaustino@outlook.com'; // Replace this with your email
    const emailSubject = 'New Contact Form Submission';
    const emailBody = `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `;

    // Send the email using a service of your choice
    // For this example, we'll use Axios to send the email to a serverless email API
    await axios.post('https://api.example.com/send-email', {
      to: emailRecipient,
      subject: emailSubject,
      body: emailBody,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submission successful' }),
    };
  } catch (error) {
    console.error('Form submission failed:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Form submission failed' }),
    };
  }
};
