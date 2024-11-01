import React from 'react'
import ButtonTheme from '../Components/ButtonTheme'

const Hero = () => {
  return (
<div className='w-full h-screen relative  '>
  <img alt='hero' src='/images/HomePage/hero.png' className='w-full h-full object-cover' />
  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   font-playfair italic text-center text-themeColor  ' >
  <h1 className='sm:text-[48px] md:text-[68px] text-[40px] '>Best Food for <br/> your taste</h1>
  <p className='sm:text-[18px] md:text-[17px] text-[16px] '>Discover delectable cuisine and unforgettable moments <br/> in our welcoming, culinary haven.</p>
  <div className='flex mt-6 gap-2 w-[340px] '>
    <ButtonTheme variant={'contained'} bgcolor='error' >Book A Table</ButtonTheme>
    <ButtonTheme variant={'outlined'} color={'#474747'}>Explore A Menu</ButtonTheme>
  </div>
  </div>
</div>
  )
}

export default Hero
