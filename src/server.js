import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/send-email", async (req, res) => {
  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // serwer SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: "marcin.ruszkowski01@gmail.com",
      replyTo: email,
      subject: subject,
      text: `From: ${email}\n\n${message}`,
    });
    res.status(200).json({ message: "Email sent successfully!" });

    // zwrotka
    await transporter.sendMail({
      from: `"Champa" <${process.env.EMAIL_USER}>`,
      to: email, // mail usera
      subject: "HAU HAU",
      text: `Dziękuję za kontakt!\nOtrzymałem Twoją wiadomość i skontaktuję się z Tobą wkrótce.\n\nPapużka`,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "Failed to send email. Please try again later." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
