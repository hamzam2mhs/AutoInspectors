<<<<<<< HEAD
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
=======
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJsApiLoader } from "@react-google-maps/api";
import backgroundImage from "../../assets/FormImages/inspectionBackground.jpg";

// Import subcomponents
import VehicleMakeSelect from "./VehicleMakeSelect";
import VehicleModelSelect from "./VehicleModelSelect";
import VehicleYearSelect from "./VehicleYearSelect";
import SellerInformation from "./SellerInformation";
import AddressInput from "./AddressInput";
import AddonsSelect from "./AddonsSelect";

const VehicleForm = () => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [addons, setAddons] = useState({ carfax: false, verbalReport: false });

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
>>>>>>> main
  });

  const navigate = useNavigate();

<<<<<<< HEAD
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
=======
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

  if (!isLoaded) {
    return <div>Loading Google Maps...</div>;
  }
>>>>>>> main

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
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 flex justify-center items-center z-10 bg-black bg-opacity-50">
        <form
          className="bg-white bg-opacity-90 p-8 max-w-3xl w-full shadow-xl rounded-lg space-y-6"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Order Vehicle Inspection
          </h1>

          {/* Vehicle Year */}
          <VehicleYearSelect
            vehicleYear={vehicleYear}
            setVehicleYear={setVehicleYear}
          />

          {/* Vehicle Make */}
          <VehicleMakeSelect
            selectedMake={selectedMake}
            setSelectedMake={setSelectedMake}
            setSelectedModel={setSelectedModel}
          />

          {/* Vehicle Model */}
          <VehicleModelSelect
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
            selectedMake={selectedMake}
          />

          {/* Seller Information */}
          <SellerInformation
            sellerName={sellerName}
            setSellerName={setSellerName}
            contactNumber={contactNumber}
            setContactNumber={setContactNumber}
          />

          {/* Address */}
          <AddressInput address={address} setAddress={setAddress} />

          {/* Add-ons */}
          <AddonsSelect addons={addons} setAddons={setAddons} />

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
<<<<<<< HEAD

=======
>>>>>>> main
