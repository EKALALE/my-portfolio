export default function Projects() {
  return (
    <section id="projects" className="py-20 px-8 bg-gray-700">
      <h2 className="text-3xl font-bold text-blue-400 mb-12 text-center">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">BudgetEase</h3>
          <p className="text-gray-400">A budget management app built using React, Express, and MongoDB.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Meal Finder</h3>
          <p className="text-gray-400">A recipe search app using the MealDB API built with React and Tailwind.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">E-commerce DB</h3>
          <p className="text-gray-400">A backend project showcasing relational database design in MySQL.</p>
        </div>
      </div>
    </section>
  )
}
