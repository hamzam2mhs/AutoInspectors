import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jsonp from 'jsonp';
import backgroundImage from "../../assets/FormImages/inspectionBackground.jpg";

const VehicleForm = () => {
  // Add state for controlling dropdown visibility for make and model
  const [filteredMakes, setFilteredMakes] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);

  const [isMakeDropdownOpen, setIsMakeDropdownOpen] = useState(false);
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [addons, setAddons] = useState({
    carfax: false,
    verbalReport: false,
  });

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

  const handleMakeInputChange = (e) => {
    const input = e.target.value;
    setSelectedMake(input);

    // Filter makes based on input
    const filtered = makes.filter((make) =>
        make.make_display.toLowerCase().startsWith(input.toLowerCase())
    );
    setFilteredMakes(filtered);
    setIsMakeDropdownOpen(true);  // Open the dropdown when typing
  };

  const handleModelInputChange = (e) => {
    const input = e.target.value;
    setSelectedModel(input);

    // Filter models based on input
    const filtered = models.filter((model) =>
        model.model_name.toLowerCase().startsWith(input.toLowerCase())
    );
    setFilteredModels(filtered);
    setIsModelDropdownOpen(true);  // Open the dropdown when typing
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      vehicleYear,
      selectedMake,
      selectedModel,
      sellerName,
      contactNumber,
      address,
      addons,
    };

    console.log("Form Data Submitted: ", formData);
    navigate("/inspection");
  };

  const handleAddonsChange = (e) => {
    const { name, checked } = e.target;
    setAddons({ ...addons, [name]: checked });
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
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Order Vehicle Inspection</h1>

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
              <div className="relative">
                <label htmlFor="make" className="block text-lg font-medium text-gray-700">
                  Vehicle Make
                </label>
                <input
                    type="text"
                    id="make"
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    value={selectedMake}
                    onChange={handleMakeInputChange}  // Update this to call the filtering function
                    placeholder="e.g. Ford"
                    required
                />


                {/* Custom Dropdown */}
                {isMakeDropdownOpen && filteredMakes.length > 0 && (
                    <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                      {filteredMakes.map((make) => (
                          <li
                              key={make.make_id}
                              onClick={() => {
                                setSelectedMake(make.make_display);  // Update selected make
                                setIsMakeDropdownOpen(false);  // Close dropdown after selecting
                              }}
                              className="cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2"
                          >
                            {make.make_display}
                          </li>
                      ))}
                    </ul>
                )}
              </div>

              {/* Vehicle Model */}
              <div className="relative">
                <label htmlFor="model" className="block text-lg font-medium text-gray-700">
                  Vehicle Model
                </label>
                <input
                    type="text"
                    id="model"
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    value={selectedModel}
                    onChange={handleModelInputChange}  // Update this to call the filtering function
                    placeholder="e.g. Fusion"
                    required
                    disabled={!selectedMake} // Disable until make is selected
                />

                {/* Custom Dropdown */}
                {isModelDropdownOpen && filteredModels.length > 0 && (
                    <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                      {filteredModels.map((model) => (
                          <li
                              key={model.model_id}
                              onClick={() => {
                                setSelectedModel(model.model_name);  // Update selected model
                                setIsModelDropdownOpen(false);  // Close dropdown
                              }}
                              className="cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2"
                          >
                            {model.model_name}
                          </li>
                      ))}
                    </ul>
                )}
              </div>
            </div>
            {/* Seller's Information Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Seller's Name */}
              <div>
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
              <div>
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
            </div>

            {/* Address */}
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="address" className="block text-lg font-medium text-gray-700">Address of the Vehicle</label>
              <textarea
                  id="address"
                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter the address of the vehicle"
                  required
              />
            </div>

            {/* Add-ons */}
            <div className="border p-4 bg-gray-100 rounded-md">
              <h3 className="text-lg font-bold text-gray-700 mb-2">Inspection Add-Ons</h3>
              <p className="text-gray-600 mb-4">Enhance your inspection package with these optional services!</p>

              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                      type="checkbox"
                      name="carfax"
                      id="carfax"
                      className="h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                      checked={addons.carfax}
                      onChange={handleAddonsChange}
                  />
                  <label htmlFor="carfax" className="ml-2 text-gray-700">
                    $25.99 - CARFAX Vehicle History Report
                    <span className="text-red-500"> (Limited time discount)</span>
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                      type="checkbox"
                      name="verbalReport"
                      id="verbalReport"
                      className="h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                      checked={addons.verbalReport}
                      onChange={handleAddonsChange}
                  />
                  <label htmlFor="verbalReport" className="ml-2 text-gray-700">$20.99 - Verbal Vehicle Assessment Report</label>
                </div>
              </div>
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
          </form> {/* Make sure this form closing tag is after the submit button */}

</div>
</div>
);
};

export default VehicleForm;
