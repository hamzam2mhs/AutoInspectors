import React from "react";

const Services = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="service-item bg-gray-100 p-4 rounded-md text-center">
            <h3 className="font-bold text-xl">Exterior Washing</h3>
            <p>Lorem ipsum dolor sit amet elit.</p>
          </div>
          <div className="service-item bg-gray-100 p-4 rounded-md text-center">
            <h3 className="font-bold text-xl">Interior Washing</h3>
            <p>Lorem ipsum dolor sit amet elit.</p>
          </div>
          <div className="service-item bg-gray-100 p-4 rounded-md text-center">
            <h3 className="font-bold text-xl">Vacuum Cleaning</h3>
            <p>Lorem ipsum dolor sit amet elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
