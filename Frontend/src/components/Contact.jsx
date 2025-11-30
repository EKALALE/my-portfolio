import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast.error("❌ Please enter a valid email address");
      return;
    }

    try {
      await axios.post("https://portfolio-backend-2ea6.onrender.com/api/contact", formData);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-16">
        Contact Me
      </h2>

      {/* Layout wrapper */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* CONTACT OPTIONS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700"
        >
          <h3 className="text-2xl font-semibold mb-6 text-green-300">Reach Me Directly</h3>

          <div className="space-y-5">
            {/* Email Card */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              href="mailto:philipekalale07@gmail.com"
              className="block p-5 rounded-xl bg-gray-700 hover:bg-gray-600 border border-gray-600 transition shadow"
            >
              <h4 className="text-xl font-medium text-blue-300">📧 Email</h4>
              <p className="mt-2 text-gray-300">philipekalale07@gmail.com</p>
            </motion.a>

            {/* Phone Card */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              href="tel:+254701658447"
              className="block p-5 rounded-xl bg-gray-700 hover:bg-gray-600 border border-gray-600 transition shadow"
            >
              <h4 className="text-xl font-medium text-blue-300">📞 Phone</h4>
              <p className="mt-2 text-gray-300">+254 701 658 447</p>
            </motion.a>

            {/* WhatsApp Card */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              href="https://wa.me/254701658447"
              target="_blank"
              className="block p-5 rounded-xl bg-green-600 hover:bg-green-700 transition shadow"
            >
              <h4 className="text-xl font-medium">💬 WhatsApp</h4>
              <p className="mt-1">Chat with me</p>
            </motion.a>
          </div>
        </motion.div>

        {/* FORM CARD (Functionality untouched) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700"
        >
          <h3 className="text-2xl font-semibold mb-6 text-green-300">Send a Message</h3>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">

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
              className="bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition shadow"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
