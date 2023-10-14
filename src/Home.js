import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Footer from "./components/Footer";
import FeatureProduct from "./components/FeatureProduct";


const Home = () => {
  const data = {
    name: "The Laundry",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Footer/>
    </>
  );
};

export default Home;
