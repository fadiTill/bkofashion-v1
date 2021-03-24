const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51IWoBJKuflhJj1pDcmBt5VzMX2qLaPEKmVn7i0RrCdlZ3PsWMr90he5ZbQWWOeVIPTVtjUeZpj1PsFOrlbXMPoKM00nuXUvRLv')



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// App config 
const app = express

// Middlewares allow callback api
app.use(cors({origin: true}));
app.use(express.json());

//API routes

app.get('/'), (request, response) => response.status(200).send('hello fadi world')

// Listen command

exports.api = functions.https.onRequest(app)