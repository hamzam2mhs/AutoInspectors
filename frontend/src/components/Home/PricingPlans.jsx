import React from "react";

const PricingPlans = () => {
  return (
    <div className="bg-gray-900 py-20 mt-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Exotic Plan */}
          <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">EXOTIC</h3>
            <p className="text-3xl font-bold mb-6 text-center">$286</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔️</span> For higher-end vehicles (e.g., Porsche, Lamborghini)
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔️</span> Computer diagnosis of engine, transmission, ABS
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔️</span> Comprehensive mechanical inspection
              </li>
              {/* Add more items as needed */}
            </ul>
            <button className="w-full py-3 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600 transition">
              Book Now
            </button>
          </div>

          {/* Standard Plan */}
          <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">STANDARD</h3>
            <p className="text-3xl font-bold mb-6 text-center">$220</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔️</span> For cars newer than 20 years old
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔️</span> Our best-seller!
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔️</span> Comprehensive mechanical inspection
              </li>
              {/* Add more items as needed */}
            </ul>
            <button className="w-full py-3 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600 transition">
              Book Now
            </button>
          </div>

          {/* Classic Plan */}
          <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">CLASSIC</h3>
            <p className="text-3xl font-bold mb-6 text-center">$330</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔️</span> For cars 20 years or older
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔️</span> Comprehensive engine and transmission inspection
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔️</span> Inspection of suspension and brakes
              </li>
              {/* Add more items as needed */}
            </ul>
            <button className="w-full py-3 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600 transition">
              Book Now
            </button>
          </div>

          {/* Commercial Plan */}
          <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">COMMERCIAL</h3>
            <p className="text-3xl font-bold mb-6 text-center">$365</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔️</span> For all commercial vehicles
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔️</span> Comprehensive drive-train inspection
              </li>
              <li className="flex items-center">
                <span className="text-yellow-500 mr-2">✔️</span> Previous accident damage check
              </li>
              {/* Add more items as needed */}
            </ul>
            <button className="w-full py-3 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-600 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
