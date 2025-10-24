import { Link } from "react-router-dom"
import myLogo from "../assets/myLogo.png"


function Navbar() {
  return (
     <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src={myLogo} alt="My Logo" className="w-10 h-10 rounded-full" />
        <h1 className="text-xl font-bold text-blue-600">My Portfolio</h1>
      </div>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
        <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
        <li><Link to="/projects" className="hover:text-blue-600">Projects</Link></li>
        <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;
