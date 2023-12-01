import React from 'react'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import Footer from '../../components/Footer'
import { ResetPasswordbtn } from '../../components/Buttons/Authenticationbtns'
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { LoginModal } from '../../components/Forms/Authenticationforms';
import authRoute from '../../services/authRoute';

function NewPassword() {
  const [password, setPassword] = useState('');
  const { token, userEmail } = useParams();
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [loading, setLoading] = useState(false);
const [message, setMessage] = useState('');
const [isSuccessful, setIsSuccessful] = useState(false);
const [showModal, setShowModal] = useState(false);
const navigate = useNavigate();
const [showPassword, setShowPassword] = useState(false);
const {newPassword} = authRoute();

const [formValid, setFormValid] = useState(false); 

useEffect(() => {
  
  if (password.trim() !== '' && confirmPassword.trim() !== '') {
   
    if (password === confirmPassword && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(password)) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  } else {
    setFormValid(false);
  }
}, [password, confirmPassword]);


const handleTogglePassword = () => {
  setShowPassword(!showPassword);
};


const handlePasswordReset = async(e, token, userEmail) => {
  e.preventDefault();
  console.log('Token:', token);
  console.log('User Email:', userEmail);

  setConfirmPasswordError('');
  setPasswordError('');

  let hasError = false;

  if (!password) {
    setPasswordError('Please enter your password');
    hasError = true;
  } else if (
    !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(password)
  ) {
    setPasswordError(
      'Password must contain at least 8 characters with at least one number, one lowercase letter, one uppercase letter, and one special character.'
    );
    hasError = true;
  }

  if (!confirmPassword) {
    setConfirmPasswordError('Please confirm your password');
    hasError = true;
  } else if (password !== confirmPassword) {
    setConfirmPasswordError('Passwords do not match');
    hasError = true;
  }

  if (hasError) {
    return;
  }

  const body={
    password: password,
 passwordConfirm: confirmPassword,
  }

  newPassword(body, setLoading,setIsSuccessful, setMessage, setShowModal, token,userEmail);
  
 
};


  return (
    <div><GuestNavbar/>
    <div className='justify-content-center align-items-center text-align-center py-5 px-4 mb-5'>  
    <div className='login-card mt-lg-5'>
    <div className='card p-5  m-auto'>
     
        
        <form onSubmit={(e) => handlePasswordReset(e, token, userEmail)}>
          
            <div className="mb-5" >
  <label htmlFor="password" className="form-label" >Password</label>
  <div className="input-group">
  <input
        type={showPassword ? 'text' : 'password'} 
className="form-control py-2"
value={password}
onChange={(event) => setPassword(event.target.value)}
/>  
<span
                    className="input-group-text"
                    onClick={handleTogglePassword}
                    style={{ cursor: 'pointer', background: 'white' }}
                  >
                    {showPassword ? (
                      <i className="bi bi-eye-slash"></i> 
                    ) : (
                      <i className="bi bi-eye"></i>
                    )}
                  </span></div>
{passwordError && <div className="text-danger">{passwordError}</div>}
 
</div>
<div className="mb-4" >
  <label htmlFor="confirmPassword" className="form-label">
    Confirm password
  </label>
  <div className="input-group">
    <input
      type={showPassword ? 'text' : 'password'}
      className="form-control py-2"
      value={confirmPassword}
      onChange={(event) => setConfirmPassword(event.target.value)}
    />
    <span
      className="input-group-text"
      onClick={handleTogglePassword}
      style={{ cursor: 'pointer', background: 'white' }}
    >
      {showPassword ? (
        <i className="bi bi-eye-slash"></i>
      ) : (
        <i className="bi bi-eye"></i>
      )}
    </span>
  </div>
  {confirmPasswordError && <div className="text-danger">{confirmPasswordError}</div>}
</div>

       <div className='text-center mt-5'>
        <ResetPasswordbtn text='Change Password' formValid={formValid}/>
        </div>
        </form>
       
    </div>
    </div>
  
    </div>
    
    <LoginModal   showModal={showModal}
      isSuccess={isSuccessful}
        closeModal={()=> setShowModal(false)}
        modalText={message}/>
    </div>
  
  )
}

export default NewPassword