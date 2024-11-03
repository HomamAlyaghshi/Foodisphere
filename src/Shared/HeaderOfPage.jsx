import React from "react";

const HeaderOfPage = ({h1,p}) => {
  return (
    <div className="font-playfair text-themeColor text-center my-6 gap-6 grid">
      <h1 className="text-6xl">{h1}</h1>
      <p className="text-2xl">
        {p}

      </p>
    </div>
  );
};

export default HeaderOfPage;
