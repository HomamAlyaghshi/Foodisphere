import React from "react";
import About from "./../HomePageComponents/About";
import Footer from "../Shared/Footer";
import Appbar from "../Shared/Appbar";
import AboutVideo from "../AboutPageComponents/AboutVideo";

const AboutPage = () => {
  return (
    <div className="w-full h-full">
      <Appbar />
      <About src={"/images/HomePage/about2.png"} />
      <AboutVideo/>
      <Footer />
    </div>
  );
};

export default AboutPage;
