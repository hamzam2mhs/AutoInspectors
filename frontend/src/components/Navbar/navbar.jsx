import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import carInspection from "../../assets/HomeImages/inspectionpicture.svg";
import { FaShoppingCart } from "react-icons/fa"; // Import the cart icon
import Cart from "../Cart/Cart"; // Import Cart component
import { useCart } from "../../contexts/CartContext"; // Import Cart context

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu
  const [isCartOpen, setIsCartOpen] = useState(false); // State to toggle cart visibility
  const { cartItems } = useCart(); // Access cart items from context
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle mobile menu
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev); // Toggle cart visibility
  };

  const handleMenuClick = () => {
    setIsOpen(false); // Close mobile menu when a link is clicked
  };

  const handleAdminClick = () => {
    handleMenuClick();
    navigate("/admin", { state: { resetAuth: true } }); // Navigate to admin page
  };

  return (
      <nav className="bg-gray-800 p-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo with Image */}
          <div className="flex items-center space-x-2">
            <img
                src={carInspection}
                alt="Car Inspection Logo"
                className="h-12 w-15"
            />
            <Link
                to="/"
                onClick={handleMenuClick}
                className="text-white text-xl font-bold tracking-wide hover:text-gray-400 transition duration-300"
            >
              AutoInspectors
            </Link>
          </div>

          {/* Navigation Links */}
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
              <button
                  className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105"
                  onClick={handleAdminClick}
              >
                Admin
              </button>
            </li>
          </ul>

          {/* Cart Icon */}
          <div className="relative">
            <button
                onClick={toggleCart}
                className="text-yellow-400 hover:text-yellow-500 transition duration-300 relative"
            >
              <FaShoppingCart size={24} />
              {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
              )}
            </button>

            {/* Cart Dropdown */}
            <Cart isCartOpen={isCartOpen} onClose={toggleCart} />
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
