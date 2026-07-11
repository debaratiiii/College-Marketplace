import { useParams } from "react-router-dom";
import products from "../../data/products";

function ProductDetails() {
    const { id } = useParams();

const product = products.find(
  (item) => item.id === Number(id)
);
  return (
    <div className="max-w-5xl mx-auto mt-10 p-6">
      <div className="bg-white rounded-xl shadow-lg p-6 grid md:grid-cols-2 gap-8">

        <img
          src={product.image}
          alt="Product"
          className="w-full rounded-xl"
        />

        <div>

          <h1 className="text-3xl font-bold">
            {product.name}
          </h1>

          <p className="text-gray-600 mt-3">
            Category: {product.category}
          </p>

          <p className="text-[#0F2D6B] text-2xl font-bold mt-4">
            {product.price}
          </p>

          <p className="text-gray-700 mt-6">
            {product.description}
          </p>

          <div className="mt-8 flex gap-4">

            <button className="bg-[#0F2D6B] text-white px-6 py-3 rounded-lg hover:bg-[#0F2D6B]">
              Buy Now
            </button>

            <button className="border border-[#0F2D6B] text-[#0F2D6B] px-6 py-3 rounded-lg hover:bg-blue-50">
              Contact Seller
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ProductDetails;