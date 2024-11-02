import React from "react";
import CardService from "./CardService";

const Service = () => {
  return (
    <div className="w-full h-full my-10  bg-lightColor">
      <h1 className="font-playfair text-5xl mb-4 text-themeColor mx-12 sm:mb-12">
        We also offer unique
        <br />
        sevice for your events
      </h1>
      <div className="sm:flex grid gap-4 sm:gap-0 justify-around items-center">
        <CardService
          src={"/images/HomePage/service1.png"}
          title={"Caterings"}
          subtitle={
            'In the new era of technology we look in the future with certainty and pride for our life"'
          }
        />
        <CardService
          src={"/images/HomePage/service2.png"}
          title={"Birthdays"}
          subtitle={
            'In the new era of technology we look in the future with certainty and pride for our life"'
          }
        />
        <CardService
          src={"/images/HomePage/service1.png"}
          title={"Widdings"}
          subtitle={
            'In the new era of technology we look in the future with certainty and pride for our life"'
          }
        />
        <CardService
          src={"/images/HomePage/service2.png"}
          title={"Events"}
          subtitle={
            'In the new era of technology we look in the future with certainty and pride for our life"'
          }
        />
      </div>
    </div>
  );
};

export default Service;
