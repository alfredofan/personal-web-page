const express = require('express');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000; // Port number // the new port is not to be used by any other application on the system
const MONGODB_URI = 'mongodb://localhost:27017/contact_form'; // Replace with MongoDB URI

// Set up MongoDB connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the MongoDB schema and model
const submissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});
const Submission = mongoose.model('Submission', submissionSchema);

// Enable rate limiting to prevent abuse (e.g., 10 requests per minute)
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
});
app.use(limiter);

// Enable Helmet middleware for added security headers
app.use(helmet());

// Parse incoming request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Replace 'YOUR_RECAPTCHA_SECRET_KEY' with your actual reCAPTCHA secret key
const RECAPTCHA_SECRET_KEY = 'YOUR_RECAPTCHA_SECRET_KEY';

// API endpoint to handle form submission and CAPTCHA verification
app.post('/api/submit-form', async (req, res) => {
  try {
    const { name, email, message, captchaToken } = req.body;

    // Verify CAPTCHA token using Google reCAPTCHA API
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${captchaToken}`;
    const response = await axios.post(verifyUrl);
    const { success } = response.data;

    if (!success) {
      return res.status(400).json({ error: 'Invalid CAPTCHA verification' });
    }

    // Form submission is valid, store the data in the database
    const submission = new Submission({ name, email, message });
    await submission.save();

    return res.status(200).json({ message: 'Form submitted successfully', submission });
  } catch (error) {
    console.error('Error handling form submission:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
