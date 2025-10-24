import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";


function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
  <Navbar />
  <main className="flex-grow">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </main>
  <Footer />
</div>

  )
}

export default App
