import React, { useState } from 'react'
import { LoginForm, LoginModal } from '../../components/Forms/Authenticationforms'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import Footer from '../../components/Footer'

function Login() {
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
 
  return (
    <div><GuestNavbar/>
     <div className='justify-content-center align-items-center text-align-center py-5 px-4 mb-5'>
     <LoginForm
          setShowModal={setShowModal}
          setSuccessMessage={setSuccessMessage}
          modalText='Welcome back'
        />
     </div>
     <LoginModal
        showModal={showModal}
        successMessage={successMessage}
        closeModal={closeModal}
        modalText='Welcome back'
      />
    </div>
  )
}

export default Login