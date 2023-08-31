import React from 'react'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import Footer from '../../components/Footer'
import HeroImage from '../../assets/images/homeheroimage.png'

function About() {
  return (<>
    <GuestNavbar/>
    <div className='footer-hero'>
      <img src={HeroImage} alt="Hero" />
    </div>
    <Footer/>
    </>
  )
}

export default About