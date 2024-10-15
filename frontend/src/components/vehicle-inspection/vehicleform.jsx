import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useJsApiLoader } from "@react-google-maps/api";
import emailjs from "emailjs-com";
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
    const [isBuyer, setIsBuyer] = useState(false); // State for buyer checkbox
    const [isSubmitted, setIsSubmitted] = useState(false); // State for submission

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Collect form data
        const formData = {
            vehicleYear,
            selectedMake,
            selectedModel,
            isBuyer: isBuyer ? "Yes" : "No",  // Include buyer information
            sellerName,
            contactNumber,
            address,
            carfax: addons.carfax ? "Yes" : "No",
            verbalReport: addons.verbalReport ? "Yes" : "No",
        };

        // Display the collected form data in the console for debugging
        console.log("Form Data:", formData);

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
                {isSubmitted ? (
                    <div className="bg-white bg-opacity-90 p-8 max-w-3xl w-full shadow-xl rounded-lg text-center">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>
                        <p className="text-lg text-gray-700">Your inspection request has been submitted successfully. You will be contacted soon.</p>
                    </div>
                ) : (
                    <form
                        className="bg-white bg-opacity-90 p-8 max-w-3xl w-full shadow-xl rounded-lg space-y-6"
                        onSubmit={handleSubmit}
                    >
                        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
                            Order Vehicle Inspection
                        </h1>

                        {/* Group Vehicle Year, Make, and Model in one row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

                        {/* Seller Information */}
                        <SellerInformation
                            sellerName={sellerName}
                            setSellerName={setSellerName}
                            contactNumber={contactNumber}
                            setContactNumber={setContactNumber}
                            isBuyer={isBuyer}
                            setIsBuyer={setIsBuyer} // Pass the buyer checkbox state
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
                )}
            </div>
        </div>
    );
};

export default VehicleForm;
