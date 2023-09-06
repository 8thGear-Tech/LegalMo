import React from 'react'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import Footer from '../../components/Footer'
import { ResetPasswordbtn } from '../../components/Buttons/Authenticationbtns'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function NewPassword() {
  const [password, setPassword] = useState('');

  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [confirmPasswordError, setConfirmPasswordError] = useState('');
 
const navigate = useNavigate();
const [showPassword, setShowPassword] = useState(false);
const handleTogglePassword = () => {
  setShowPassword(!showPassword);
};

const handlePasswordReset = (e) => {
  e.preventDefault();

  setConfirmPasswordError('');
  setPasswordError('');

  let hasError = false;

  
  if (!confirmPassword) {
    setConfirmPasswordError('Please confirm your password');
    hasError = true;
  }

 
  if (!password) {
    setPasswordError('Please enter your password');
    hasError = true;
  }

  if (hasError) {
   
    return;
  }

  
  navigate('/login');
};

  return (
    <div><GuestNavbar/>
    <div className='justify-content-center align-items-center text-align-center py-5 px-4 mb-5'>  
    <div className='login-card mt-lg-5'>
    <div className='card p-5  m-auto'>
     
        
        <form onSubmit={handlePasswordReset}>
          
            <div className="mb-5" style={{position:'relative'}}>
  <label htmlFor="password" className="form-label" >Password</label>
  <div className="input-group">
  <input
type="password"
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
<div className="mb-4" style={{position:'relative'}}>
  <label htmlFor="confirmPassword" className="form-label" > Confirm password</label>
  <div className="input-group">
  <input
type="password"
className="form-control py-2"
value={confirmPassword}
onChange={(event) => setConfirmPassword(event.target.value)}
/>  <span
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
{confirmPasswordError && <div className="text-danger">{confirmPasswordError}</div>}
 
</div>
       <div className='text-center mt-5'>
        <ResetPasswordbtn text='Change Password'/>
        </div>
        </form>
       
    </div>
    </div>
  
    </div>
    
    
    </div>
  
  )
}

export default NewPassword