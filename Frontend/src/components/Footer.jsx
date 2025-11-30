import { Facebook, Instagram, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-900 border-t border-gray-700">
      
      {/* Social Icons */}
      <div className="flex justify-start gap-6 mb-4 px-6">
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"
           className="text-gray-400 hover:text-blue-600 transition">
          <Facebook size={24} />
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"
           className="text-gray-400 hover:text-pink-500 transition">
          <Instagram size={24} />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"
           className="text-gray-400 hover:text-blue-400 transition">
          <Linkedin size={24} />
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"
           className="text-gray-400 hover:text-sky-400 transition">
          <Twitter size={24} />
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"
           className="text-gray-400 hover:text-white transition">
          <Github size={24} />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-gray-400 text-xl text-center">
        © {new Date().getFullYear()} Philip Ekalale. All rights reserved.
      </p>
    </footer>
  );
}
