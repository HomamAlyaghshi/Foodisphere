import React from "react";
import Appbar from "./../Shared/Appbar";
import Footer from "./../Shared/Footer";
import HeaderOfPage from "./../Shared/HeaderOfPage";
import InputForm from "../Components/InputForm";
import Map from "../Components/Map";

const BookTable = () => {
  return (
    <div className="  bg-gray-100">
      <Appbar />
      <HeaderOfPage
        h1={"Book A Table"}
        p={
          <p>
            Discover a selection of dishes crafted to delight your taste buds.
            <br /> From light bites to hearty meals, our menu offers something
            for everyone.
          </p>
        }
      />
      <InputForm/>
      <Map/>
      <Footer />
    </div>
  );
};

export default BookTable;
