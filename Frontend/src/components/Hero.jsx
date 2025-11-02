import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 transition-colors duration-500">
      <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-4">
        Hello, I'm Philip
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-6">
        A passionate web developer and Graphic designer who loves crafting clean ,creative and visually stunning websites using React, Tailwind, and Express.
      </p>

      {/* Updated Hire Me Button */}
      <Link
        to="/contact"
        className="inline-block bg-red-500 hover:bg-red-900 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 text-sm"
      >
        Hire Me
      </Link>
    </section>
  );
}

export default Hero;
