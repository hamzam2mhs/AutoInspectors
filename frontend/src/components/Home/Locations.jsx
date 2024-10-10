import React from "react";

const Locations = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Car Washing Locations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="location-item bg-gray-100 p-4 rounded-md">
            <h3 className="font-bold text-xl">Location 1</h3>
            <p>123 Street, City</p>
          </div>
          <div className="location-item bg-gray-100 p-4 rounded-md">
            <h3 className="font-bold text-xl">Location 2</h3>
            <p>456 Avenue, City</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
