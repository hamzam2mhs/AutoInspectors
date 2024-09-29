import React from "react";
import { useNavigate } from "react-router-dom";
import carImage from "../../assets/HomeImages/Car.jpg"; // Adjust the path based on your folder structure

const Carousel = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    navigate("/inspection"); // Navigate to the /inspection route
  };

  return (
    <div className="relative w-full h-[600px] bg-gray-200">
      {/* Image for the carousel */}
      <img
        src={carImage}
        alt="Car Image"
        className="w-full h-full object-cover"
      />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center text-white px-4">
        <h1 className="text-3xl font-bold">
          Don’t Buy Trouble – Get It Inspected First!
        </h1>
        <p className="mt-4 text-lg">
          Get your pre-purchase car inspection today with AutoInspectors. We’re
          here to ensure you don’t drive off with trouble.
        </p>
        <button
          onClick={handleButtonClick}
          className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-600"
        >
          ORDER INSPECTION
        </button>

        <div className="mt-8 bg-gray-900 bg-opacity-75 p-6 rounded-md">
          <ul className="text-left space-y-2">
            <li className="flex items-center">
              <span className="mr-2">✔</span> Speak directly with a person every
              time
            </li>
            <li className="flex items-center">
              <span className="mr-2">✔</span> No unexpected charges
            </li>
            <li className="flex items-center">
              <span className="mr-2">✔</span> Inspections by skilled and
              experienced professionals
            </li>
            <li className="flex items-center">
              <span className="mr-2">✔</span> Clear and easy-to-read reports
            </li>
            <li className="flex items-center">
              <span className="mr-2">✔</span> Fastest turnaround time in the
              industry
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
