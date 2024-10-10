import React, { useState, useEffect } from "react";
import axios from "axios";
import "./VehicleInspectionForm.css";

const VehicleForm = () => {
  const [formData, setFormData] = useState({
    vehicleMake: "",
    vehicleModel: "",
  });

  const [vehicleMakes, setVehicleMakes] = useState([]);
  const [vehicleModels, setVehicleModels] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");

  const API_KEY = "4f9a2983-1287-426c-bc08-4c5355604844";  // Replace with your Car API key

  // Fetch vehicle makes from Car API
  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const response = await axios.get("https://carapi.app/api/makes", {
          headers: {
            Authorization: `Bearer ${API_KEY}`,  // Use your API key for authorization
          },
        });
        console.log("Fetched Makes:", response.data);
        setVehicleMakes(response.data);
      } catch (error) {
        console.error("Error fetching vehicle makes:", error);
      }
    };
    fetchMakes();
  }, []);

  // Fetch models for selected make from Car API
  useEffect(() => {
    if (selectedMake) {
      const fetchModels = async () => {
        try {
          const response = await axios.get(`https://carapi.app/api/models?make=${selectedMake}`, {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          });
          console.log("Fetched Models:", response.data);
          setVehicleModels(response.data);
        } catch (error) {
          console.error("Error fetching vehicle models:", error);
        }
      };
      fetchModels();
    }
  }, [selectedMake]);

  const handleMakeChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedMake(selectedValue);
    setFormData({ ...formData, vehicleMake: selectedValue });
  };

  const handleModelChange = (e) => {
    setFormData({ ...formData, vehicleModel: e.target.value });
  };

  return (
      <form className="vehicle-inspection-form">
        <label className="form-label">
          Vehicle Make:
          <select
              name="vehicleMake"
              value={formData.vehicleMake}
              onChange={handleMakeChange}
              className="form-select"
          >
            <option value="">Select Make</option>
            {vehicleMakes.map((make, index) => (
                <option key={index} value={make.name}>
                  {make.name}
                </option>
            ))}
          </select>
        </label>

        {selectedMake && (
            <label className="form-label">
              Vehicle Model:
              <select
                  name="vehicleModel"
                  value={formData.vehicleModel}
                  onChange={handleModelChange}
                  className="form-select"
              >
                <option value="">Select Model</option>
                {vehicleModels.map((model, index) => (
                    <option key={index} value={model.name}>
                      {model.name}
                    </option>
                ))}
              </select>
            </label>
        )}
      </form>
  );
};

export default VehicleForm;
