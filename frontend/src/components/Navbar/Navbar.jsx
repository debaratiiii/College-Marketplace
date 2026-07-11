import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0F2D6B] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Logo />

        <div className="flex items-center gap-6 text-white font-medium">

          <Link
            to="/"
            className="hover:text-yellow-300 transition"
          >
            Home
          </Link>

          <Link
            to="/marketplace"
            className="hover:text-yellow-300 transition"
          >
            Marketplace
          </Link>

          <Link
            to="/sell"
            className="hover:text-yellow-300 transition"
          >
            Sell
          </Link>

          <Link
            to="/ai"
            className="hover:text-yellow-300 transition"
          >
            AI Assistant
          </Link>

          <Link
            to="/login"
            className="hover:text-yellow-300 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-white text-blue-700 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Register
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;