import React from 'react';
import { Link } from 'react-router-dom';

const CardMenu = ({ icon, title, description }) => {
  return (
    <Link to={'/menupage'}>
    <button>
          <div className='grid border-[2px] shadow-2xl rounded-xl border-themeColorLight justify-center text-center items-center text-themeColor font-serif px-8 py-12 hover:bg-gray-100 '>
      <div className='flex flex-col items-center -mt-6'> 
        <div className='bg-slate-200 rounded-full border p-4'>
          {icon} 
        </div>

        <div className='mt-8'><strong>{title}</strong></div>
        <div className='mt-8'>{description}</div> 
        <button className='mt-6 text-red-500 transition-all duration-300 hover:text-red-400 hover:scale-105 '>Explore Menu</button>
      </div>
    </div>
    </button>
    </Link>

  );
}

export default CardMenu;
