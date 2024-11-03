import React from "react";
import { FaCartArrowDown, FaClock, FaStar } from "react-icons/fa";
const Content = () => {
  return (
    <div className="w-full h-full sm:flex grid justify-center items-center">
      <div className=" my-24 flex">
        <div className="grid sm:grid-cols-12 w-full h-full gap-4 ">
          <div className="hidden sm:grid sm:col-span-8 bg-slate-200">
            <img alt="content 1" src="/images/HomePage/content1.png" className="h-full w-full" />
          </div>
          <div className=" hidden sm:grid sm:col-span-4  gap-6">
            <div>
              <img
                alt="content 2"
                src="/images/HomePage/content2.png"
                className="w-full h-full"
              />
            </div>
            <div>
              <img
                alt="content 3"
                src="/images/HomePage/content3.png"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="   grid font-playfair">
          <div className=" my-20">
            <div className="text-5xl whitespace-nowrap">
              Fastest Food
              <br /> Delivery in city
            </div>
            <p className="mt-8 text-xl">
              our disgn allow you to order and choose any dishes you want and
              pich it in the cart to enjoy it
            </p>
            <div className="grid grid-cols-1 gap-4 p-4 mt-10">
              <div className="flex items-center">
                <FaClock className="text-themeRed text-xl mr-2 " />
                <span>Delivery within 30 minutes</span>
              </div>
              <div className="flex items-center">
                <FaStar className="text-themeRed text-xl mr-2" />
                <span>Best Offer & Price</span>
              </div>
              <div className="flex items-center">
                <FaCartArrowDown className="text-themeRed text-xl mr-2" />
                <span>Online Service Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
