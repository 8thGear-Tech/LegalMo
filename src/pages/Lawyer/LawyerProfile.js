import React from 'react'
import { LawyerProfileForm } from '../../components/Forms/Lawyer'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import Footer from '../../components/Footer'

function LawyerProfile() {
  return (
    <div>
      <GuestNavbar/>
      <LawyerProfileForm/>
      <Footer/>
    </div>
  )
}

export default LawyerProfile