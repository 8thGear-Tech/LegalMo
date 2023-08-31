import React from 'react'
import {CompanyProfileForm} from '../../components/Forms/Company'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import Footer from '../../components/Footer'

function CompanyProfile() {
  return (
    <div>
      <GuestNavbar/>
      <CompanyProfileForm/>
      <Footer/>
    </div>
  )
}

export default CompanyProfile