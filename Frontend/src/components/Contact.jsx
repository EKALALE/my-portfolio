import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`❌ Failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Something went wrong.");
    }
  };

  return (
    <section id="contact" className="py-20 px-8 bg-gray-800">
      <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">Contact Me</h2>
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
          required
          className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="4"
          required
          className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white py-3 rounded font-semibold hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>

      {status && <p className="text-center mt-4 text-gray-300">{status}</p>}
    </section>
  );
}
