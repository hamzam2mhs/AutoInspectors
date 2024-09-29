import React from "react";

const PricingPlans = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="price-item bg-white p-6 rounded-md shadow-md">
            <h3 className="font-bold text-xl mb-4">Basic Cleaning</h3>
            <p className="text-lg mb-4">$25.99</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Book Now
            </button>
          </div>
          <div className="price-item bg-white p-6 rounded-md shadow-md">
            <h3 className="font-bold text-xl mb-4">Premium Cleaning</h3>
            <p className="text-lg mb-4">$35.99</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Book Now
            </button>
          </div>
          <div className="price-item bg-white p-6 rounded-md shadow-md">
            <h3 className="font-bold text-xl mb-4">Complex Cleaning</h3>
            <p className="text-lg mb-4">$49.99</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
