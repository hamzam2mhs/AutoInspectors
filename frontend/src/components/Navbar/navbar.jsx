import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          Vehicle Inspection Service
        </div>
        <ul className="flex space-x-4 text-white">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>

          <li>
            <Link to="/inspection" className="hover:text-gray-300">
              Inspection Order
            </Link>
          </li>
          <li>
            <Link to="/location" className="hover:text-gray-300">
              Location
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-gray-300">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact Us
            </Link>
          </li>
          <l1>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
          </l1>
          <l1>
            <Link to="/services" className="hover:text-gray-400">
              Services
            </Link>
          </l1>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
