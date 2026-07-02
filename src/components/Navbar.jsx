import ThemeSwitcher from "./ThemeSwitcher";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-950 dark:text-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-gray-700 dark:text-gray-300 tracking-wide">
              Logo Name
            </span>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 dark:text-gray-300">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 dark:text-gray-300">
              Products
            </Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-300">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300">
              Contact Us
            </Link>
          </div>

          <div className="flex items-center">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
