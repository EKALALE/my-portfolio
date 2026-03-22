export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-900">
      
      {/* Title */}
      <h2 className="text-4xl font-extrabold text-center mb-12">
        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          About Me
        </span>
      </h2>

      {/* Card */}
      <div className="max-w-4xl mx-auto bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg p-8 md:p-12 border border-gray-700 hover:shadow-blue-500/10 transition duration-300">
        
        <p className="text-gray-300 text-lg leading-relaxed space-y-4">
          I am a passionate and dedicated full-stack developer with a strong interest in building
          modern, responsive, and user-friendly web applications. I enjoy transforming ideas into
          real-world digital solutions that not only look great but also perform efficiently.

          <br /><br />

          My technical skill set includes working with technologies such as{" "}
          <span className="text-blue-400 font-semibold">React</span>,{" "}
          <span className="text-green-400 font-semibold">Node.js</span>,{" "}
           <span className="text-yellow-600 font-semibold">Django</span>,{" "}
          <span className="text-yellow-400 font-semibold">Express</span>,{" "}
           <span className="text-yellow-900 font-semibold">Python</span>,{" "}
          <span className="text-pink-400 font-semibold">MongoDB</span>, and{" "}
          <span className="text-cyan-400 font-semibold">MySQL</span>. 
          I also use{" "}
          <span className="text-sky-400 font-semibold">Tailwind CSS</span> to create clean and responsive designs.

          <br /><br />

          Beyond coding, I am continuously learning and exploring new technologies to improve my
          development skills. I enjoy solving problems, working on challenging projects, and
          collaborating with others to create impactful solutions.

          <br /><br />

          Currently, I am focused on growing as a developer by building full-stack projects,
          improving backend integration skills, and preparing for opportunities in the tech industry.
        </p>

      </div>
    </section>
  );
}