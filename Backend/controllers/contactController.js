// Backend/controllers/contactController.js
import Contact from "../models/contact.js";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1️⃣ Save the message in MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // 2️⃣ Send notification email to you (site owner)
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.EMAIL_USER, // your email
      subject: `New message from ${name}`,
      text: `Email: ${email}\n\nMessage:\n${message}`,
    });

    // 3️⃣ Send thank-you email to the client
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: email,
      subject: "Thanks for contacting me!",
      text: `Hello ${name},\n\nThanks for reaching out through my portfolio. I’ve received your message and will get back to you soon.\n\nBest regards,\nPhilip Ekalale`,
    });

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending message:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
};
