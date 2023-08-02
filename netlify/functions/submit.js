const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com', // SMTP for Gmail: 'smtp.gmail.com'
  port: 587,
  secure: false,
  auth: {
    user: 'alfredofaustino@outlook.com', // Replace with your email address
    pass: 'Qbasn8!23', // Replace with your email password or use environment variables for better security
  },
});

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

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const formData = JSON.parse(event.body);

    // Perform server-side validation (similar to the client-side validation)

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
