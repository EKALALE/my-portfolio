import { Link } from "react-router-dom";
import myLogo from "../assets/myLogo.png";

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50">

      <div className="flex items-center space-x-2">
        <img src={myLogo} alt="logo" className="w-10 h-10 rounded-full" />
        <h1 className="text-xl font-bold text-blue-600 ">Philip Ekalale</h1>
      </div>
      <div className="flex items-center space-x-7">

      <ul className="flex space-x-6">
        <li><Link to="/" className="text-gray-900 hover:text-blue-600 ">Home</Link></li>
        <li><Link to="/about" className="text-gray-900 hover:text-blue-600">About</Link></li>
        <li><Link to="/projects" className="text-gray-800 hover:text-blue-600">Projects</Link></li>
        <li><Link to="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link></li>
      </ul>

      </div>
    </nav>
  );
}

export default Navbar;
