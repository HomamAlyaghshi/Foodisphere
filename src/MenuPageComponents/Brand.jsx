import React from 'react'

const Brand = () => {
  return (
    <div className='flex w-full h-full bg-gray-100 py-24 mt-16 justify-around items-center'>
        <div className='grid w-1/3 font-playfair text-themeColor   justify-center items-center gap-10 mx-10'>
            <h1 className='text-4xl text-center whitespace-nowrap'>You can order through apps</h1>
            <p className='text-lg'>Enjoy the convenience of ordering your favorite dishes from the comfort of your home. With just a few taps on your smartphone, you can browse our menu.</p>

        </div>
        <div className='w-2/3 h-full grid-cols-3  justify-center items-center flex gap-8'>
        <div className='col-span-1 grid gap-4'>
  <img alt='brand 1' src='/images/MenuPage/brand1.png' className='py-4 px-6 bg-white rounded-xl w-full h-full object-cover'/>
  <img alt='brand 1' src='/images/MenuPage/brand2.png' className='py-4 px-6 bg-white rounded-xl w-full h-full object-cover'/>
  <img alt='brand 1' src='/images/MenuPage/brand3.png' className='py-4 px-6 bg-white rounded-xl w-full h-full object-cover'/>
</div>
        <div className='col-span-1 grid gap-4'>
        <img alt='brand 1' src='/images/MenuPage/brand4.png' className='py-4 px-6 bg-white rounded-xl w-full h-full object-cover'/>
        <img alt='brand 1' src='/images/MenuPage/brand5.png' className='py-4 px-6 bg-white rounded-xl w-full h-full object-cover'/>
        <img alt='brand 1' src='/images/MenuPage/brand6.png' className='py-4 px-6 bg-white rounded-xl w-full h-full object-cover'/>
        </div>
        <div className='col-span-1 grid gap-4'>
        <img alt='brand 1' src='/images/MenuPage/brand7.png' className='py-4 px-6 bg-white rounded-xl w-full h-full object-cover'/>
        <img alt='brand 1' src='/images/MenuPage/brand8.png' className='py-4 px-6 bg-white rounded-xl w-full h-full object-cover'/>
        <img alt='brand 1' src='/images/MenuPage/brand9.png' className='py-4 px-6 bg-white rounded-xl w-full h-full object-cover'/>
        </div>
        
        </div>

      
    </div>
  )
}

export default Brand
