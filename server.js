require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const nodemailer = require("nodemailer");
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static("./client/public"));
app.use(express.json())

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});


app.post("/email", (req, res) => {
  
// let sender = JSON.parse(req.body.email)
// let subject = JSON.parse(req.body.subject) 
// let text = JSON.parse(req.body.text) 
  console.log(req.body.text);

  let mailOptions = {
    from: "mikestest1991@gmail.com",
    to: "Msandres123@gmail.com",
    subject: req.body.subject,
    text: req.body.email + req.body.text
  };

  console.log(req.body.email);
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log("Error Occurs");
    } else {
      console.log("Email Sent");
    }
    res.redirect("/");
  });


});

app.get("*", (req, res) => {
  res.sendFile(path.resolve("./client/public/index.html"));
});

app.listen(port, () => {
  console.log("Listening on port", port);
});

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
