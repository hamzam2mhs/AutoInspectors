import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jsonp from 'jsonp';  // <-- Add this line to import jsonp
import backgroundImage from "../../assets/FormImages/inspectionBackground.jpg"; // Adjust the path based on your folder structure

const VehicleForm = () => {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const navigate = useNavigate();

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

  const handleButtonClick = () => {
    navigate("/inspection");
  };

  return (
      <div className="relative w-full h-[600px] bg-gray-200">
        {/* Background Image */}
        <img
            src={backgroundImage}
            alt="Background Image"
            className="w-full h-full object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center text-white px-4">
          <h1 className="text-3xl font-bold">Submit Your Vehicle Inspection Request</h1>

          {/* Vehicle Form */}
          <form className="mt-6 max-w-xl mx-auto p-6 bg-white bg-opacity-80 shadow-lg rounded-lg">
            <div className="mb-6">
              <label htmlFor="make" className="block text-lg font-medium text-gray-700 mb-2">
                Vehicle Make
              </label>
              <input
                  list="makes"
                  id="make"
                  className="block w-full py-3 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                  value={selectedMake}
                  onChange={(e) => {
                    setSelectedMake(e.target.value);
                    setSelectedModel(""); // Reset model when make changes
                  }}
                  placeholder="Type or select a make"
                  required
              />
              <datalist id="makes">
                {makes.length > 0 ? (
                    makes.map((make) => (
                        <option key={make.make_id} value={make.make_display} />
                    ))
                ) : (
                    <option disabled>Loading makes...</option>
                )}
              </datalist>
            </div>

            <div className="mb-6">
              <label htmlFor="model" className="block text-lg font-medium text-gray-700 mb-2">
                Vehicle Model
              </label>
              <input
                  list="models"
                  id="model"
                  className="block w-full py-3 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  placeholder="Type or select a model"
                  required
                  disabled={!selectedMake} // Disable until make is selected
              />
              <datalist id="models">
                {models.length > 0 ? (
                    models.map((model) => (
                        <option key={model.model_id} value={model.model_name} />
                    ))
                ) : selectedMake ? (
                    <option disabled>Loading models...</option>
                ) : (
                    <option disabled>Select a make first</option>
                )}
              </datalist>
            </div>

            <div className="text-center">
              <button
                  type="submit"
                  className="w-full bg-yellow-500 text-black py-3 px-5 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
