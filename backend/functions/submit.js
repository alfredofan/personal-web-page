// backend/functions/submit.js
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const formData = JSON.parse(event.body);

  // Your form submission and email sending logic here

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Form submission successful!' }),
  };
};
