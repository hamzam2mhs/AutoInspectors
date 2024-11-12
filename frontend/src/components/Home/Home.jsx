import React from "react";
import Carousel from "./Carousel";
import About from "./About";
import Services from "./Services";
import PricingPlans from "./PricingPlans";

const Home = () => {
  return (
    <div className="space-y-10">
      {" "}
      {/* Adjust the value for desired spacing */}
      <Carousel />
      <Services />
      <PricingPlans />
    </div>
  );
};

export default Home;
