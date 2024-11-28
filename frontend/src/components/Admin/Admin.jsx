import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate and useLocation
import carImage from "../../assets/HomeImages/admin.jpg";

function Admin() {
  const location = useLocation(); // To capture any state passed from the Navbar
  const navigate = useNavigate(); // To programmatically navigate to other pages

  const [formData, setFormData] = useState({
    clientFullName: "",
    clientEmail: "",
    clientPhone: "",
    clientAddress: "",
    location: "",
    preparedBy: "",
    conductedOn: "",
    vehicleIdentificationType: "VIN",
    vin: "",
    licensePlate: "",
    identificationType: "",
    mileage: "",
    brakeSystem: "OK",
    parkingBrakes: "OK",
    brakeDrums: "OK",
    brakeHose: "OK",
    lowPressureWarning: "OK",
    fifthWheel: "OK",
    pintleHooks: "OK",
    towbar: "OK",
    fanBelts: "OK",
    oilPressure: "OK",
    radiator: "OK",
    battery: "OK",
    exhaustSystem: "OK",
    wiringAndFuelLine: "OK",
    muffler: "OK",
    fuelLeak: "OK",
    fuelCap: "OK",
    fuelTankAttached: "OK",
    headlights: "OK",
    brakeLights: "OK",
    tailLights: "OK",
    dashLights: "OK",
    clearanceLights: "OK",
    turnIndicators: "OK",
    seatBelts: "OK",
    fireExtinguisher: "OK",
    flagsFlares: "OK",
    decals: "OK",
    spareBulbs: "OK",
    cargoProtection: "OK",
    liftGate: "OK",
    steeringWheelFreePlay: "OK",
    steeringColumn: "OK",
    frontAxleBeam: "OK",
    steeringGearBox: "OK",
    pitmanArm: "OK",
    powerSteering: "OK",
    ballSocketJoints: "OK",
    tieRods: "OK",
    uBolts: "OK",
    springAssembly: "OK",
    tireCondition: "OK",
    tireAirPressure: "OK",
    chains: "OK",
    wheelsRims: "OK",
    lockRings: "OK",
    fasteners: "OK",
    welds: "OK",
    windshield: "OK",
    wiperBlades: "OK",
    transmissionFluid: "OK",
    clutchFreePlay: "OK",
    heaterDefroster: "OK",
    mirrors: "OK",
    frame: "OK",
    body: "OK",
    otherObservations: "",
    overallCondition: "Good",
    recommendations: "",
    inspectorName: "",
    notes: {},
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentField, setCurrentField] = useState("");
  const [currentNote, setCurrentNote] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if form is submitted successfully

  useEffect(() => {
    if (!isAuthenticated) {
      setPassword(""); // Clear the password field when not authenticated
    }
  }, [isAuthenticated]);

  // Reset authentication and submission state when the component mounts or user navigates back to Admin
  useEffect(() => {
    if (location.state?.resetAuth) {
      setIsAuthenticated(false); // Reset authentication when navigated to Admin
      setIsSubmitted(false); // Reset form submission state
      setPassword(""); // Clear the password when resetting authentication
    }
  }, [location.state]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const adminPassword = import.meta.env.VITE_ADMIN_PW; // Accessing the password from .env

    if (password === adminPassword) {
      setIsAuthenticated(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Access Denied! Incorrect Password.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddNoteClick = (field) => {
    setCurrentField(field);
    setCurrentNote(formData.notes[field] || "");
    setIsModalOpen(true);
  };

  const handleSaveNote = () => {
    setFormData({
      ...formData,
      notes: {
        ...formData.notes,
        [currentField]: currentNote,
      },
    });
    setIsModalOpen(false);
  };

  const handleDeleteNote = () => {
    const updatedNotes = { ...formData.notes };
    delete updatedNotes[currentField];
    setFormData({
      ...formData,
      notes: updatedNotes,
    });
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNoteChange = (e) => {
    setCurrentNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      clientFullName: formData.clientFullName,
      clientEmail: formData.clientEmail,
      clientPhone: formData.clientPhone,
      clientAddress: formData.clientAddress,
      location: formData.location,
      preparedBy: formData.preparedBy,
      conductedOn: formData.conductedOn,
      vehicleIdentificationType: formData.vehicleIdentificationType,
      vin: formData.vin,
      licensePlate: formData.licensePlate,
      identificationType: formData.identificationType,
      mileage: formData.mileage,
      brakeSystem: formData.brakeSystem,
      parkingBrakes: formData.parkingBrakes,
      brakeDrums: formData.brakeDrums,
      brakeHose: formData.brakeHose,
      lowPressureWarning: formData.lowPressureWarning,
      fifthWheel: formData.fifthWheel,
      pintleHooks: formData.pintleHooks,
      towbar: formData.towbar,
      fanBelts: formData.fanBelts,
      oilPressure: formData.oilPressure,
      radiator: formData.radiator,
      battery: formData.battery,
      exhaustSystem: formData.exhaustSystem,
      wiringAndFuelLine: formData.wiringAndFuelLine,
      muffler: formData.muffler,
      fuelLeak: formData.fuelLeak,
      fuelCap: formData.fuelCap,
      fuelTankAttached: formData.fuelTankAttached,
      headlights: formData.headlights,
      brakeLights: formData.brakeLights,
      tailLights: formData.tailLights,
      dashLights: formData.dashLights,
      clearanceLights: formData.clearanceLights,
      turnIndicators: formData.turnIndicators,
      seatBelts: formData.seatBelts,
      fireExtinguisher: formData.fireExtinguisher,
      flagsFlares: formData.flagsFlares,
      decals: formData.decals,
      spareBulbs: formData.spareBulbs,
      cargoProtection: formData.cargoProtection,
      liftGate: formData.liftGate,
      steeringWheelFreePlay: formData.steeringWheelFreePlay,
      steeringColumn: formData.steeringColumn,
      frontAxleBeam: formData.frontAxleBeam,
      steeringGearBox: formData.steeringGearBox,
      pitmanArm: formData.pitmanArm,
      powerSteering: formData.powerSteering,
      ballSocketJoints: formData.ballSocketJoints,
      tieRods: formData.tieRods,
      uBolts: formData.uBolts,
      springAssembly: formData.springAssembly,
      tireCondition: formData.tireCondition,
      tireAirPressure: formData.tireAirPressure,
      chains: formData.chains,
      wheelsRims: formData.wheelsRims,
      lockRings: formData.lockRings,
      fasteners: formData.fasteners,
      welds: formData.welds,
      windshield: formData.windshield,
      wiperBlades: formData.wiperBlades,
      transmissionFluid: formData.transmissionFluid,
      clutchFreePlay: formData.clutchFreePlay,
      heaterDefroster: formData.heaterDefroster,
      mirrors: formData.mirrors,
      frame: formData.frame,
      body: formData.body,
      otherObservations: formData.otherObservations,
      overallCondition: formData.overallCondition,
      recommendations: formData.recommendations,
      inspectorName: formData.inspectorName,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_MECHANIC_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSubmitted(true); // Mark as submitted after success
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send email. Please try again.");
      });
  };

  if (!isAuthenticated) {
    return (
      <div
        className="p-8 bg-cover bg-center min-h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${carImage})`,
        }}
      >
        <h1 className="text-2xl font-bold mb-4 p-4 bg-white text-center text-gray-700 border-2 border-gray-300 rounded-md shadow-lg">
          Enter Admin Password
        </h1>{" "}
        <form
          onSubmit={handlePasswordSubmit}
          className="bg-white p-6 shadow-md rounded-md"
        >
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
            className="w-full p-2 mb-4 border rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Vehicle Inspection Form</h1>
      {!isSubmitted ? (
        <form
          className="bg-white p-6 shadow-md rounded-md"
          onSubmit={handleSubmit}
        >
          {/* Client Information */}
          <h2 className="text-xl font-semibold mb-2">Client Information</h2>
          {[
            "clientFullName",
            "clientEmail",
            "clientPhone",
            "clientAddress",
          ].map((item) => (
            <div className="mb-4" key={item}>
              <label className="block text-gray-700 capitalize">
                {item.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="text"
                name={item}
                value={formData[item]}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
          ))}

          {/* Location and Inspection Info */}
          <h2 className="text-xl font-semibold mb-2">Inspection Information</h2>
          {["location", "preparedBy", "conductedOn"].map((item) => (
            <div className="mb-4" key={item}>
              <label className="block text-gray-700 capitalize">
                {item.replace(/([A-Z])/g, " $1")}
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  name={item}
                  value={formData[item]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
                <button
                  type="button"
                  onClick={() => handleAddNoteClick(item)}
                  className="ml-4 bg-blue-500 text-white px-4 py-1 rounded-md text-sm"
                >
                  {formData.notes[item] ? "Edit Note" : "Add Note"}
                </button>
              </div>
              {formData.notes[item] && (
                <p className="text-sm text-gray-500 mt-1">
                  Note: {formData.notes[item]}
                </p>
              )}
            </div>
          ))}

          {/* VIN and License Plate */}
          {["vin", "licensePlate", "identificationType", "mileage"].map(
            (item) => (
              <div className="mb-4" key={item}>
                <label className="block text-gray-700 capitalize">
                  {item.replace(/([A-Z])/g, " $1")}
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    name={item}
                    value={formData[item]}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                  />
                  <button
                    type="button"
                    onClick={() => handleAddNoteClick(item)}
                    className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md text-sm"
                  >
                    {formData.notes[item] ? "Edit Note" : "Add Note"}
                  </button>
                </div>
                {formData.notes[item] && (
                  <p className="text-sm text-gray-500 mt-1">
                    Note: {formData.notes[item]}
                  </p>
                )}
              </div>
            )
          )}

          {/* Inspection Items */}
          <h2 className="text-xl font-semibold mt-6 mb-2">Inspection Items</h2>
          {[
            "brakeSystem",
            "parkingBrakes",
            "brakeDrums",
            "brakeHose",
            "lowPressureWarning",
            "fifthWheel",
            "pintleHooks",
            "towbar",
            "fanBelts",
            "oilPressure",
            "radiator",
            "battery",
            "exhaustSystem",
            "wiringAndFuelLine",
            "muffler",
            "fuelLeak",
            "fuelCap",
            "fuelTankAttached",
            "headlights",
            "brakeLights",
            "tailLights",
            "dashLights",
            "clearanceLights",
            "turnIndicators",
            "seatBelts",
            "fireExtinguisher",
            "flagsFlares",
            "decals",
            "spareBulbs",
            "cargoProtection",
            "liftGate",
            "steeringWheelFreePlay",
            "steeringColumn",
            "frontAxleBeam",
            "steeringGearBox",
            "pitmanArm",
            "powerSteering",
            "ballSocketJoints",
            "tieRods",
            "uBolts",
            "springAssembly",
            "tireCondition",
            "tireAirPressure",
            "chains",
            "wheelsRims",
            "lockRings",
            "fasteners",
            "welds",
            "windshield",
            "wiperBlades",
            "transmissionFluid",
            "clutchFreePlay",
            "heaterDefroster",
            "mirrors",
            "frame",
            "body",
          ].map((item) => (
            <div className="mb-4" key={item}>
              <label className="block text-gray-700 capitalize">
                {item.replace(/([A-Z])/g, " $1")}
              </label>
              <div className="flex items-center">
                <select
                  name={item}
                  value={formData[item]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="OK">OK</option>
                  <option value="Needs Repair">Needs Repair</option>
                  <option value="Not Applicable">Not Applicable</option>
                </select>
                <button
                  type="button"
                  onClick={() => handleAddNoteClick(item)}
                  className="ml-4 bg-blue-500 text-white px-4 py-1 rounded-md text-sm"
                >
                  {formData.notes[item] ? "Edit Note" : "Add Note"}
                </button>
              </div>
              {formData.notes[item] && (
                <p className="text-sm text-gray-500 mt-1">
                  Note: {formData.notes[item]}
                </p>
              )}
            </div>
          ))}

          {/* Summary */}
          <div className="mb-4">
            <label className="block text-gray-700">
              Enter any other observations
            </label>
            <textarea
              name="otherObservations"
              value={formData.otherObservations}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Overall Condition</label>
            <select
              name="overallCondition"
              value={formData.overallCondition}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            >
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Average">Average</option>
              <option value="Poor">Poor</option>
              <option value="High Risk">High Risk</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Recommendations</label>
            <textarea
              name="recommendations"
              value={formData.recommendations}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Inspector Name</label>
            <input
              type="text"
              name="inspectorName"
              value={formData.inspectorName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="text-center mt-8">
          <h2 className="text-2xl font-bold text-green-600">
            Report sent successfully!
          </h2>
          <a href="/" className="text-blue-500 underline mt-4">
            Return to homepage
          </a>
        </div>
      )}

      {/* Modal for Notes */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-96 p-6 rounded-md shadow-lg">
            <h3 className="text-lg font-bold mb-4">Add/Edit Note</h3>
            <textarea
              value={currentNote}
              onChange={handleNoteChange}
              className="w-full p-2 border rounded-md mb-4"
              rows="4"
              placeholder={`Add or edit a note for ${currentField.replace(
                /([A-Z])/g,
                " $1"
              )}`}
            ></textarea>
            <div className="flex justify-end">
              <button
                onClick={handleCloseModal}
                className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteNote}
                className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
              >
                Delete Note
              </button>
              <button
                onClick={handleSaveNote}
                className="ml-4 bg-blue-500 text-white px-4 py-1 rounded-md text-sm"
              >
                Save Note
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;
