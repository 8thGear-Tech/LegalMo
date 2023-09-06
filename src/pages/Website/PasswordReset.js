import React from 'react'
import { ResetPasswordForm } from '../../components/Forms/Authenticationforms'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import Footer from '../../components/Footer'

function PasswordReset() {
  return (
    
    <div><GuestNavbar/>
    <div className='justify-content-center align-items-center text-align-center py-5 px-4 mb-5 mt-lg-5'>
    <ResetPasswordForm/>
    </div>
    
   </div>
  )
}

export default PasswordReset