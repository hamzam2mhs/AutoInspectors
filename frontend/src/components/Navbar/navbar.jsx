import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track menu open/close
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = () => {
    setIsOpen(false); // Close the menu after clicking a link
  };

  const handleInspectionClick = () => {
    handleMenuClick(); // Close the menu
    navigate("/inspection", { replace: true }); // Programmatically navigate to /inspection
    window.location.reload(); // Force a page reload to reset state
  };

  return (
      <nav className="bg-gray-800 p-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold tracking-wide hover:text-gray-400 transition duration-300">
            <Link to="/" onClick={handleMenuClick} className="text-white text-xl font-bold tracking-wide hover:text-gray-400 transition duration-300">
              AutoInspectors
            </Link>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                      isOpen ? "rotate-90" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          <ul className={`lg:flex lg:space-x-6 w-full lg:w-auto lg:items-center lg:justify-between lg:bg-transparent bg-gray-700 lg:static absolute left-0 lg:left-auto lg:top-auto top-16 py-4 lg:py-0 px-6 lg:px-0 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 lg:max-h-full lg:opacity-100"}`}>
            <li className="mb-4 lg:mb-0">
              <Link to="/" className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105" onClick={handleMenuClick}>
                Home
              </Link>
            </li>
            <li className="mb-4 lg:mb-0">
              {/* Use the handleInspectionClick function to navigate to the Inspection page */}
              <button className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105" onClick={handleInspectionClick}>
                Inspection Order
              </button>
            </li>
            <li className="mb-4 lg:mb-0">
              <Link to="/blog" className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105" onClick={handleMenuClick}>
                Blog
              </Link>
            </li>
            <li className="mb-4 lg:mb-0">
              <Link to="/contact" className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105" onClick={handleMenuClick}>
                Contact Us
              </Link>
            </li>
            <li className="mb-4 lg:mb-0">
              <Link to="/admin" className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105" onClick={handleMenuClick}>
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
