import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import carInspection from "../../assets/HomeImages/inspectionpicture.svg";
import { FaShoppingCart } from "react-icons/fa"; // Import cart icon
import Cart from "../Cart/Cart"; // Cart Component
import { useCart } from "../../contexts/CartContext"; // Cart Context

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [isCartOpen, setIsCartOpen] = useState(false); // Cart visibility toggle
  const { cartItems } = useCart(); // Access cart items from context
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen); // Toggle mobile menu
  const toggleCart = () => setIsCartOpen((prev) => !prev); // Toggle cart visibility

  const handleMenuClick = () => setIsOpen(false); // Close mobile menu
  const handleAdminClick = () => {
    handleMenuClick();
    navigate("/admin", { state: { resetAuth: true } }); // Navigate to admin page
  };

  return (
      <nav className="bg-gray-800 p-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo with Image */}
          <div className="flex items-center space-x-2">
            <img src={carInspection} alt="Car Inspection Logo" className="h-10 w-auto" />
            <Link
                to="/"
                onClick={handleMenuClick}
                className="text-white text-xl font-bold tracking-wide hover:text-yellow-500 transition duration-300"
            >
              AutoInspectors
            </Link>
          </div>

          {/* Navigation Links */}
          <ul
              className={`lg:flex lg:space-x-6 w-full lg:w-auto lg:items-center lg:bg-transparent bg-gray-800 lg:static absolute left-0 lg:left-auto lg:top-auto top-16 py-4 lg:py-0 px-6 lg:px-0 overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0 lg:max-h-full lg:opacity-100"
              }`}
          >
            <li className="mb-4 lg:mb-0">
              <Link
                  to="/"
                  className="text-white hover:text-yellow-500 transition duration-300"
                  onClick={handleMenuClick}
              >
                Home
              </Link>
            </li>
            <li className="mb-4 lg:mb-0">
              <Link
                  to="/inspection"
                  className="text-white hover:text-yellow-500 transition duration-300"
                  onClick={handleMenuClick}
              >
                Inspection Order
              </Link>
            </li>
            <li className="mb-4 lg:mb-0">
              <Link
                  to="/blog"
                  className="text-white hover:text-yellow-500 transition duration-300"
                  onClick={handleMenuClick}
              >
                Blog
              </Link>
            </li>
            <li className="mb-4 lg:mb-0">
              <Link
                  to="/contact"
                  className="text-white hover:text-yellow-500 transition duration-300"
                  onClick={handleMenuClick}
              >
                Contact Us
              </Link>
            </li>
            <li className="mb-4 lg:mb-0">
              <button
                  className="text-white hover:text-yellow-500 transition duration-300"
                  onClick={handleAdminClick}
              >
                Admin
              </button>
            </li>
            {/* Mobile "Cart" text */}
            <li className="lg:hidden mb-4 lg:mb-0">
              <button
                  className="text-white hover:text-yellow-500 transition duration-300"
                  onClick={toggleCart}
              >
                Cart
              </button>
            </li>
          </ul>

          {/* Cart Icon for Larger Screens */}
          <div className="hidden lg:flex relative items-center">
            <button
                onClick={toggleCart}
                className="relative flex items-center justify-center w-10 h-10 bg-yellow-500 rounded-full text-gray-900 hover:bg-yellow-600 transition duration-300 focus:outline-none"
            >
              <FaShoppingCart size={18} />
              {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden ml-4">
            <button onClick={toggleMenu} className="text-white hover:text-gray-400 focus:outline-none">
              <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Cart Dropdown */}
        <Cart isCartOpen={isCartOpen} onClose={toggleCart} />
      </nav>
  );
};

export default Navbar;
