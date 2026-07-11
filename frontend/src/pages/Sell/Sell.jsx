function Sell() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8">
        Sell an Item
      </h1>

      <form className="space-y-6">
        {/* Product Name */}
        <div>
          <label className="block font-medium mb-2">
            Product Name <span>*</span>
          </label>

          <input
            type="text"
            placeholder="Enter product name"
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-2">
            Category <span>*</span>
          </label>

          <select
            className="w-full border rounded-lg p-3"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Books">Books</option>
            <option value="Electronics">Electronics</option>
            <option value="Notes">Notes</option>
            <option value="Calculators">Calculators</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-2">
            Price (₹) <span>*</span>
          </label>

          <input
            type="number"
            placeholder="Enter price"
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        {/* Product Description */}
        <div>
          <label className="block font-medium mb-2">
            Product Description <span>*</span>
          </label>

          <textarea
            rows="4"
            placeholder="Describe your product..."
            className="w-full border rounded-lg p-3"
            required
          ></textarea>
        </div>

        {/* Upload Image */}
        <div>
          <label className="block font-medium mb-2">
            Upload Image <span>*</span>
          </label>

          <div className="flex items-center gap-3">
            <input
              type="file"
              id="imageUpload"
              className="hidden"
              required
            />

            <label
              htmlFor="imageUpload"
              className="cursor-pointer bg-[#0F2D6B] text-white px-4 py-2 rounded-lg hover:bg-[#0F2D6B] transition"
            >
              Choose File
            </label>

            <span className="text-gray-500">
              No file chosen
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#0F2D6B] text-white px-13 py-3 rounded-lg hover:bg-[#12357F] transition"
          >
            Post Item
          </button>
        </div>
      </form>
    </div>
  );
}

export default Sell;