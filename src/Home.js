import React from "react";
import HeroSection from "./components/HeroSection";

const Home = () => {
  const data = {
    name: "The Laundry",
  };

  return <HeroSection myData={data} />;
};

export default Home;
