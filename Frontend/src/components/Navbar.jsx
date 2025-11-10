import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // for hamburger icons
import myLogo from "../assets/myLogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center py-4 px-6 md:px-10">
        {/* Logo + Name */}
        <div className="flex items-center space-x-2">
          <img src={myLogo} alt="logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-xl font-bold text-blue-600">Philip Ekalale</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="text-gray-900 hover:text-blue-600">Home</Link></li>
          <li><Link to="/about" className="text-gray-900 hover:text-blue-600">About</Link></li>
          <li><Link to="/projects" className="text-gray-900 hover:text-blue-600">Projects</Link></li>
          <li><Link to="/contact" className="text-gray-900 hover:text-blue-600">Contact</Link></li>
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white border-t border-gray-200 flex flex-col items-center space-y-4 py-4">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-900 hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)} className="text-gray-900 hover:text-blue-600">About</Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsOpen(false)} className="text-gray-900 hover:text-blue-600">Projects</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-gray-900 hover:text-blue-600">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
