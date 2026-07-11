function Categories() {
  const categories = [
    "📚 Books",
    "💻 Electronics",
    "📝 Notes",
    "🧮 Calculators",
  ];

  return (
    <section className="pt-2 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Categories
        </h2>

        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">

          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold">
                {category}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;