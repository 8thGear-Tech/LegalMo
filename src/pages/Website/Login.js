import React from 'react'
import { LoginForm } from '../../components/Forms/Authenticationforms'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import Footer from '../../components/Footer'

function Login() {
  return (
    <div><GuestNavbar/>
     <div className='justify-content-center align-items-center text-align-center py-5 px-4 mb-5'>
     <LoginForm/>
     </div>
    
    </div>
  )
}

export default Login