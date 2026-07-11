import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 justify-items-center text center md:text-left">
          {/* CampusCart */}
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-4">CampusCart</h2>
            <p className="text-gray-300 leading-7">
              Buy, sell and discover products within your college
              community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className="hover:text-blue-300 transition"
              >
                Home
              </Link>

              <Link
                to="/marketplace"
                className="hover:text-blue-300 transition"
              >
                Marketplace
              </Link>

              <Link
                to="/sell"
                className="hover:text-blue-300 transition"
              >
                Sell
              </Link>

              <Link
                to="/ai"
                className="hover:text-blue-300 transition"
              >
                AI Assistant
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <a
              href="mailto:contact@campuscart.com"
              className="block hover:text-blue-300 transition mb-2"
            >
              contact@campuscart.com
            </a>

            <p className="text-gray-300">
              Made for College Students
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-800 mt-10 pt-6 text-center text-gray-300 text-sm">
          © 2026 CampusCart. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;