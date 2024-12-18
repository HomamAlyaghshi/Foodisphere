import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaPhone,
  FaBars,
  FaGitlab,
  FaCartPlus,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ButtonTheme from "../Components/ButtonTheme";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

const Appbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false); // إضافة حالة جديدة لـ Cart Drawer

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const toggleCartDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setCartDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", onClick: () => setDrawerOpen(false), path:'/homepage' }, 
    { text: "About", onClick: () => setDrawerOpen(false), path:'/aboutpage' }, 
    { text: "Menu", onClick: () => setDrawerOpen(false), path:'/menupage' }, 
    { text: "Pages", onClick: () => setDrawerOpen(false), path:'/blogpage' }, 
    { text: "Contact", onClick: () => setDrawerOpen(false), path:'/contactpage' }, 
  ];

  return (
    <div className="h-[150px] font-playfair font-bold ">
      <div className="h-1/3 bg-themeColor flex justify-between items-center px-24">
        <div className="flex justify-center items-center gap-6 text-white text-[12px]">
          <div className="sm:flex hidden gap-1 justify-center items-center">
            <FaPhone />
            <div>+963 997 831 250</div>
          </div>
          <div className="hidden sm:flex justify-center items-center gap-1">
            <MdEmail />
            <div>homamalyaghshi@gmail.com</div>
          </div>
        </div>
        <div className="flex gap-1 text-[12px] text-white">
          <a href="https://www.facebook.com/hummam.yag?mibextid=kFxxJD" target="_blank" rel="noopener noreferrer">
            <button className="p-1 bg-themeColorLight rounded-full flex items-center">
              <FaFacebookF className="m-1" />
            </button>
          </a>
          <a href="https://www.instagram.com/homam_yaghshi/profilecard/?igsh=YTB4dXN2ZDV3cWE0" target="_blank" rel="noopener noreferrer">
            <button className="p-1 bg-themeColorLight rounded-full flex items-center">
              <FaInstagram className="m-1" />
            </button>
          </a>
          <a href="https://github.com/HomamAlyaghshi" target="_blank" rel="noopener noreferrer">
            <button className="p-1 bg-themeColorLight rounded-full flex items-center">
              <FaGithub className="m-1" />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/homam-alyaghshi-ab78351a6/" target="_blank" rel="noopener noreferrer">
            <button className="p-1 bg-themeColorLight rounded-full flex items-center">
              <FaLinkedinIn className="m-1" />
            </button>
          </a>
          <a href="https://gitlab.com/homamalyaghshi/" target="_blank" rel="noopener noreferrer">
            <button className="p-1 bg-themeColorLight rounded-full flex items-center">
              <FaGitlab className="m-1" />
            </button>
          </a>
        </div>
      </div>
      <div className="h-2/3   flex justify-between items-center sm:px-16">
        <div className="flex sm:gap-4 items-center justify-center ">
          <img alt="Logo" src="/images/logo.png" className="w-full h-full" />
          <Link to={"/homepage"}>
            <button className="font-playfair italic text-[36px] sm:text-[48px] text-themeColor hover:text-themeRed hover:scale-105">
              Foodisphere
            </button>
          </Link>
        </div>
        <div className="sm:hidden ">
          <IconButton onClick={toggleDrawer(true)} className="text-themeColor">
            <FaBars />
          </IconButton>
        </div>
        {/* Drawer for menu */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <List>
                {menuItems.map((item) => (
                    <ListItem button key={item.text} component={Link} to={item.path} onClick={item.onClick}>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
        {/* Cart Drawer */}
        <Drawer anchor="right" open={cartDrawerOpen} onClose={toggleCartDrawer(false)}>
          <div style={{ width: 250, padding: 20 }}>
            <h2>Your Cart</h2>
            {/* Add your cart items here */}
          </div>
        </Drawer>
        <div className="hidden sm:flex mb-3 gap-1 text-lightColor -ml-20 ">
          <Link to={"/homepage"}>
            <button className="bg-themeColor py-1 px-4 mb-1 rounded-full hover:bg-themeColorLight transition-all duration-500 hover:scale-105 hover:rotate-12">
              Home
            </button>
          </Link>
          <Link to={"/aboutpage"}>
            <button className="bg-themeColor py-1 px-4 mb-1 rounded-full hover:bg-themeColorLight transition-all duration-500 hover:scale-105 hover:rotate-12">
              About
            </button>
          </Link>
          <Link to={"/menupage"}>
            <button className="bg-themeColor py-1 px-4 mb-1 rounded-full hover:bg-themeColorLight transition-all duration-500 hover:scale-105 hover:rotate-12">
              Menu
            </button>
          </Link>
          <Link to={"/blogpage"}>
            <button className="bg-themeColor py-1 px-4 mb-1 rounded-full hover:bg-themeColorLight transition-all duration-500 hover:scale-105 hover:rotate-12">
              Pages
            </button>
          </Link>
          <Link to={"/contactpage"}>
            <button className="bg-themeColor py-1 px-4 mb-1 rounded-full hover:bg-themeColorLight transition-all duration-500 hover:scale-105 hover:rotate-12">
              Contact
            </button>
          </Link>
        </div>
        <div className="hidden sm:flex mb-1 gap-2">
          <button className="hover:text-themeRed text-themeColorLight text-[28px] p-2 border-[2px] rounded-full hover:bg-gray-100 border-themeColor" onClick={toggleCartDrawer(true)}>
            <FaCartPlus/>
          </button>
          <ButtonTheme variant="outlined" color={"#474747"} href={"/booktable"}>
            Book A Table
          </ButtonTheme>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
