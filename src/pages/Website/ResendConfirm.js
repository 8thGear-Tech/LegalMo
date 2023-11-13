import React from 'react'
import { LoginModal, ResetPasswordForm } from '../../components/Forms/Authenticationforms'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import Footer from '../../components/Footer'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authRoute from '../../services/authRoute';
import axios from 'axios';
import { ResetPasswordbtn } from '../../components/Buttons/Authenticationbtns';

function ResendConfirm() {
  const [email, setEmail] = useState('');

  const [emailError, setEmailError] = useState('');
 
const navigate = useNavigate();
const [formValid, setFormValid] = useState(false); 
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState('');
const [isSuccessful, setIsSuccessful] = useState(false);
const [showModal, setShowModal] = useState(false);
const {resendConfirmationMail} = authRoute()
useEffect(() => {
  
  if (email.trim() !== '' ) {
    setFormValid(true);
  } else {
    setFormValid(false);
  }
}, [email]);


const handleResendConfirm = (e) => {
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
 
 resendConfirmationMail(body, setLoading,setIsSuccessful, setMessage, setShowModal);
 
 
};

  return (
    
    <div><GuestNavbar/>
    <div className='justify-content-center align-items-center text-align-center py-5 px-4 mb-5 mt-lg-5'>
    <div className='login-card '>
    <div className='card p-5  m-auto'>
    <form onSubmit={handleResendConfirm}>
          
          <div className="mb-4" >
<label htmlFor="email" className="form-label" >Email</label>
<input
type="email"
className="form-control py-2"
value={email}
onChange={(event) => setEmail(event.target.value)}
/>
{emailError && <div className="text-danger">{emailError}</div>}

</div>
     <div className='text-center mt-5'>
      <ResetPasswordbtn text='Resend Verification Email' formValid={formValid}/>
      </div>
      </form>
    </div>
    </div>
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

export default ResendConfirm