import React from 'react'
import Appbar from '../Shared/Appbar'
import Hero from '../HomePageComponents/Hero'
import Menu from '../HomePageComponents/Menu'
import About from '../HomePageComponents/About'
import Service from '../HomePageComponents/Service'


const HomePage = () => {
  return (
    <div>
        <Appbar/>
        <Hero/>
        <Menu/>
        <About/>
        <Service />
        
      
    </div>
  )
}

export default HomePage
