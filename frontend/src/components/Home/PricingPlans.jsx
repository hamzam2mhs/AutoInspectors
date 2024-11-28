import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const PricingPlans = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleButtonClick = (vehicleType) => {
    navigate("/inspection", { state: { vehicleType } });
  };

  return <div className="bg-gray-900 py-16 mt-12">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-white mb-10">
        Choose Your Plan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sedan Plan */}
        <div
            className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col hover:shadow-lg transition transform hover:scale-105 duration-300 ease-out">
          <h3 className="text-2xl font-bold mb-4 text-center uppercase">Sedan</h3>
          <p className="text-center mb-4">
            <span className="text-xl text-gray-400 line-through mr-2">$200</span>
            <span className="text-4xl font-bold text-yellow-400">$150</span>
          </p>
          <p className="text-center text-red-500 text-sm italic mb-4">Limited Time Offer!</p>
          <ul className="space-y-2 mb-4 flex-grow">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔️</span> Inspection for sedans
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔️</span> Comprehensive vehicle inspection
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔️</span> Steering and suspension check
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔️</span> Brake inspection
            </li>
          </ul>
          <div className="flex flex-col">
            <div className="bg-gray-700 text-center py-3 font-bold text-white rounded-t-md">
              SAMPLE REPORT
            </div>
            <button
                onClick={() => {
                  handleButtonClick("Sedan");
                }}
                className="bg-yellow-500 text-black font-bold py-3 text-center hover:bg-yellow-600 transition rounded-b-md"
            >
              ORDER INSPECTION
            </button>
          </div>
        </div>

        {/* SUV Plan */}
        <div
            className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col hover:shadow-lg transition transform hover:scale-105 duration-300 ease-out">
          <h3 className="text-2xl font-bold mb-4 text-center uppercase">SUV</h3>
          <p className="text-center mb-4">
            <span className="text-xl text-gray-400 line-through mr-2">$220</span>
            <span className="text-4xl font-bold text-yellow-400">$180</span>
          </p>
          <p className="text-center text-red-500 text-sm italic mb-4">Limited Time Offer!</p>
          <ul className="space-y-2 mb-4 flex-grow">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔️</span> Inspection for SUVs
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔️</span> Comprehensive vehicle inspection
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔️</span> Steering and suspension check
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔️</span> Brake inspection
            </li>
          </ul>
          <div className="flex flex-col">
            <div className="bg-gray-700 text-center py-3 font-bold text-white rounded-t-md">
              SAMPLE REPORT
            </div>
            <button
                onClick={() => {
                  handleButtonClick("SUV");
                }}
                className="bg-yellow-500 text-black font-bold py-3 text-center hover:bg-yellow-600 transition rounded-b-md"
            >
              ORDER INSPECTION
            </button>
          </div>
        </div>

        {/* AWD Sedan Plan */}
        <div
            className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col hover:shadow-lg transition transform hover:scale-105 duration-300 ease-out">
          <h3 className="text-2xl font-bold mb-4 text-center uppercase">AWD Sedan</h3>
          <p className="text-center mb-4">
            <span className="text-xl text-gray-400 line-through mr-2">$210</span>
            <span className="text-4xl font-bold text-yellow-400">$170</span>
          </p>
          <p className="text-center text-red-500 text-sm italic mb-4">Limited Time Offer!</p>
          <ul className="space-y-2 mb-4 flex-grow">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔️</span> Inspection for AWD Sedans
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔️</span> Comprehensive vehicle inspection
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔️</span> Steering and suspension check
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔️</span> Brake inspection
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔️</span> Differential and Transfer Case check
            </li>
          </ul>
          <div className="flex flex-col">
            <div className="bg-gray-700 text-center py-3 font-bold text-white rounded-t-md">
              SAMPLE REPORT
            </div>
            <button
                onClick={() => {
                  handleButtonClick("AWD Sedan");
                }}
                className="bg-yellow-500 text-black font-bold py-3 text-center hover:bg-yellow-600 transition rounded-b-md"
            >
              ORDER INSPECTION
            </button>
          </div>
        </div>

        {/* AWD SUV Plan */}
        <div
            className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col hover:shadow-lg transition transform hover:scale-105 duration-300 ease-out">
          <h3 className="text-2xl font-bold mb-4 text-center uppercase">AWD SUV</h3>
          <p className="text-center mb-4">
            <span className="text-xl text-gray-400 line-through mr-2">$250</span>
            <span className="text-4xl font-bold text-yellow-400">$200</span>
          </p>
          <p className="text-center text-red-500 text-sm italic mb-4">Limited Time Offer!</p>
          <ul className="space-y-2 mb-4 flex-grow">
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔️</span> Inspection for AWD SUVs
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔️</span> Comprehensive vehicle inspection
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔️</span> Steering and suspension check
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔️</span> Brake inspection
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-2">✔️</span> Differential and Transfer Case check
            </li>
          </ul>
          <div className="flex flex-col">
            <div className="bg-gray-700 text-center py-3 font-bold text-white rounded-t-md">
              SAMPLE REPORT
            </div>
            <button
                onClick={() => {
                  handleButtonClick("AWD SUV");
                }}
                className="bg-yellow-500 text-black font-bold py-3 text-center hover:bg-yellow-600 transition rounded-b-md"
            >
              ORDER INSPECTION
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default PricingPlans;
