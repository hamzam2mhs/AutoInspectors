import React from "react";
import { useNavigate } from "react-router-dom";
import carImage from "../../assets/HomeImages/Car.jpg";

const Carousel = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/inspection");
  };

  return (
    <div className="relative w-full h-[700px] -mt-1">
      {/* Full-width, full-height image */}
      <img
        src={carImage}
        alt="Car Image"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-4">
          Don’t Buy Trouble – Get It Inspected First!
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Get your pre-purchase car inspection today with AutoInspectors. We’re here to ensure you don’t drive off with trouble.
        </p>
        <button
          onClick={handleButtonClick}
          className="px-8 py-4 bg-yellow-500 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition transform hover:scale-105"
        >
          ORDER INSPECTION
        </button>
      </div>
    </div>
  );
};

export default Carousel;
