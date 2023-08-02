// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Enable Cross-Origin Resource Sharing (CORS) to allow requests from the frontend
app.use(cors());

// Parse incoming request bodies in JSON format
app.use(bodyParser.json());

// Firebase setup
const admin = require('firebase-admin');
const serviceAccount = require('./af-website-f848f-firebase-adminsdk-9rd2x-65d2d517d3.json'); // Download the service account key from Firebase Console
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Endpoint to handle form submissions
app.post('/submit', async (req, res) => {
  const formData = req.body;
  try {
    // Validating the form data (use a more robust validation library in a real-world scenario)
    if (!formData.name.trim() || !formData.email.trim() || !isValidEmail(formData.email) || !formData.message.trim()) {
      return res.status(400).json({ error: 'Invalid form data' });
    }

    // Insert the form data into the Firebase Firestore database
    const collectionRef = db.collection('contactForms');
    await collectionRef.add(formData);

    // Add code here to send email notifications, etc.

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
