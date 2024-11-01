import React from 'react'
import Appbar from '../Shared/Appbar'
import Hero from '../HomePageComponents/Hero'
import Menu from '../HomePageComponents/Menu'
import About from '../HomePageComponents/About'


const HomePage = () => {
  return (
    <div>
        <Appbar/>
        <Hero/>
        <Menu/>
        <About/>
        
      
    </div>
  )
}

export default HomePage
