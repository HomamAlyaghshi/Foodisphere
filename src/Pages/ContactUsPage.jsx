import React from 'react'
import Appbar from '../Shared/Appbar'
import Footer from '../Shared/Footer'
import HeaderOfPage from '../Shared/HeaderOfPage'
import InputForm2 from '../Components/InputForm2'
import InfoSection from './ContactUsPageComponents/InfoSection'

const ContactUsPage = () => {
  return (
    <div>
        <Appbar/>
        <HeaderOfPage h1={'Contact Us'} p={<p>If you have any questions or feedback, feel free to reach out to us.<br/> 
            We're here to help and look forward to hearing from you!</p>}/>
            <InputForm2/>
            <InfoSection/>
        <Footer/>
      
    </div>
  )
}

export default ContactUsPage
