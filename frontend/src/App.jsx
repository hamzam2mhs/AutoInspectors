import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import VehicleInspectionForm from "./components/vehicle-inspection/vehicleform";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Blog/Blog"; // Updated Blog import

const InspectionOrder = () => <VehicleInspectionForm />;
const Location = () => <h1 className="text-3xl font-bold">Hello Location</h1>;

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="p-4 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inspection" element={<InspectionOrder />} />
            <Route path="/location" element={<Location />} />
            {/* Blog main route */}
            <Route path="/blog/*" element={<Blog />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route
              path="*"
              element={
                <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
