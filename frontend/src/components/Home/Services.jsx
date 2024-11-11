import React from "react";
import backgroundImage from "../../assets/HomeImages/inpection.webp"; // Adjust the path based on your folder structure
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleButtonClick = () => {
    navigate("/inspection");
  };

  return (
    <div
      className="bg-cover bg-center text-white py-12"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="bg-black bg-opacity-60 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            What is the Inspection Process?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-gray-800 p-8 rounded-lg text-center hover:shadow-lg transition transform hover:scale-105 duration-300 ease-out">
              <div className="text-6xl font-bold mb-4">1</div>
              <h3 className="font-bold text-2xl mb-4">Order Inspection</h3>
              <p className="mb-6">
                Place an order for a vehicle inspection through the site or by
                phone.
              </p>
              <button
                onClick={handleButtonClick}
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition transform hover:scale-105 duration-300 ease-out"
              >
                ORDER INSPECTION
              </button>
              <p className="mt-4 text-lg">(888) 231-7965</p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-800 p-8 rounded-lg text-center hover:shadow-lg transition transform hover:scale-105 duration-300 ease-out">
              <div className="text-6xl font-bold mb-4">2</div>
              <h3 className="font-bold text-2xl mb-4">
                Our Inspector Inspects
              </h3>
              <p>
                Our expert inspector will contact your seller to verify the
                availability of the vehicle and set up an appointment to inspect
                your automobile.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-800 p-8 rounded-lg text-center hover:shadow-lg transition transform hover:scale-105 duration-300 ease-out">
              <div className="text-6xl font-bold mb-4">3</div>
              <h3 className="font-bold text-2xl mb-4">Receive Your Report</h3>
              <p>
                The inspector will upload the report to us, and after an
                error-checking process, you'll be notified when your report is
                ready to view.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
