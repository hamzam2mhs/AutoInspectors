import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold tracking-wide hover:text-gray-400 transition duration-300">
          WeInspect4U
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/inspection"
              className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105"
            >
              Inspection Order
            </Link>
          </li>
          <li>
            <Link
              to="/location"
              className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105"
            >
              Location
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-105"
            >
              Services
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
