import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Email validation function (must include '@' and '.')
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validate email before sending
    if (!validateEmail(formData.email)) {
      toast.error("❌ Please enter a valid email address (e.g. example@gmail.com)");
      return;
    }

    try {
      await axios.post("https://portfolio-backend-2ea6.onrender.com/api/contact", formData);
      toast.success(" Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // reset form
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 px-8 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white py-3 rounded font-semibold hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
