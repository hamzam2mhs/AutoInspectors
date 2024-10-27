import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = () => {
    setIsOpen(false); // Close the menu after clicking a link
  };

  return (
      <nav className="bg-gray-800 p-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-xl font-bold tracking-wide hover:text-gray-400 transition duration-300">
            <Link
                to="/"
                onClick={handleMenuClick} // Ensure the menu closes if it's open on mobile
                className="text-white text-xl font-bold tracking-wide hover:text-gray-400 transition duration-300"
            >
              AutoInspectors
            </Link>
          </div>

          {/* Hamburger Icon (shown on mobile only) */}
          <div className="lg:hidden">
            <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
            >
              <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                      isOpen ? "rotate-90" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Links */}
          <ul
              className={`lg:flex lg:space-x-6 w-full lg:w-auto lg:items-center lg:justify-between lg:bg-transparent bg-gray-700 lg:static absolute left-0 lg:left-auto lg:top-auto top-16 py-4 lg:py-0 px-6 lg:px-0 overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0 lg:max-h-full lg:opacity-100"
              }`}
          >
            <li className="mb-4 lg:mb-0">
              <Link
                  to="/"
                  className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105"
                  onClick={handleMenuClick}
              >
                Home
              </Link>
            </li>
            <li className="mb-4 lg:mb-0">
              <Link
                  to="/inspection"
                  className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105"
                  onClick={handleMenuClick}
              >
                Inspection Order
              </Link>
            </li>
            <li className="mb-4 lg:mb-0">
              <Link
                  to="/blog"
                  className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105"
                  onClick={handleMenuClick}
              >
                Blog
              </Link>
            </li>
            <li className="mb-4 lg:mb-0">
              <Link
                  to="/contact"
                  className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105"
                  onClick={handleMenuClick}
              >
                Contact Us
              </Link>
            </li>
            <li className="mb-4 lg:mb-0">
              <Link
                  to="/admin"
                  className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105"
                  onClick={handleMenuClick}
              >
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
