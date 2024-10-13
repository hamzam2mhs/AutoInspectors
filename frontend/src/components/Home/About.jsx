import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          About Us
        </h2>
        <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          We offer premium car washing and detailing services. Our dedicated team ensures your car remains in the best condition, providing a thorough and professional service that meets your highest standards.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <li className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
            <span className="bg-yellow-500 text-white rounded-full p-2 text-xl">✔️</span>
            <span className="text-gray-700 font-medium">Speak directly with a person every time</span>
          </li>
          <li className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
            <span className="bg-yellow-500 text-white rounded-full p-2 text-xl">✔️</span>
            <span className="text-gray-700 font-medium">No unexpected charges</span>
          </li>
          <li className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
            <span className="bg-yellow-500 text-white rounded-full p-2 text-xl">✔️</span>
            <span className="text-gray-700 font-medium">Inspections by skilled and experienced professionals</span>
          </li>
          <li className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
            <span className="bg-yellow-500 text-white rounded-full p-2 text-xl">✔️</span>
            <span className="text-gray-700 font-medium">Clear and easy-to-read reports</span>
          </li>
          <li className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
            <span className="bg-yellow-500 text-white rounded-full p-2 text-xl">✔️</span>
            <span className="text-gray-700 font-medium">Fastest turnaround time in the industry</span>
          </li>
          <li className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
            <span className="bg-yellow-500 text-white rounded-full p-2 text-xl">✔️</span>
            <span className="text-gray-700 font-medium">Flexible scheduling to fit your convenience</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
