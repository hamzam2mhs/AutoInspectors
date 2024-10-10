import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          About Us
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          We offer premium car washing and detailing services. Our dedicated team ensures your car remains in the best condition, providing a thorough and professional service that meets your highest standards.
        </p>
        
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4 max-w-3xl mx-auto text-left">
          <li className="flex items-center">
            <span className="text-yellow-500 mr-3 text-2xl">✔️</span>
            <span className="text-gray-700">Speak directly with a person every time</span>
          </li>
          <li className="flex items-center">
            <span className="text-yellow-500 mr-3 text-2xl">✔️</span>
            <span className="text-gray-700">No unexpected charges</span>
          </li>
          <li className="flex items-center">
            <span className="text-yellow-500 mr-3 text-2xl">✔️</span>
            <span className="text-gray-700">Inspections by skilled and experienced professionals</span>
          </li>
          <li className="flex items-center">
            <span className="text-yellow-500 mr-3 text-2xl">✔️</span>
            <span className="text-gray-700">Clear and easy-to-read reports</span>
          </li>
          <li className="flex items-center">
            <span className="text-yellow-500 mr-3 text-2xl">✔️</span>
            <span className="text-gray-700">Fastest turnaround time in the industry</span>
          </li>
          <li className="flex items-center">
            <span className="text-yellow-500 mr-3 text-2xl">✔️</span>
            <span className="text-gray-700">Flexible scheduling to fit your convenience</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
