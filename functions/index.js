// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions');
// Import Admin SDK
const { getDatabase } = require('firebase-admin/database');


// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();

var database = admin.database()


// Get a database reference to our blog
// const db = getDatabase();
// const ref = db.ref('server/saving-data/fireblog');

// Take the text parameter passed to this HTTP endpoint and insert it into
// Firestore under the path /messages/:documentId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.

  // functions.database.ref("ALI/alo")
  // const usersRef = ref.child('usersFunctions');

  // usersRef.set({
  //   alanisawesome: {
  //     date_of_birth: 'June 23, 1912',
  //     full_name: 'Alan Turing'
  //   },
  //   gracehop: {
  //     date_of_birth: 'December 9, 1906',
  //     full_name: 'Grace Hopper'
  //   }
  // });

  database.ref("userFunctionNice/alo").set("Borao")

  const original = req.query.text;

  // Push the new message into Firestore using the Firebase Admin SDK.


  // const writeResult = await admin.firestore().collection('messages').add({ original: original });

  // Send back a message that we've successfully written the message
  res.json({ result: `V 2.0 Message with ID: writeResult.id added.` });
});