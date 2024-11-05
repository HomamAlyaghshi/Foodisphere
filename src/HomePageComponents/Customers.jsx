import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Customers = () => {
  const [testimonials, setTestimonials] = useState([
    {
      text: [
        "Outstanding job and exceeded all expectations. It was a pleasure",
        "to work with them on a sizable first project and am looking",
        "forward to start the next one asap",
      ],
      author: "MICHAEL HOPKINS",
    },
    {
      text: [
        "Another amazing testimonial text here.",
        "It was a great experience working with them.",
        "Looking forward to future collaborations.",
      ],
      author: "JANE DOE",
    },
    {
      text: [
        "Outstanding job and exceeded all expectations. It was a pleasure",
        "to work with them on a sizable first project and am looking",
        "forward to start the next one asap",
      ],
      author: "MICHAEL HOPKINS",
    },
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div style={{ bottom: "10px" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    dotsClass: "slick-dots slick-dots-custom ",
  };

  return (
    <>
      <div className="flex justify-center items-center font-playfair sm:text-5xl md:text-4xl text-3xl text-center mb-10 gap-4">
        <h1 className="text-themeColor">Our Customers says </h1>
        <div className="text-themeRed">&#10084;</div>
      </div>
      <div className="relative bg-gradient-to-b from-[#474747] to-[#5c5c5c] via-[#A0A0A0] font-playfair text-xl rounded-xl mx-2">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="sm:h-64 h-72 flex items-center justify-center text-center">
              <div className="text-white mt-16">
                {testimonial.text.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
                <p className="text-xs mt-6 ">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Customers;
