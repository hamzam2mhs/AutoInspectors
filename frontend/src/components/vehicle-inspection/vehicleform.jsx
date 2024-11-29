import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useJsApiLoader } from "@react-google-maps/api";
import backgroundImage from "../../assets/FormImages/inspection-order.jpg";

// Import subcomponents
import VehicleMakeSelect from "./VehicleMakeSelect";
import VehicleModelSelect from "./VehicleModelSelect";
import VehicleYearSelect from "./VehicleYearSelect";
import SellerInformation from "./SellerInformation";
import AddressInput from "./AddressInput";
import AddonsSelect from "./AddonsSelect";
import TermsAndConditionsModal from "./TermsAndConditionsModal"; // Import the modal
import { useCart } from "../../contexts/CartContext.jsx"; // Import cart context
import { vehiclePrices } from "../../constants"; // Import global prices mapping

const VehicleForm = () => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [addons, setAddons] = useState({ carfax: false, verbalReport: false });
  const [isBuyer, setIsBuyer] = useState(false); // State for buyer checkbox
  const [showTerms, setShowTerms] = useState(false); // State for terms and conditions modal
  const [formData, setFormData] = useState(null); // To store form data for later submission
  const [vehicleType, setVehicleType] = useState("Sedan"); // Default type
  const [vehiclePrice, setVehiclePrice] = useState(vehiclePrices["Sedan"]); // Default price

  const { addToCart } = useCart(); // Access cart context to add items to the cart
  const location = useLocation(); // Access location for pre-selected type
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const navigate = useNavigate();

  // Check for pre-selected vehicle type from location state
  useEffect(() => {
    if (location.state?.vehicleType) {
      const type = location.state.vehicleType;
      setVehicleType(type);
      setVehiclePrice(vehiclePrices[type]);
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Collect form data
    const newFormData = {
      vehicleYear,
      selectedMake,
      selectedModel,
      isBuyer: isBuyer ? "Yes" : "No",
      sellerName,
      contactNumber,
      address,
      carfax: addons.carfax ? "Yes" : "No",
      verbalReport: addons.verbalReport ? "Yes" : "No",
      vehicleType,
      vehiclePrice,
    };

    // Show the terms if not yet accepted
    if (!showTerms) {
      setFormData(newFormData);
      setShowTerms(true); // Show the modal and store form data
    }
  };

  const handleAcceptTerms = () => {
    setShowTerms(false); // Close the modal after accepting terms

    // Calculate the total add-on prices
    const addonsTotal =
        (addons.carfax ? 25.99 : 0) +
        (addons.verbalReport ? 20.99 : 0);

    // Add the item to the cart
    addToCart({
      id: Date.now(),
      name: vehicleType,
      price: vehiclePrice + addonsTotal, // Add-ons included in total price
      details: {
        year: vehicleYear,
        make: selectedMake,
        model: selectedModel,
        addons: [
          addons.carfax && { name: "CARFAX Vehicle History Report", price: 25.99 },
          addons.verbalReport && { name: "Verbal Vehicle Assessment Report", price: 20.99 },
        ].filter(Boolean), // Remove null values
      },
    });

    // Reset the form
    setSelectedMake("");
    setSelectedModel("");
    setVehicleYear("");
    setSellerName("");
    setContactNumber("");
    setAddress("");
    setAddons({ carfax: false, verbalReport: false });
    setIsBuyer(false);
  };

  if (!isLoaded) {
    return <div>Loading Google Maps...</div>;
  }

  return (
      <div className="relative w-full min-h-screen bg-gray-100">
        <img
            src={backgroundImage}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 flex justify-center items-center z-10 bg-black bg-opacity-60 p-4">
          <form
              className="bg-white bg-opacity-90 p-6 max-w-2xl w-full shadow-xl rounded-lg space-y-6 text-gray-800"
              onSubmit={handleSubmit}
          >
            <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
              Order Vehicle Inspection
            </h1>

            {/* Vehicle Type Dropdown */}
            <div>
              <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700">
                Select Vehicle Type:
              </label>
              <select
                  id="vehicleType"
                  value={vehicleType}
                  onChange={(e) => {
                    setVehicleType(e.target.value);
                    setVehiclePrice(vehiclePrices[e.target.value]);
                  }}
                  className="w-full p-3 mt-1 border border-gray-300 rounded-md"
              >
                {Object.keys(vehiclePrices).map((type) => (
                    <option key={type} value={type}>
                      {type} - ${vehiclePrices[type]}
                    </option>
                ))}
              </select>
            </div>

            {/* Vehicle Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <VehicleYearSelect vehicleYear={vehicleYear} setVehicleYear={setVehicleYear} />
              <VehicleMakeSelect
                  selectedMake={selectedMake}
                  setSelectedMake={setSelectedMake}
                  setSelectedModel={setSelectedModel}
              />
              <VehicleModelSelect
                  selectedModel={selectedModel}
                  setSelectedModel={setSelectedModel}
                  selectedMake={selectedMake}
              />
            </div>

            <SellerInformation
                sellerName={sellerName}
                setSellerName={setSellerName}
                contactNumber={contactNumber}
                setContactNumber={setContactNumber}
                isBuyer={isBuyer}
                setIsBuyer={setIsBuyer}
            />

            <AddressInput address={address} setAddress={setAddress} />

            <AddonsSelect addons={addons} setAddons={setAddons} />

            <div className="text-center">
              <button
                  type="submit"
                  className="w-full px-6 py-3 bg-yellow-500 text-black font-medium rounded-lg shadow hover:bg-yellow-600 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </form>
        </div>
        {showTerms && (
            <TermsAndConditionsModal
                onAccept={handleAcceptTerms}
                onCancel={() => setShowTerms(false)}
            />
        )}
      </div>
  );
};

export default VehicleForm;
