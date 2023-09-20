import React from 'react'
import {CompanyProfileForm} from '../../components/Forms/Company'
import UserNavbar from '../../components/Navbar/UserNavbar'
import Footer from '../../components/Footer'

function CompanyProfile() {
  return (
    <div>
      <UserNavbar/>
      <CompanyProfileForm/>
      <Footer/>
    </div>
  )
}

export default CompanyProfile