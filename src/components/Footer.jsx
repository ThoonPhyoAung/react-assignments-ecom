import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Top Section: Logo & Quick Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-gray-100 dark:border-gray-800">
          {/* Brand Logo */}
          <div>
            <span className="text-lg font-bold text-gray-900 dark:text-white tracking-wide">
              Logo Name
            </span>
          </div>

          {/* Minimal Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
            <Link
              to="/"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Bottom Section: Copyright only */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 dark:text-gray-500">
          <p>© {new Date().getFullYear()} Logo Name. All rights reserved.</p>  {/* for updated year */}
          <p className="font-medium tracking-wide">Designed with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
