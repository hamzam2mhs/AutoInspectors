import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-800 relative">
          <span className="underline decoration-yellow-500 decoration-4">About Us</span>
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          We offer premium car washing and detailing services. Our dedicated
          team ensures your car remains in the best condition, providing a
          thorough and professional service that meets your highest standards.
        </p>

        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg mx-auto max-w-lg">
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="mr-3 text-yellow-400">✔</span> Speak directly with a person every time
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-yellow-400">✔</span> No unexpected charges
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-yellow-400">✔</span> Inspections by skilled and experienced professionals
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-yellow-400">✔</span> Clear and easy-to-read reports
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-yellow-400">✔</span> Fastest turnaround time in the industry
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
