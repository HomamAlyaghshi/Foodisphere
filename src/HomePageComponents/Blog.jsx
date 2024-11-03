import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import ButtonTheme from "../Components/ButtonTheme";

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([
    {
      image: "/images/HomePage/blog1.png",
      title:
        "Secrets to Creating Irresistible Desserts: Pro Tips for Sweet Success",
      readMoreText: "Read More",
    },
    {
      image: "/images/HomePage/blog2.png",
      title: "Top Chef Secrets for the Perfect Burger: Tips You Need to Know!",
      readMoreText: "Read More",
    },
    {
      image: "/images/HomePage/blog3.png",
      title: "Crispy Perfection: Tips and Tricks for the Best Homemade Fries",
      readMoreText: "Read More",
    },
  ]);

  return (
    <div className=" h-auto py-[24px] md:py-[48px] grid gap-[24px] justify-center items-center text-themeColor bg-gray-100">
      <div className=" md:w-[1121px] h-auto md:h-[88px] flex flex-col md:flex-row justify-between items-center px-4 md:px-0">
        <div className="font-playfair text-[28px] md:text-[40px] font-medium leading-[32px] md:leading-[44px] tracking-[-0.4px] text-left">
          Articles & Blog
        </div>
        <div className="flex border-b-[1px] border-blackButton items-center mt-4 md:mt-0">
          <Link to={"/blogpage"}>
            <ButtonTheme
              variant={"contained"}
              width={"200px"}
              bgcolor={"error"}
            >
              More Articles
            </ButtonTheme>
          </Link>
        </div>
      </div>
      <div className="h-auto w-full md:w-[1121px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px] px-4 md:px-0  ">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col gap-[8px] border-themeColor border-[1px] rounded-xl  "
          >
            <img
              alt={"a"}
              src={post.image}
              className="w-full h-[250px] md:w-[357px] md:h-[325px] object-cover rounded-xl "
            />
            <p className="font-poppins text-[18px] mt-6 md:text-[20px] font-medium leading-[24px] md:leading-[28px] text-center">
              {post.title}
            </p>
            <div className="flex  mt-12 mb-4 border-blackButton items-center transition-all duration-300 hover:scale-105 hover:bg-themeColorLight rounded-xl hover:text-white ">
              <ButtonTheme variant={"filled"}> {post.readMoreText}</ButtonTheme>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
