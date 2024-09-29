import React from "react";
import Carousel from "./Carousel";
import About from "./About";
import Services from "./Services";
import PricingPlans from "./PricingPlans";
import Locations from "./Locations";
import Team from "./Team";

const Home = () => {
  return (
    <div>
      <Carousel />
      <About />
      <Services />
      <PricingPlans />
      <Locations />
      <Team />
    </div>
  );
};

export default Home;
