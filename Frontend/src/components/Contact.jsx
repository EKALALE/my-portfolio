import { useState } from "react";
import API from "../api"; // import your axios instance

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await API.post("/api/contact", formData);
      console.log(response.data);
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 px-8 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col space-y-4"
      >
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

        {status && (
          <p className="text-center mt-2 text-sm text-gray-300">{status}</p>
        )}
      </form>
    </section>
  );
}
