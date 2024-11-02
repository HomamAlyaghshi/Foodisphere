import React from "react";
import About from "./../HomePageComponents/About";
import Footer from "../Shared/Footer";
import Appbar from "../Shared/Appbar";
import AboutVideo from "../AboutPageComponents/AboutVideo";
import Values from "../AboutPageComponents/Values";
import AboutCustomers from "../AboutPageComponents/AboutCustomers";

const AboutPage = () => {
  return (
    <div className="w-full h-full">
      <Appbar />
      <About src={"/images/HomePage/about2.png"} />
      <AboutVideo/>
      <Values/>
      <AboutCustomers/>
      <Footer />
    </div>
  );
};

export default AboutPage;
