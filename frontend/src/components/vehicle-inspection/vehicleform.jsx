import React, { useState, useEffect } from "react";
import jsonp from "jsonp";

const VehicleForm = () => {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  // Fetch vehicle makes from Car Query API
  useEffect(() => {
    const fetchMakes = () => {
      jsonp(
        "https://www.carqueryapi.com/api/0.3/?cmd=getMakes",
        null,
        (err, data) => {
          if (err) {
            console.error("Error fetching vehicle makes", err);
          } else {
            console.log("Makes Data:", data.Makes);
            setMakes(data.Makes);
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
              console.log("Models Data:", data.Models);
              setModels(data.Models);
            }
          }
        );
      };

      fetchModels();
    } else {
      setModels([]);
    }
  }, [selectedMake]);

  return (
    <form>
      <div>
        <label htmlFor="make">Vehicle Make</label>
        <select
          id="make"
          value={selectedMake}
          onChange={(e) => {
            setSelectedMake(e.target.value);
            setSelectedModel(""); // Reset model when make changes
          }}
          required
        >
          <option value="">Select a make</option>
          {makes.length > 0 ? (
            makes.map((make) => (
              <option
                key={`${make.make_id}-${make.make_display}`}
                value={make.make_id}
              >
                {make.make_display}
              </option>
            ))
          ) : (
            <option disabled>Loading makes...</option>
          )}
        </select>
      </div>

      <div>
        <label htmlFor="model">Vehicle Model</label>
        <select
          id="model"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          required
          disabled={!selectedMake} // Disable until make is selected
        >
          <option value="">Select a model</option>
          {models.length > 0 ? (
            models.map((model) => (
              <option
                key={`${model.model_id}-${model.model_name}`}
                value={model.model_name}
              >
                {model.model_name}
              </option>
            ))
          ) : selectedMake ? (
            <option disabled>Loading models...</option>
          ) : (
            <option disabled>Select a make first</option>
          )}
        </select>
      </div>
    </form>
  );
};

export default VehicleForm;
