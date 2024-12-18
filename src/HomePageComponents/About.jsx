import React from "react";
import { FaLocationArrow, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ButtonTheme from "../Components/ButtonTheme";

const About = ({src}) => {
  return (
    <div className="flex w-full h-full bg-gray-100 sm:grid ">
      <div className="w-full h-full grid sm:flex sm:px-24 sm:py-28">
        <div className="sm:w-1/2 relative">
          <img
            alt="about"
            src={src}
            className="h-full w-full rounded-xl"
          />
          <div className="z-10 bg-themeColor rounded-xl absolute -bottom-12 sm:-right-12 m-4 py-2 px-10 text-white grid justify-center items-center text-center font-playfair">
            <h1 className=" mt-8 text-3xl">Come and visit us</h1>
            <div className="flex justify-center items-center mt-8 gap-2">
              <FaPhone />
              <h2>+963 997 831 250</h2>
            </div>
            <div className="flex justify-center items-center mt-8 gap-2">
              <MdEmail />
              <h2>homamalyaghshi@gmail.com</h2>
            </div>
            <div className="flex justify-center items-center my-8 gap-2">
              <FaLocationArrow />
              <h2>Syria-Damascus alhamra str.</h2>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 justify-center flex sm:grid items-center text-center sm:text-left font-playfair  text-themeColor ">
          <div className=" sm:w-2/3 mt-10  sm:mx-24">
            <strong className="text-[32px]">
              We provide healthy
              <br />
              food for you family.
            </strong>
            <div className="text-[16px] mt-6 mb-6  ">
              The forest was alive with whispers of ancient trees and the gentle
              rustle of leaves. Every corner turned revealed a hidden beauty, a
              place where time seemed to stand still. Nature’s secrets beckoned
              us to listen closely. The forest was alive with whispers of
              ancient trees and the gentle rustle of leaves. Every corner turned
              revealed a hidden beauty, a place where time seemed to stand
              still. Nature’s secrets beckoned us to listen closely.
            </div>
            <ButtonTheme variant={'outlined'} color={'#474747'} href={'/aboutpage'}>
                More About Us
            </ButtonTheme>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
