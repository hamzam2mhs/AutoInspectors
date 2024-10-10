import React from "react";
import backgroundImage from "../../assets/HomeImages/inpection.jpg"; // Adjust the path based on your folder structure

const Services = () => {
  return (
    <div
      className="bg-cover bg-center text-white py-12"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="bg-black bg-opacity-60 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-10 text-center">
            What is the Inspection Process?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-gray-800 p-6 rounded-md text-center">
              <div className="text-6xl font-bold mb-4">1</div>
              <h3 className="font-bold text-2xl mb-2">Order Inspection</h3>
              <p className="mb-4">
                Place an order for a vehicle inspection through the site or by
                phone.
              </p>
              <button className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-600">
                Order Online
              </button>
              <p className="mt-2 text-lg">(888) 231-7965</p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-800 p-6 rounded-md text-center">
              <div className="text-6xl font-bold mb-4">2</div>
              <h3 className="font-bold text-2xl mb-2">
                Our Inspector Inspects
              </h3>
              <p>
                Our expert inspector will contact your seller to verify the
                availability of the vehicle and set up an appointment to inspect
                your automobile.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-800 p-6 rounded-md text-center">
              <div className="text-6xl font-bold mb-4">3</div>
              <h3 className="font-bold text-2xl mb-2">Receive Your Report</h3>
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
