import React, { useState, useEffect } from "react";

const VehicleYearSelect = ({ vehicleYear, setVehicleYear }) => {
  const [filteredYears, setFilteredYears] = useState([]);
  const [allYears, setAllYears] = useState([]); // Keep a copy of all years for resetting
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Error message state

  // Set the years from 2005 to the current year
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = 2005; year <= currentYear; year++) {
      years.push(year.toString());
    }
    setAllYears(years); // Store the complete list of years
    setFilteredYears(years); // Initially show all years
  }, []);

  // Handle user input changes
  const handleVehicleYearChange = (e) => {
    const input = e.target.value;
    setVehicleYear(input);

    // Check if the input is below 2005
    if (input && input < 2005) {
      setErrorMessage("Year must be 2005 or later");
    } else {
      setErrorMessage(""); // Clear error if input is valid
    }

    // Filter years based on input
    const filtered = allYears.filter((year) => year.startsWith(input));
    setFilteredYears(filtered);

    // Open the dropdown only if there are filtered results
    setIsYearDropdownOpen(filtered.length > 0);
  };

  // When a year is selected from the dropdown
  const handleYearSelect = (year) => {
    setVehicleYear(year);
    setIsYearDropdownOpen(false);
    setErrorMessage(""); // Clear error when a valid year is selected
  };

  return (
      <div className="relative">
        <label htmlFor="year" className="block text-lg font-medium text-gray-700">
          Vehicle Year<span className="text-red-500">*</span>
        </label>
        <input
            type="text"
            id="year"
            className={`block w-full py-2 px-3 border ${
                errorMessage ? 'border-red-500' : 'border-gray-300'
            } bg-white rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500`}
            value={vehicleYear}
            onChange={handleVehicleYearChange}
            placeholder="e.g. 2006"
            required
            onFocus={() => setIsYearDropdownOpen(true)} // Open dropdown on input focus
            onBlur={() => setTimeout(() => setIsYearDropdownOpen(false), 200)} // Close dropdown on blur with delay
        />
        {errorMessage && (
            <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
        )}
        {isYearDropdownOpen && (
            <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
              {filteredYears.map((year) => (
                  <li
                      key={year}
                      onClick={() => handleYearSelect(year)}
                      className="cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2"
                  >
                    {year}
                  </li>
              ))}
            </ul>
        )}
      </div>
  );
};

export default VehicleYearSelect;
