import React from "react";
import CardMenu from "./CardMenu";
import { FaCoffee,FaUtensils ,FaCookie   } from 'react-icons/fa';

const Menu = () => {
  return (
    <div className="w-full h-full grid justify-center items-center  my-12 ">
      <h1 className="sm:text-[38px] md:text-[48px] text-[28px] font-playfair italic text-center text-themeColor ">
        Browser our Menu
      </h1>
      <div className="sm:flex grid justify-center items-center mt-12 gap-12">
      <CardMenu
        icon={<FaCoffee className='w-12 h-12' />} 
        title="Breakfast"
        description= {<>"In the new era of technology we <br/> look in the future with certainty <br/> and pride for our life" </>}
      />
      <CardMenu
        icon={<FaUtensils  className='w-12 h-12' />} 
        title="Main Dishes"
        description= {<>"In the new era of technology we <br/> look in the future with certainty <br/> and pride for our life" </>}
      />
      <CardMenu
        icon={<FaCookie   className='w-12 h-12' />} 
        title="Desserts"
        description= {<>"In the new era of technology we <br/> look in the future with certainty <br/> and pride for our life" </>}
      />
      </div>
    </div>
  );
};

export default Menu;
