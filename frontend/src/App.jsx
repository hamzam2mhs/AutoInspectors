import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import VehicleInspectionForm from "./components/vehicle-inspection/vehicleform";
import ContactForm from "./components/ContactForm/ContactForm";

// Home component now only displays "Hello"
const Home = () => <h1 className="text-3xl font-bold">Hello</h1>;

// Inspection order now shows the Vehicle Inspection Form
const InspectionOrder = () => <VehicleInspectionForm />;

// Placeholder components for other routes
const Location = () => <h1 className="text-3xl font-bold">Hello Location</h1>;
const Blog = () => <h1 className="text-3xl font-bold">Hello Blog</h1>;

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar component */}
        <Navbar />
        <div className="p-4">
          <Routes>
            {/* Home route */}
            <Route path="/" element={<Home />} />

            {/* Inspection order route */}
            <Route path="/inspection" element={<InspectionOrder />} />

            {/* Location and Blog placeholders */}
            <Route path="/location" element={<Location />} />
            <Route path="/blog" element={<Blog />} />

            {/* Contact page */}
            <Route path="/contact" element={<ContactForm />} />

            {/* 404 Route */}
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
