import ThemeSwitcher from "./ThemeSwitcher";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  // use authContext
  const { user, logout } = useContext(AuthContext);
  const userLogout = () => {
    logout();
    navigate("/login");
  };

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

            {/* {user ? (
              <button
                className="ms-5 text-gray-500 dark:text-red-400"
                onClick={userLogout}
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="ms-5 text-gray-500 dark:text-red-400"
              >
                Login
              </Link>
            )} */}

            {/* testing */}
            {user ? (
              <div className="relative inline-block ms-5 text-left group">
                <button className="flex items-center gap-1 text-gray-500 dark:text-red-400 font-medium focus:outline-none">
                  {JSON.parse(localStorage.getItem("user"))?.email}
                  {console.log("user",user.email)} 
                  {/* will be undefined when page reopen */}
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-focus-within:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-md py-1 z-50 transition-all duration-200">
                  <button
                    onClick={userLogout}
                    className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="ms-5 text-gray-500 dark:text-red-400"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
