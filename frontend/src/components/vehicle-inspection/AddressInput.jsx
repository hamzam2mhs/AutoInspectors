import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";

const AddressInput = ({ address, setAddress }) => {
    const [autocomplete, setAutocomplete] = useState(null);

    const onLoad = (autocompleteInstance) => {
        setAutocomplete(autocompleteInstance);
    };

    const onPlaceChanged = () => {
        if (autocomplete !== null) {
            const place = autocomplete.getPlace();
            if (place && place.formatted_address) {
                setAddress(place.formatted_address); // Update address with the full selected place
            } else {
                console.log("No valid address selected");
            }
        }
    };

    return (
        <div className="grid grid-cols-1 gap-4">
            <label
                htmlFor="address"
                className="block text-lg font-medium text-gray-700"
            >
                Address of the Vehicle<span className="text-red-500">*</span>
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
    );
};

export default AddressInput;
