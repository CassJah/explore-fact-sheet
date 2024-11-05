require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send", async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Debugging console logs
  console.log("Form Data:", { name, email, subject, message });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Explore Geotechnical" <${process.env.EMAIL_USER}>`,
    to: "explore@lde.co.nz",
    subject: `New message from ${name}: ${subject}`,
    text: `
      New Contact Form Submission

      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}

      This message was sent from the Explore Geotechnical website contact form.
    `,
    replyTo: email, // Ensures replies go to the sender’s email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email", error });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
