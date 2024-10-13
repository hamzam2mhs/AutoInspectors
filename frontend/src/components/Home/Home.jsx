import React from "react";
import Carousel from "./Carousel";
import About from "./About";
import Services from "./Services";
import PricingPlans from "./PricingPlans";

const Home = () => {
  return (
    <div>
      <Carousel />
      <About />
      <Services />
      <PricingPlans />
    </div>
  );
};

export default Home;
