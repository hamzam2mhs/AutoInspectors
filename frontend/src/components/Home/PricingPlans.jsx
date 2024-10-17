import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const PricingPlans = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleButtonClick = () => {
    navigate("/inspection"); // Navigate to the /inspection route
  };

  return (
    <div className="bg-gray-900 py-16 mt-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Exotic Plan */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-center uppercase">
              Exotic
            </h3>
            <p className="text-3xl font-bold mb-4 text-center">$286</p>
            <ul className="space-y-2 mb-4 flex-grow">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✔️</span> For high-end
                vehicles (e.g., Porsche, Lamborghini)
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✔️</span> Computer
                diagnosis of engine, transmission, ABS
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✔️</span> Comprehensive
                mechanical inspection of the drive-train
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✔️</span> Inspection of
                steering, suspension, and brakes
              </li>
            </ul>
            <div className="flex flex-col">
              <div className="bg-gray-700 text-center py-3 font-bold text-white rounded-t-md">
                SAMPLE REPORT
              </div>
              <button
                onClick={handleButtonClick} // Call handleButtonClick when the button is clicked
                className="bg-yellow-500 text-black font-bold py-3 text-center hover:bg-yellow-600 transition rounded-b-md"
              >
                ORDER INSPECTION
              </button>
            </div>
          </div>

          {/* Standard Plan */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-center uppercase">
              Standard
            </h3>
            <p className="text-3xl font-bold mb-4 text-center">$220</p>
            <ul className="space-y-2 mb-4 flex-grow">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✔️</span> For cars newer
                than 20 years old
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✔️</span> Our best-seller,
                perfect for most vehicles
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✔️</span> Comprehensive
                mechanical inspection of drive-train
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✔️</span> Inspection of
                steering, suspension, and brakes
              </li>
            </ul>
            <div className="flex flex-col">
              <div className="bg-gray-700 text-center py-3 font-bold text-white rounded-t-md">
                SAMPLE REPORT
              </div>
              <button
                onClick={handleButtonClick} // Call handleButtonClick when the button is clicked
                className="bg-yellow-500 text-black font-bold py-3 text-center hover:bg-yellow-600 transition rounded-b-md"
              >
                ORDER INSPECTION
              </button>
            </div>
          </div>

          {/* Classic Plan */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-center uppercase">
              Classic
            </h3>
            <p className="text-3xl font-bold mb-4 text-center">$330</p>
            <ul className="space-y-2 mb-4 flex-grow">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✔️</span> For cars 20 years
                or older
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✔️</span> Comprehensive
                engine and transmission inspection
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✔️</span> Complete
                drive-line inspection
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✔️</span> Rust and
                age-related checks
              </li>
            </ul>
            <div className="flex flex-col">
              <div className="bg-gray-700 text-center py-3 font-bold text-white rounded-t-md">
                SAMPLE REPORT
              </div>
              <button
                onClick={handleButtonClick} // Call handleButtonClick when the button is clicked
                className="bg-yellow-500 text-black font-bold py-3 text-center hover:bg-yellow-600 transition rounded-b-md"
              >
                ORDER INSPECTION
              </button>
            </div>
          </div>

          {/* Commercial Plan */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-center uppercase">
              Commercial
            </h3>
            <p className="text-3xl font-bold mb-4 text-center">$365</p>
            <ul className="space-y-2 mb-4 flex-grow">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✔️</span> For all
                commercial vehicles
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✔️</span> Comprehensive
                mechanical inspection of drive-train
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✔️</span> Check for
                accident and flood damage
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">✔️</span> Inspection of all
                commercial components
              </li>
            </ul>
            <div className="flex flex-col">
              <div className="bg-gray-700 text-center py-3 font-bold text-white rounded-t-md">
                SAMPLE REPORT
              </div>
              <button
                onClick={handleButtonClick} // Call handleButtonClick when the button is clicked
                className="bg-yellow-500 text-black font-bold py-3 text-center hover:bg-yellow-600 transition rounded-b-md"
              >
                ORDER INSPECTION
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
