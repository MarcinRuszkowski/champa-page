import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: subject,
      text: `From: ${email}\n\n${message}`,
    });
    res.status(200).json({ message: "Wysłano wiadomość!" });

    // zwrotka
    await transporter.sendMail({
      from: `"Champa" <${process.env.EMAIL_USER}>`,
      to: email, // mail usera
      replyTo: "void@gmail.com",
      subject: "HAU HAU",
      text: `Dziękuję za kontakt!\nOtrzymałem Twoją wiadomość i skontaktuję się z Tobą wkrótce.\n\nPapużka\n\n---\nTo wiadomość systemowa. Proszę nie odpowiadać na ten email.`,
      html: `
        <p>Dziękuję za kontakt!</p>
        <p>Otrzymałem Twoją wiadomość i skontaktuję się z Tobą wkrótce.</p>
        <p>Champa</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <hr>
        <p style="color: red; font-style: italic; font-size: 14px; text-place: center; margin-top:0px;">To wiadomość systemowa. Proszę nie odpowiadać na ten email.</p>
      `,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Coś poszło nie tak... Spróbuj ponownie." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
