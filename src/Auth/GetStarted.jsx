import React from "react";
import ButtonTheme from "../Components/ButtonTheme";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";

const GetStarted = () => {
  return (
    <div className="">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/images/cover3.png)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-overlay bg-opacity-60 ">
            <img alt="logo" src="/images/logo.png" className="m-12 w-28 h-28 rounded-full" />
        </div>
        <div className="hero-content text-center bg-white opacity-90 rounded-lg px-10 py-20 text-themeColor">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold font-playfair italic">
              Welcome to Foodisphere
            </h1>
            <p className="mb-5 text-2xl font-bold font-playfair">
              Explore a world of culinary delights where every dish tells a
              story and every flavor ignites your senses.
            </p>
            <div className="flex gap-4">
              <ButtonTheme variant={"contained"} bgcolor={'error'} href={'/signin'}>LogIn</ButtonTheme>
              <ButtonTheme variant={"outlined"} bgcolor={'error'} href={'/signup'}>SignUp</ButtonTheme>
            </div>
            <p className="font-playfair text-xl mt-6">Continue with:</p>
            <div className="flex gap-4 justify-center items-center mt-6">
              <div className="grid grid-flow-col gap-8 text-themeRed">
                <button>
                  <FaFacebook icon={FaFacebook} size="32px" />
                </button>
                <button>
                  <FaGoogle icon={FaGoogle} size="32px" />
                </button>
                <button>
                  <FaLinkedin icon={FaLinkedin} size="32px" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
