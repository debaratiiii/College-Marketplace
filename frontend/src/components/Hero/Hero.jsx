import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <p className="text-[#0F2D6B] font-semibold uppercase tracking-widest">
          Buy • Sell • Discover
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-4">
          The Smart Marketplace
          <br />
          for College Students
        </h1>

        <p className="text-gray-600 text-xl mt-6 max-w-3xl mx-auto">
          Buy and sell books, calculators, notes, & electronics within your college using AI-powered recommendations and verified
          student accounts.
        </p>

        <div className="mt-10 flex justify-center gap-4">
            <Link to="/marketplace"
             className="bg-[#0F2D6B] text-white px-8 py-4 rounded-xl hover:bg-[#0F2D6B] transition">
            Explore Marketplace
          </Link>
          
          <Link to="/sell"
          className="border-2 border-[#0F2D6B] text-[#0F2D6B] px-8 py-4 rounded-xl hover:bg-[#0F2D6B] hover:text-white transition">
            Sell an Item
          </Link>

        </div>
      </div>
    </section>
  );
}

export default Hero;