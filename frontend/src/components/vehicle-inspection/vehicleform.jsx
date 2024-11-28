import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useJsApiLoader } from "@react-google-maps/api";
import emailjs from "@emailjs/browser";
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
  const [isSubmitted, setIsSubmitted] = useState(false); // State for submission
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

  // **Check for pre-selected vehicle type from location state**
  useEffect(() => {
    if (location.state?.vehicleType) {
      console.log("Vehicle type received:", location.state.vehicleType); // Debug log
      const type = location.state.vehicleType;
      setVehicleType(type);
      setVehiclePrice(vehiclePrices[type]);
    }
    setIsSubmitted(false); // Reset the form submission state
  }, [location.state]);


  const sendFormDetails = (formData) => {
    // Send form data via email using EmailJS
    emailjs
        .send(
            "service_8kk6fug", // Replace with your Service ID
            "template_r94velc", // Replace with your Template ID
            formData,
            "vdmHT32R3PRC5Ei7c" // Replace with your Public Key
        )
        .then(
            (result) => {
              console.log("Email successfully sent!", result.text);
              setIsSubmitted(true); // Set submission success
              setTimeout(() => navigate("/inspection"), 2000); // Redirect after 2 seconds
            },
            (error) => {
              console.error("Error sending email:", error.text);
            }
        );
  };

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

    // Add the item to the cart
    addToCart({
      id: Date.now(),
      name: vehicleType,
      price: vehiclePrice,
      details: {
        year: vehicleYear,
        make: selectedMake,
        model: selectedModel,
        addons,
      },
    });

    // Send the form details
    if (formData) {
      sendFormDetails(formData);
    }
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
        <div className="absolute inset-0 flex justify-center items-center z-10 bg-black bg-opacity-60">
          {isSubmitted ? (
              <div className="bg-white bg-opacity-90 p-8 max-w-3xl w-full shadow-xl rounded-lg text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  Thank You!
                </h1>
                <p className="text-lg text-gray-700">
                  Your inspection request has been submitted successfully. You will
                  be contacted soon.
                </p>
              </div>
          ) : (
              <form
                  className="bg-white bg-opacity-90 p-10 max-w-3xl w-full shadow-2xl rounded-lg space-y-6 text-gray-800"
                  onSubmit={handleSubmit}
              >
                <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
                  Order Vehicle Inspection
                </h1>

                {/* Vehicle Type Dropdown */}
                <div className="mb-6">
                  <label
                      htmlFor="vehicleType"
                      className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Select Vehicle Type:
                  </label>
                  <select
                      id="vehicleType"
                      value={vehicleType}
                      onChange={(e) => {
                        setVehicleType(e.target.value);
                        setVehiclePrice(vehiclePrices[e.target.value]);
                      }}
                      className="block w-full p-3 border border-gray-300 rounded-md"
                  >
                    {Object.keys(vehiclePrices).map((type) => (
                        <option key={type} value={type}>
                          {type} - ${vehiclePrices[type]}
                        </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <VehicleYearSelect
                      vehicleYear={vehicleYear}
                      setVehicleYear={setVehicleYear}
                  />
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

                <div className="text-center mt-8">
                  <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg shadow-lg hover:from-yellow-500 hover:to-yellow-700 transition transform hover:scale-105 duration-300 ease-out"
                  >
                    Submit Inspection Request
                  </button>
                </div>
              </form>
          )}

          {/* Render the Terms and Conditions modal */}
          {showTerms && (
              <TermsAndConditionsModal
                  onAccept={handleAcceptTerms}
                  onCancel={() => setShowTerms(false)}
              />
          )}
        </div>
      </div>
  );
};

export default VehicleForm;
