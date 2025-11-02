export default function Contact() {
  return (
    <section id="contact" className="py-20 px-8 bg-gray-800">
      <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">Contact Me</h2>
      <form className="max-w-xl mx-auto flex flex-col space-y-4">
        <input type="text" placeholder="Your Name" className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400" />
        <input type="email" placeholder="Your Email" className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400" />
        <textarea placeholder="Your Message" rows="4" className="p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"></textarea>
        <button type="submit" className="bg-blue-500 text-white py-3 rounded font-semibold hover:bg-blue-600 transition">Send Message</button>
      </form>
    </section>
  )
}
