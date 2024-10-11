import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jsonp from 'jsonp';  // Import jsonp
import backgroundImage from "../../assets/FormImages/inspectionBackground.jpg"; // Adjust the path based on your folder structure

const VehicleForm = () => {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  // Fetch vehicle makes from Car Query API
  useEffect(() => {
    const fetchMakes = () => {
      jsonp(
          "https://www.carqueryapi.com/api/0.3/?cmd=getMakes",
          null,
          (err, data) => {
            if (err) {
              console.error("Error fetching vehicle makes", err);
            } else {
              console.log("Makes Data:", data.Makes);
              setMakes(data.Makes);
            }
          }
      );
    };

    fetchMakes();
  }, []);

  // Fetch vehicle models based on selected make
  useEffect(() => {
    if (selectedMake) {
      const fetchModels = () => {
        jsonp(
            `https://www.carqueryapi.com/api/0.3/?cmd=getModels&make=${selectedMake}`,
            null,
            (err, data) => {
              if (err) {
                console.error("Error fetching vehicle models", err);
              } else {
                console.log("Models Data:", data.Models);
                setModels(data.Models);
              }
            }
        );
      };

      fetchModels();
    } else {
      setModels([]);
    }
  }, [selectedMake]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      vehicleYear,
      selectedMake,
      selectedModel,
      sellerName,
      contactNumber,
      address,
    };

    console.log("Form Data Submitted: ", formData);
    navigate("/inspection");
  };

  return (
      <div className="relative w-full h-screen bg-gray-200">
        {/* Background Image */}
        <img
            src={backgroundImage}
            alt="Background Image"
            className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex justify-center items-center z-10 bg-black bg-opacity-50">
          {/* Vehicle Form */}
          <form className="bg-white bg-opacity-90 p-8 max-w-3xl w-full shadow-xl rounded-lg space-y-6" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Submit Your Vehicle Inspection Request</h1>

            {/* Row for Vehicle Year, Make, and Model */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Vehicle Year */}
              <div>
                <label htmlFor="year" className="block text-lg font-medium text-gray-700">
                  Vehicle Year
                </label>
                <input
                    type="number"
                    id="year"
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    value={vehicleYear}
                    onChange={(e) => setVehicleYear(e.target.value)}
                    placeholder="e.g. 2006"
                    required
                />
              </div>

              {/* Vehicle Make */}
              <div>
                <label htmlFor="make" className="block text-lg font-medium text-gray-700">
                  Vehicle Make
                </label>
                <input
                    list="makes"
                    id="make"
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    value={selectedMake}
                    onChange={(e) => {
                      setSelectedMake(e.target.value);
                      setSelectedModel(""); // Reset model when make changes
                    }}
                    placeholder="e.g. Ford"
                    required
                />
                <datalist id="makes">
                  {makes.length > 0 ? (
                      makes.map((make) => (
                          <option key={make.make_id} value={make.make_display} />
                      ))
                  ) : (
                      <option disabled>Loading makes...</option>
                  )}
                </datalist>
              </div>

              {/* Vehicle Model */}
              <div>
                <label htmlFor="model" className="block text-lg font-medium text-gray-700">
                  Vehicle Model
                </label>
                <input
                    list="models"
                    id="model"
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    placeholder="e.g. Fusion"
                    required
                    disabled={!selectedMake} // Disable until make is selected
                />
                <datalist id="models">
                  {models.length > 0 ? (
                      models.map((model) => (
                          <option key={model.model_id} value={model.model_name} />
                      ))
                  ) : selectedMake ? (
                      <option disabled>Loading models...</option>
                  ) : (
                      <option disabled>Select a make first</option>
                  )}
                </datalist>
              </div>
            </div>

            {/* Seller's Name */}
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="seller-name" className="block text-lg font-medium text-gray-700">
                Seller's Name
              </label>
              <input
                  type="text"
                  id="seller-name"
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  value={sellerName}
                  onChange={(e) => setSellerName(e.target.value)}
                  placeholder="Enter the seller's name"
                  required
              />
            </div>

            {/* Contact Number */}
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="contact-number" className="block text-lg font-medium text-gray-700">
                Contact Number
              </label>
              <input
                  type="tel"
                  id="contact-number"
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  placeholder="Enter the contact number"
                  required
              />
            </div>

            {/* Address */}
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="address" className="block text-lg font-medium text-gray-700">
                Address of the Vehicle
              </label>
              <textarea
                  id="address"
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter the address of the vehicle"
                  required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                  type="submit"
                  className="w-full bg-yellow-500 text-black py-3 px-5 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                Submit Inspection Request
              </button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default VehicleForm;
