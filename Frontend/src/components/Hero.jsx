import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="flex flex-col items-center text-center px-4 py-4 md:items-start md:text-left md:px-0 md:py-0 transition-colors duration-500">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Hello, I'm Philip
        </span>
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mb-4 leading-relaxed">
        A passionate <span className="text-blue-400 font-semibold">Full-Stack Developer</span>
        and Graphic Designer who loves crafting clean, creative, and visually stunning websites.
        I specialize in building modern applications using{" "}
        <span className="text-cyan-400 font-medium">React</span>,{" "}
        <span className="text-green-400 font-medium">Django</span>,{" "}
        <span className="text-purple-400 font-medium">Bootstrap-styling</span>,{" "}
        <span className="text-yellow-400 font-medium">Express</span>, and{" "}
        <span className="text-pink-400 font-medium">Tailwind CSS</span>.
      </p>

      {/* Buttons */}
      <div className="flex w-full flex-col sm:w-auto sm:flex-row gap-3">
        {/* Hire Me */}
        <Link
          to="/contact"
          className="inline-flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300"
        >
          Hire Me
        </Link>

        {/* Download CV */}
        <a
          href="/cv.pdf"
          download
          className="inline-flex items-center justify-center bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

export default Hero;
