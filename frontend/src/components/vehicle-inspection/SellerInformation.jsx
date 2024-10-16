import React, { useState } from "react";

const SellerInformation = ({
                               sellerName,
                               setSellerName,
                               contactNumber,
                               setContactNumber,
                               isBuyer, // Passing isBuyer from parent
                               setIsBuyer, // Function to update the isBuyer state
                           }) => {
    return (
        <div className="space-y-4">
            {/* Checkbox for buyer/seller */}
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="is-buyer"
                    className="h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500"
                    checked={isBuyer}
                    onChange={(e) => setIsBuyer(e.target.checked)} // Update the state when the checkbox changes
                />
                <label htmlFor="is-buyer" className="ml-2 text-gray-700">
                    I am the buyer
                </label>
            </div>

            {/* Seller/Buyer Full Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label
                        htmlFor="seller-name"
                        className="block text-lg font-medium text-gray-700"
                    >
                        {isBuyer ? "Buyer Name" : "Seller Name"}
                        <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="seller-name"
                        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                        value={sellerName}
                        onChange={(e) => setSellerName(e.target.value)}
                        placeholder={`Enter the ${isBuyer ? "buyer's" : "seller's"} name`}
                        required
                    />
                </div>

                {/* Contact Number */}
                <div>
                    <label
                        htmlFor="contact-number"
                        className="block text-lg font-medium text-gray-700"
                    >
                        Contact Number<span className="text-red-500">*</span>
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
        </div>
    );
};

export default SellerInformation;
