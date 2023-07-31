const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({ origin: true }); // Add CORS middleware

admin.initializeApp();

exports.submitForm = functions.https.onRequest((req, res) => {
  // Enable CORS using the cors middleware
  cors(req, res, () => {
    if (req.method !== 'POST') {
      return res.status(405).send('Method Not Allowed');
    }

    // Access the form data from the request body
    const { name, email, message, captchaToken } = req.body;

    // Perform any validation and data processing if needed

    // Save the form data to the Firebase Realtime Database or Firestore
    const formDataRef = admin.database().ref('formSubmissions').push();
    formDataRef.set({
      name,
      email,
      message,
      timestamp: admin.database.ServerValue.TIMESTAMP,
    });

    // Return a response to the client
    return res.status(200).json({ message: 'Form submitted successfully' });
  });
});
