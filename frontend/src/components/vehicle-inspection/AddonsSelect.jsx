import React from "react";

const AddonsSelect = ({ addons, setAddons }) => {
  const handleAddonsChange = (e) => {
    const { name, checked } = e.target;
    setAddons({ ...addons, [name]: checked });
  };

  return (
    <div className="border p-4 bg-gray-100 rounded-md">
      <h3 className="text-lg font-bold text-gray-700 mb-2">
        Inspection Add-Ons
      </h3>
      <p className="text-gray-600 mb-4">
        Enhance your inspection package with these optional services!
      </p>

      <div className="space-y-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="carfax"
            id="carfax"
            className="h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500 checked:bg-yellow-500 checked:border-yellow-500"
            checked={addons.carfax}
            onChange={handleAddonsChange}
          />
          <label htmlFor="carfax" className="ml-2 text-gray-700">
            $25.99 - CARFAX Vehicle History Report
            <span className="text-red-500"> (Limited time discount)</span>
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="verbalReport"
            id="verbalReport"
            className="h-4 w-4 text-yellow-500 border-gray-300 rounded focus:ring-yellow-500 checked:bg-yellow-500 checked:border-yellow-500"
            checked={addons.verbalReport}
            onChange={handleAddonsChange}
          />
          <label htmlFor="verbalReport" className="ml-2 text-gray-700">
            $20.99 - Verbal Vehicle Assessment Report
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddonsSelect;
