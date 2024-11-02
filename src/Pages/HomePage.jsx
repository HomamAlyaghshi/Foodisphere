import React from 'react'
import Appbar from '../Shared/Appbar'
import Hero from '../HomePageComponents/Hero'
import Menu from '../HomePageComponents/Menu'
import About from '../HomePageComponents/About'
import Service from '../HomePageComponents/Service'
import Content from '../HomePageComponents/Content'
import Customers from '../HomePageComponents/Customers'
import LogoSlider from '../HomePageComponents/LogoSlider'
import Blog from '../HomePageComponents/Blog'
import Newsletter from '../HomePageComponents/Newsletter'
import Footer from '../Shared/Footer'



const HomePage = () => {
  return (
    <div className='h-full w-full'>
        <Appbar/>
        <Hero/>
        <Menu/>
        <About/>
        <Service />
        <Content />
        <Customers/>
        <LogoSlider/>
        <Blog/>
        <Newsletter/>
        <Footer/>
        
      
    </div>
  )
}

export default HomePage
