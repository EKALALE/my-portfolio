// Backend/controllers/contactController.js
import Contact from "../models/contact.js";
import { sendEmail } from "../utils/sendEmail.js";

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // 1️⃣ Save the message in the database
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // 2️⃣ Send email to YOU
    await sendEmail(
      process.env.EMAIL_USER,
      `New message from ${name}`,
      `Email: ${email}\n\nMessage:\n${message}`
    );

    // 3️⃣ Send thank-you email to CLIENT
    await sendEmail(
      email,
      "Thanks for contacting me!",
      `Hello ${name},\n\nThanks for reaching out through my portfolio. I’ve received your message and will get back to you soon.\n\nBest regards,\nPhilip Ekalale`
    );

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending message:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
};
