const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HkaKQJiUyOWQ0VqxSFDvUPs4EDGlKgWb326uQzGtQ72aXRPCexXFbgIixN0pmdNKSQwzIijGSjZPZSxCcpae56o00NZUE6rmu"
);

// API

// App config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) =>
  response.status(200).send("Hello world its working")
);

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request recieved ->", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "USD",
    payment_method_types: ["card"],
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen commands
exports.api = functions.https.onRequest(app);
