import React from 'react'
import Appbar from '../Shared/Appbar'
import Footer from '../Shared/Footer'
import HeaderOfPage from '../MenuPageComponents/HeaderOfPage'
import GridPhoto from '../MenuPageComponents/GridPhoto'
import Brand from '../MenuPageComponents/Brand'
import Newsletter from '../Shared/Newsletter'

const MenuPage = () => {
  return (
    <div className='w-full h-full'>
        <Appbar/>
        <HeaderOfPage/>
        <GridPhoto/>
        <Brand/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default MenuPage
