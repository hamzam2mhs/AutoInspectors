import React from "react";

const SellerInformation = ({
  sellerName,
  setSellerName,
  contactNumber,
  setContactNumber,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label
          htmlFor="seller-name"
          className="block text-lg font-medium text-gray-700"
        >
          Full Name<span className="text-red-500">*</span>
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
  );
};

export default SellerInformation;
