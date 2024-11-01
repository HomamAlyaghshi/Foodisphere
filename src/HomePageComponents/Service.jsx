import React from 'react'
import CardService from './CardService'

const Service = () => {
  return (
    <div className='w-full'>
        <h1 className='font-playfair text-5xl text-themeColor mx-12 mb-12'>We also offer unique<br/>sevice for your events</h1>
        <div className='flex  justify-around items-center'>
        <CardService src={'/images/HomePage/service1.png'}  title={'Caterings'} subtitle={'In the new era of technology we look in the future with certainty and pride for our life"'} />
        <CardService src={'/images/HomePage/service2.png'}  title={'Birthdays'} subtitle={'In the new era of technology we look in the future with certainty and pride for our life"'} />
        <CardService src={'/images/HomePage/service1.png'}  title={'Widdings'} subtitle={'In the new era of technology we look in the future with certainty and pride for our life"'} />
        <CardService src={'/images/HomePage/service2.png'}  title={'Events'} subtitle={'In the new era of technology we look in the future with certainty and pride for our life"'} />
        </div>


    </div>
  )
}

export default Service
