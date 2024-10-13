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
    });

    const navigate = useNavigate();

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

                    {/* Group Vehicle Year, Make, and Model in one row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                    </div>

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
