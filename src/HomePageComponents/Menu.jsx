import React from "react";
import CardMenu from "./CardMenu";

const Menu = () => {
  return (
    <div className="w-full h-full grid justify-center items-center bg-slate-200">
      <h1 className="sm:text-[38px] md:text-[48px] text-[28px] font-playfair italic text-center text-themeColor mt-12 ">
        Browser our Menu
      </h1>
      <div className="flex justify-center items-center mt-12">
        <CardMenu />
      </div>
    </div>
  );
};

export default Menu;
