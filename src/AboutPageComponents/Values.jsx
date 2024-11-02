import React, { useState } from "react";
import { FaLock, FaMoneyCheck, FaPhone, FaShippingFast } from "react-icons/fa";

const Values = () => {
  const [valueItems] = useState([
    {
      title: "Free Shipping",
      subtitle: "Order above $200",
      shape: <FaShippingFast />,
    },
    {
      title: "Money-back",
      subtitle: "30 days guarantee",
      shape: <FaMoneyCheck />,
    },
    {
      title: "Secure Payments",
      subtitle: "Secured by Stripe",
      shape: <FaLock />,
    },
    {
      title: "24/7 Support",
      subtitle: "Phone and Email support",
      shape: <FaPhone />,
    },
  ]);

  return (
    <div className="w-full max-w-[1440px] py-[48px] px-[16px] flex flex-wrap items-center justify-center gap-[48px] text-themeColor  font-bold ">
      {valueItems.map((item, index) => (
        <div
          key={index}
          className="w-full max-w-[262px] h-auto p-[24px] flex flex-col items-center  text-center"
        >
          <div className="text-[40px] my-4 text-themeRed"> {item.shape}</div>

          <div className="w-full">
            <p className="font-playfair italic text-2xl mb-4 font-medium leading-[28px] ">
              {item.title}
            </p>
            <p className="font-serif  text-lg font-normal leading-[24px]">

              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Values;
