import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Footer from "./components/Footer";
import FeatureStore from "./components/FeatureStore"
import Service1 from "./components/Service1";
// import FeatureProduct from "./components/FeatureProduct";


const Home = () => {
  const data = {
    name: "The Laundry",
  };

  return (
    <>
      <HeroSection myData={data} />
      {/* <FeatureProduct /> */}
      <Service1/>
      <FeatureStore/>
      <Services />
      <Footer/>
    </>
  );
};

export default Home;
