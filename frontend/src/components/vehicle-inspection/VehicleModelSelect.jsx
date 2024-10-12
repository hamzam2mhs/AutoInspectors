import React, { useState, useEffect } from "react";
import jsonp from "jsonp";

const VehicleModelSelect = ({
  selectedModel,
  setSelectedModel,
  selectedMake,
}) => {
  const [filteredModels, setFilteredModels] = useState([]);
  const [models, setModels] = useState([]);
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);

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
              setModels(data.Models);
              setFilteredModels(data.Models);
            }
          }
        );
      };
      fetchModels();
    } else {
      setModels([]);
      setFilteredModels([]);
    }
  }, [selectedMake]);

  const handleModelInputChange = (e) => {
    const input = e.target.value;
    setSelectedModel(input);

    const filtered = models.filter((model) =>
      model.model_name.toLowerCase().startsWith(input.toLowerCase())
    );
    setFilteredModels(filtered);
    setIsModelDropdownOpen(filtered.length > 0);
  };

  return (
    <div className="relative">
      <label
        htmlFor="model"
        className="block text-lg font-medium text-gray-700"
      >
        Vehicle Model
      </label>
      <input
        type="text"
        id="model"
        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
        value={selectedModel}
        onChange={handleModelInputChange}
        placeholder="e.g. Fusion"
        required
        disabled={!selectedMake}
      />
      {isModelDropdownOpen && (
        <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
          {filteredModels.map((model) => (
            <li
              key={model.model_id}
              onClick={() => {
                setSelectedModel(model.model_name);
                setIsModelDropdownOpen(false);
              }}
              className="cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2"
            >
              {model.model_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VehicleModelSelect;
