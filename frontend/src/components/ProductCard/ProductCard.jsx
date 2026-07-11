import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover rounded-lg"
      />

      <h2 className="text-xl font-bold mt-4 text-gray-900 min-h-[60px]">{product.name}</h2>

      <p className="text-gray-500 font-semibold text-sm mt-2">{product.category}</p>

      <p className="text-[#0F2D6B] font-semibold text-xl mt-3">{product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="block mt-5 w-44 mx-auto bg-[#0F2D6B] text-white py-3 rounded-lg text-center font-semibold hover:bg-[#12357F] transition-all duration-300"
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;
