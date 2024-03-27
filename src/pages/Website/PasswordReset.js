import React from 'react'
import { LoginModal, ResetPasswordForm } from '../../components/Forms/Authenticationforms'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import Footer from '../../components/Footer'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authRoute from '../../services/authRoute';
import axios from 'axios';

function PasswordReset({setEmailSubmitted}) {
  const [email, setEmail] = useState('');
const {forgotPassword}= authRoute();
  const [emailError, setEmailError] = useState('');
 
const navigate = useNavigate();
const [formValid, setFormValid] = useState(false); 
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState('');
const [isSuccessful, setIsSuccessful] = useState(false);
const [showModal, setShowModal] = useState(false);

useEffect(() => {
  
  if (email.trim() !== '' ) {
    setFormValid(true);
  } else {
    setFormValid(false);
  }
}, [email]);


const handlePasswordReset = (e) => {
  e.preventDefault();

  setEmailError('');
  

  let hasError = false;

  
  if (!email) {
    setEmailError('Please enter your email address');
    hasError = true;
  }

  if (hasError) {
   
    return;
  }
  const body = {
      
    officialEmail: email,
  
  }
 
  forgotPassword(body, setLoading,setIsSuccessful, setMessage, setShowModal,setEmailSubmitted);
 
};

  return (
    
    <div><GuestNavbar/>
    <div className='justify-content-center align-items-center text-align-center py-5 px-4 mb-5 mt-lg-5'>
    <ResetPasswordForm formValid={formValid}
          email={email}
          setEmail={setEmail}
          emailError={emailError}
          setEmailError={setEmailError} 
          handlePasswordReset={handlePasswordReset}/>
    </div>
    <LoginModal 
        showModal={showModal}
        isSuccess={isSuccessful}
        closeModal={()=> setShowModal(false)}
        modalText={message}
      />
   </div>
  )
}

export default PasswordReset