import React, { useState, useEffect, useRef } from "react";
import jsonp from "jsonp";

const VehicleMakeSelect = ({
                             selectedMake,
                             setSelectedMake,
                             setSelectedModel,
                           }) => {
  const [filteredMakes, setFilteredMakes] = useState([]);
  const [makes, setMakes] = useState([]);
  const [isMakeDropdownOpen, setIsMakeDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference to the dropdown for outside click detection

  useEffect(() => {
    const fetchMakes = () => {
      jsonp(
          "https://www.carqueryapi.com/api/0.3/?cmd=getMakes",
          null,
          (err, data) => {
            if (err) {
              console.error("Error fetching vehicle makes", err);
            } else {
              setMakes(data.Makes);
              setFilteredMakes(data.Makes);
            }
          }
      );
    };
    fetchMakes();
  }, []);

  const handleMakeInputChange = (e) => {
    const input = e.target.value;
    setSelectedMake(input);
    setSelectedModel(""); // Reset model when new make is selected

    const filtered = makes.filter((make) =>
        make.make_display.toLowerCase().startsWith(input.toLowerCase())
    );
    setFilteredMakes(filtered);

    setIsMakeDropdownOpen(filtered.length > 0);
  };

  const handleMakeSelect = (make) => {
    setSelectedMake(make.make_display);
    setIsMakeDropdownOpen(false);
    setSelectedModel("");
  };

  const handleClickOutside = (event) => {
    // Close dropdown if clicked outside of the input or dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsMakeDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to detect outside clicks
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
      <div className="relative" ref={dropdownRef}>
        <label htmlFor="make" className="block text-lg font-medium text-gray-700">
          Vehicle Make<span className="text-red-500">*</span>
        </label>
        <input
            type="text"
            id="make"
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
            value={selectedMake}
            onChange={handleMakeInputChange}
            placeholder="e.g. Ford"
            required
            onFocus={() => setIsMakeDropdownOpen(true)} // Open dropdown on focus
        />
        {isMakeDropdownOpen && (
            <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
              {filteredMakes.map((make) => (
                  <li
                      key={make.make_id}
                      onClick={() => handleMakeSelect(make)}
                      className="cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2"
                  >
                    {make.make_display}
                  </li>
              ))}
            </ul>
        )}
      </div>
  );
};

export default VehicleMakeSelect;
