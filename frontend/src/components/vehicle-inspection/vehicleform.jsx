import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jsonp from 'jsonp';
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api';
import backgroundImage from "../../assets/FormImages/inspectionBackground.jpg";

const VehicleForm = () => {
  const [filteredMakes, setFilteredMakes] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);
  const [isMakeDropdownOpen, setIsMakeDropdownOpen] = useState(false);
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [filteredYears, setFilteredYears] = useState([]);
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [sellerName, setSellerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [autocomplete, setAutocomplete] = useState(null);
  const [addons, setAddons] = useState({ carfax: false, verbalReport: false });

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,  // Correctly referencing the key from .env
    libraries: ['places'],
  });

  const navigate = useNavigate();

  const onLoad = (autocompleteInstance) => {
    console.log('Autocomplete loaded:', autocompleteInstance);
    setAutocomplete(autocompleteInstance);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      setAddress(place.formatted_address || "");
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

  // Fetch vehicle makes
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
              setFilteredMakes(data.Makes); // Populate the filtered makes initially
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
                setFilteredModels(data.Models); // Populate the filtered models initially
              }
            }
        );
      };

      fetchModels();
    } else {
      setModels([]);
      setFilteredModels([]);
    }
  }, [selectedMake]);

  // Generate the list of years from 2005 to the current year
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = 2005; year <= currentYear; year++) {
      years.push(year.toString());
    }
    setFilteredYears(years);
  }, []);

  const handleMakeInputChange = (e) => {
    const input = e.target.value;
    setSelectedMake(input);
    setSelectedModel("");

    const filtered = makes.filter((make) =>
        make.make_display.toLowerCase().startsWith(input.toLowerCase())
    );

    setFilteredMakes(filtered);

    if (filtered.length > 0) {
      setIsMakeDropdownOpen(true);
    } else {
      setIsMakeDropdownOpen(false);
    }
  };

  const handleModelInputChange = (e) => {
    const input = e.target.value;
    setSelectedModel(input);

    const filtered = models.filter((model) =>
        model.model_name.toLowerCase().startsWith(input.toLowerCase())
    );
    setFilteredModels(filtered);
    setIsModelDropdownOpen(true);
  };

  // Handle the vehicle year input change
  const handleVehicleYearChange = (e) => {
    const input = e.target.value;
    setVehicleYear(input);

    const filtered = filteredYears.filter((year) =>
        year.startsWith(input)
    );
    setFilteredYears(filtered);

    // Show dropdown if there are filtered results
    if (filtered.length > 0) {
      setIsYearDropdownOpen(true);
    } else {
      setIsYearDropdownOpen(false);
    }
  };

  const handleYearSelect = (year) => {
    setVehicleYear(year);
    setIsYearDropdownOpen(false); // Close the dropdown after selection
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

  if (!isLoaded) {
    return <div>Loading Google Maps...</div>;
  }

  return (
      <div className="relative w-full h-screen bg-gray-200">
        <img
            src={backgroundImage}
            alt="Background Image"
            className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 flex justify-center items-center z-10 bg-black bg-opacity-50">
          <form className="bg-white bg-opacity-90 p-8 max-w-3xl w-full shadow-xl rounded-lg space-y-6" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Order Vehicle Inspection</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Vehicle Year */}
              <div className="relative">
                <label htmlFor="year" className="block text-lg font-medium text-gray-700">
                  Vehicle Year
                </label>
                <input
                    type="text"
                    id="year"
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    value={vehicleYear}
                    onChange={handleVehicleYearChange}
                    placeholder="e.g. 2006"
                    required
                />
                {isYearDropdownOpen && (
                    <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                      {filteredYears.map((year) => (
                          <li
                              key={year}
                              onClick={() => handleYearSelect(year)}
                              className="cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2"
                          >
                            {year}
                          </li>
                      ))}
                    </ul>
                )}
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
                    onChange={handleMakeInputChange}
                    onBlur={() => setTimeout(() => setIsMakeDropdownOpen(false), 200)}
                    placeholder="e.g. Ford"
                    required
                />

                {isMakeDropdownOpen && (
                    <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                      <li
                          onClick={() => setSelectedMake('')}
                          className="cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2"
                      >
                        (Select a Make)
                      </li>
                      {filteredMakes.length > 0 ? (
                          filteredMakes.map((make) => (
                              <li
                                  key={make.make_id}
                                  onClick={() => {
                                    setSelectedMake(make.make_display);
                                    setIsMakeDropdownOpen(false);
                                    setSelectedModel("");
                                  }}
                                  className="cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2"
                              >
                                {make.make_display}
                              </li>
                          ))
                      ) : (
                          <li className="px-4 py-2">No matches found</li>
                      )}
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
                    onChange={handleModelInputChange}
                    placeholder="e.g. Fusion"
                    required
                    disabled={!selectedMake}
                />

                {isModelDropdownOpen && (
                    <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                      <li
                          onClick={() => setSelectedModel('')}
                          className="cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2"
                      >
                        (Select a Model)
                      </li>
                      {filteredModels.length > 0 ? (
                          filteredModels.map((model) => (
                              <li
                                  key={model.model_id}
                                  onClick={() => {
                                    setSelectedModel(model.model_name);
                                    setIsModelDropdownOpen(false);
                                  }}
                                  className="cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2"
                              >
                                {model.model_name}
                              </li>
                          ))
                      ) : (
                          <li className="px-4 py-2">No matches found</li>
                      )}
                    </ul>
                )}
              </div>
            </div>

            {/* Seller's Information Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            {/* Address Autocomplete */}
            <div className="grid grid-cols-1 gap-4">
              <label htmlFor="address" className="block text-lg font-medium text-gray-700">
                Address of the Vehicle
              </label>
              <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <input
                    type="text"
                    id="address"
                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter the address of the vehicle"
                    required
                />
              </Autocomplete>
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
                      className="h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500 checked:bg-yellow-500 checked:border-yellow-500"
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
                      className="h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500 checked:bg-yellow-500 checked:border-yellow-500"
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
          </form>
        </div>
      </div>
  );
};

export default VehicleForm;

