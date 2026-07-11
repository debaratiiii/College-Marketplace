import { useState } from "react";
import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";

function Marketplace() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-3">Marketplace</h1>

      <p className="text-gray-600 font-semibold text-center mt-2 mb-3">
        Browse books, notes, calculators and electronics listed by fellow
        students.
      </p>
      <div className="flex justify-center mt-6 mb-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by product name or category"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-[420px] border rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F2D6B]"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0F2D6B]"
          >
            <option value="All">All Categories</option>
            <option value="Books">Books</option>
            <option value="Electronics">Electronics</option>
            <option value="Notes">Notes</option>
            <option value="Calculators">Calculators</option>
          </select>
        </div>
      </div>
      <p className="text-gray-600 mb-6">
        Showing <span className="font-semibold">{filteredProducts.length}</span>{" "}
        Product{filteredProducts.length !== 1 ? "s" : ""}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <div className="text-center mt-10">
          <h2 className="text-2xl font-semibold text-gray-700">
            No products found
          </h2>

          <p className="text-gray-500 mt-2">Try another keyword or category.</p>
        </div>
      )}
    </div>
  );
}

export default Marketplace;
