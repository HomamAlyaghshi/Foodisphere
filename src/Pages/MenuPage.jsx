import React from 'react'
import Appbar from '../Shared/Appbar'
import Footer from '../Shared/Footer'
import HeaderOfPage from '../MenuPageComponents/HeaderOfPage'
import GridPhoto from '../MenuPageComponents/GridPhoto'

const MenuPage = () => {
  return (
    <div className='w-full h-full'>
        <Appbar/>
        <HeaderOfPage/>
        <GridPhoto/>
        <Footer/>
    </div>
  )
}

export default MenuPage
