import React from "react";
import Appbar from "../Shared/Appbar";
import Footer from "../Shared/Footer";
import GridPhoto from "../MenuPageComponents/GridPhoto";
import Brand from "../MenuPageComponents/Brand";
import Newsletter from "../Shared/Newsletter";
import HeaderOfPage from "../Shared/HeaderOfPage";

const MenuPage = () => {
  return (
    <div className="w-full h-full">
      <Appbar />
      <HeaderOfPage
        h1={"Our Menu 😋"}
        p={
          <p>
            Discover a selection of dishes crafted to delight your taste buds.
            <br /> From light bites to hearty meals, our menu offers something
            for everyone.
          </p>
        }
      />
      <GridPhoto />
      <Brand />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default MenuPage;
