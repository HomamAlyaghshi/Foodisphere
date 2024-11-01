import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub, FaPhone, FaBars } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import ButtonTheme from '../Components/ButtonTheme';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';

const Appbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', onClick: () => setDrawerOpen(false) },
    { text: 'About', onClick: () => setDrawerOpen(false) },
    { text: 'Menu', onClick: () => setDrawerOpen(false) },
    { text: 'Pages', onClick: () => setDrawerOpen(false) },
    { text: 'Contact', onClick: () => setDrawerOpen(false) },
  ];

  return (
    <div className='h-[150px]'>
      <div className='h-1/3 bg-themeColor flex justify-between items-center px-24'>
        <div className='flex justify-center items-center gap-6 text-white text-[12px]'>
          <div className='flex gap-1 justify-center items-center'>
            <FaPhone />
            <div>+963 997 831 250</div>
          </div>
          <div className='hidden sm:flex justify-center items-center gap-1'>
            <MdEmail />
            <div>homamalyaghshi@gmail.com</div>
          </div>
        </div>
        <div className='flex gap-1 text-[12px] text-white'>
          <button className='p-1 bg-themeColorLight rounded-full flex items-center'>
            <FaFacebookF className='m-1' />
          </button>
          <button className='p-1 bg-themeColorLight rounded-full flex items-center'>
            <FaInstagram className='m-1' />
          </button>
          <button className='p-1 bg-themeColorLight rounded-full flex items-center'>
            <FaGithub className='m-1' />
          </button>
          <button className='p-1 bg-themeColorLight rounded-full flex items-center'>
            <FaLinkedinIn className='m-1' />
          </button>
        </div>
      </div>
      <div className='h-2/3 bg-lightColor flex justify-between items-end px-16'>
        <div className='flex gap-4'>
          <img alt='Logo' src='/images/logo.png' className='w-full h-full' />
          <h1 className='font-playfair italic text-[48px] text-themeColor'>Foodisphere</h1>
        </div>
        {/* أيقونة مينيو برغر لأحجام الجوال */}
        <div className='sm:hidden '>
          <IconButton onClick={toggleDrawer(true)} className='text-themeColor'>
            <FaBars />
          </IconButton>
        </div>
        {/* Drawer */}
        <Drawer
          anchor='right'
          open={drawerOpen}
          onClose={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.text} onClick={item.onClick}>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        {/* أزرار القائمةd الأحجام الكبيرة */}
        <div className='hidden sm:flex mb-3 gap-1 text-lightColor -ml-20 '>
          <button className='bg-themeColor py-1 px-2 rounded-full hover:bg-themeColorLight transition-all duration-500 hover:scale-105 hover:rotate-12'>Home</button>
          <button className='bg-themeColor py-1 px-2 rounded-full hover:bg-themeColorLight transition-all duration-500 hover:scale-105 hover:rotate-12'>About</button>
          <button className='bg-themeColor py-1 px-2 rounded-full hover:bg-themeColorLight transition-all duration-500 hover:scale-105 hover:rotate-12'>Menu</button>
          <button className='bg-themeColor py-1 px-2 rounded-full hover:bg-themeColorLight transition-all duration-500 hover:scale-105 hover:rotate-12'>Pages</button>
          <button className='bg-themeColor py-1 px-2 rounded-full hover:bg-themeColorLight transition-all duration-500 hover:scale-105 hover:rotate-12'>Contact</button>
        </div>
        <div className='hidden sm:flex mb-1'>
          <ButtonTheme variant="outlined" color={'#474747'}>
            Book A Table
          </ButtonTheme>
        </div>
      </div>   
    </div>
  );
};

export default Appbar;
