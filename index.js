const express = require("express");
const mongoose = require("mongoose");
const Cors = require("cors");
require("dotenv").config();
const Order = require("./models/Order");
const Contact = require("./models/Contact");

const app = express();
app.use(express.json());
app.use(Cors());
const port = process.env.PORT;
const url = process.env.MONGOOSE_URL;
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err));

//testing api
app.get("/", (req, res) => {
  res.send("Welcome to hand to hand transport");
});

//order api
app.post("/order", (req, res) => {
  const newOrder = new Order({
    fullName: req.body.fullName,
    email: req.body.email,
    mobileno: req.body.mobileno,
    sourceAddress: req.body.sourceAddress,
    destinationAddress: req.body.destinationAddress,
    description: req.body.description,
  });

  newOrder
    .save()
    .then((data) => {
      res.send("Request Submited");
      const msg = {
        to: `${req.body.email}`, // Change to your recipient
        from: "slntprdctn@gmail.com", // Change to your verified sender
        subject: "Order Request",
        text: "Hand to Hand Transportation",
        html: `<div style='width:auto; padding:3rem;background-color:rgba(49,114,163,1)'><div style='font-family:inherit; text-align: center;background-color:rgba(116,188,217,1);color:white'><div style='margin:2rem;padding:1.5rem;margin-bottom:0rem'><span style='font-size: 24px'><strong>Thanks for Order Request</strong></span></div></div><div style='margin-top:0.5rem;background-color:rgba(255,255,255,1);font-family: inherit; text-align: inherit'><div style='margin-top:0.5rem;padding:1.5rem;padding-bottom:0rem'><span style='margin:2rem;font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565'>Hi ${req.body.fullName},</span></div></div><div style='background-color:rgba(255,255,255,1);font-family: inherit; text-align: inherit'></div><div style='padding:1rem;padding-bottom:0.05rem;background-color:rgba(255,255,255,1);font-family: inherit; text-align: inherit'><div style='margin:2rem;margin-top:0rem'><span style='font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565'>We have received your order details, for confirmation we will contact you shortly.</span></div></div><div style='margin-top:0.5rem;background-color:rgba(255,255,255,1);font-family: inherit; text-align: inherit'><div style='margin:0.5rem;margin-bottom:0rem;padding:1.5rem;padding-bottom:0rem'><span style='font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; font-size: 16px; color: #656565'>Thanks!</span></div></div><div style='background-color:rgba(255,255,255,1);font-family: inherit; text-align: inherit'><div style='margin:2rem;margin-top:0rem;padding-top:0rem;padding-bottom:1.5rem'><span style='font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; font-size: 16px; color: #656565'>Hand To Hand Transportation</span></div></div></div>`,
      };
      sgMail
        .send(msg)
        .then(() => {
          console.log("Email sent");
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((err) => {
      res.send("Server down, try again after sometime");
      console.log(err);
    });
});

//contact api
app.post("/contact", (req, res) => {
  const newContact = new Contact({
    fullName: req.body.fullName,
    email: req.body.email,
    mobileno: req.body.mobileno,
    description: req.body.description,
  });

  newContact
    .save()
    .then((data) => {
      res.send("Request Submited, we will reach you shortly");
      const msg = {
        to: `${req.body.email}`, // Change to your recipient
        from: "slntprdctn@gmail.com", // Change to your verified sender
        subject: "Order Request",
        text: "Hand to Hand Transportation",
        html: `<div style='width:auto; padding:3rem;background-color:rgba(49,114,163,1)'><div style='font-family:inherit; text-align: center;background-color:rgba(116,188,217,1);color:white'><div style='margin:2rem;padding:1.5rem;margin-bottom:0rem'><span style='font-size: 24px'><strong>Thanks for Contacting us</strong></span></div></div><div style='margin-top:0.5rem;background-color:rgba(255,255,255,1);font-family: inherit; text-align: inherit'><div style='margin-top:0.5rem;padding:1.5rem;padding-bottom:0rem'><span style='margin:2rem;font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565'>Hi ${req.body.fullName},</span></div></div><div style='background-color:rgba(255,255,255,1);font-family: inherit; text-align: inherit'></div><div style='padding:1rem;padding-bottom:0.05rem;background-color:rgba(255,255,255,1);font-family: inherit; text-align: inherit'><div style='margin:2rem;margin-top:0rem'><span style='font-size: 20px; font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; color: #656565'>Some one will contact you shortly</span></div></div><div style='margin-top:0.5rem;background-color:rgba(255,255,255,1);font-family: inherit; text-align: inherit'><div style='margin:0.5rem;margin-bottom:0rem;padding:1.5rem;padding-bottom:0rem'><span style='font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; font-size: 16px; color: #656565'>Thanks!</span></div></div><div style='background-color:rgba(255,255,255,1);font-family: inherit; text-align: inherit'><div style='margin:2rem;margin-top:0rem;padding-top:0rem;padding-bottom:1.5rem'><span style='font-family: &quot;trebuchet ms&quot;, helvetica, sans-serif; font-size: 16px; color: #656565'>Hand To Hand Transportation</span></div></div></div>`,
      };
      sgMail
        .send(msg)
        .then(() => {
          console.log("Email sent");
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((err) => {
      res.send("Server down, try again after sometime");
      console.log(err);
    });
});

app.listen(port, "localhost", () => {
  console.log("Litening at 8000 port");
});
