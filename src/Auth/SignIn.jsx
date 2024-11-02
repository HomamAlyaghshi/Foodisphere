import React from "react";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { TextField } from "@mui/material";
import ButtonTheme from "../Components/ButtonTheme";

const SignIn = () => {
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
              SignIn
            </h1>
            <div className="grid gap-4 w-full">
            <TextField id="outlined-basic" label="User Name Or Email" variant="outlined" required fullWidth />
            <TextField id="outlined-basic" label="Password" variant="outlined" required fullWidth/>
            <button className="text-left text-themeRed font-playfair hover:underline">Forget your password?</button>

            </div>
            <p className="font-playfair text-xl mt-6">Sign In with:</p>
            <div className="flex gap-4 justify-center items-center my-6">
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
            <ButtonTheme variant={'contained'} bgcolor={'error'} href={'/homepage'}>Sign In</ButtonTheme>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
