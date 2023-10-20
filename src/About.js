import HeroSection from "./components/HeroSection";

const About = () => {

  const data = {
    name: "The Laundry",
  };

  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default About;
