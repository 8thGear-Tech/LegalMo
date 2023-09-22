import React from 'react'
import { LawyerProfileForm } from '../../components/Forms/Lawyer'
import UserNavbar from '../../components/Navbar/UserNavbar'
import Footer from '../../components/Footer'

function LawyerProfile() {
  return (
    <div>
      <UserNavbar/>
      <LawyerProfileForm/>
      <Footer/>
    </div>
  )
}

export default LawyerProfile