import React, { useState } from "react";
import axios from "axios";
import "./VehicleInspectionForm.css"; // Import CSS (if needed)

const VehicleInspectionForm = () => {
  const [formData, setFormData] = useState({
    vehicleType: "",
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    dealershipName: "",
    stockNumber: "",
    sellerName: "",
    sellerPhone: "",
    vehicleAddress: "",
    vin: "",
    askingPrice: "",
    buyerFirstName: "",
    buyerLastName: "",
    buyerEmail: "",
    buyerPhone: "",
    creditCardNumber: "",
    expirationDate: "",
    cvv: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/inspections", formData);
      console.log("Form submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="vehicle-inspection-form">
      <h2>Vehicle to be Inspected</h2>
      <label>
        Vehicle Type:
        <input
          type="text"
          name="vehicleType"
          value={formData.vehicleType}
          onChange={handleChange}
        />
      </label>
      <label>
        Vehicle Year:
        <input
          type="number"
          name="vehicleYear"
          value={formData.vehicleYear}
          onChange={handleChange}
        />
      </label>
      <label>
        Vehicle Make:
        <input
          type="text"
          name="vehicleMake"
          value={formData.vehicleMake}
          onChange={handleChange}
        />
      </label>
      {/* Add more fields as needed */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default VehicleInspectionForm;
