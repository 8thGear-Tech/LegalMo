import React, { useState, useEffect } from 'react'
import { LoginForm, LoginModal } from '../../components/Forms/Authenticationforms'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import Footer from '../../components/Footer'
import loginRoute from '../../services/authRoute'
import { useNavigate } from 'react-router-dom'
import authRoute from '../../services/authRoute'

function Login() {

  const {login} = authRoute();
  
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState({});
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
   

  useEffect(() => {
   
    if (email.trim() !== '' && password.trim() !== '') {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [email, password]);

  const navigate = useNavigate();
  const [showSignUpButtons, setShowSignUpButtons] = useState(false);

  const toggleSignUpButtons = () => {
    setShowSignUpButtons(!showSignUpButtons);
  };


 

  const handleLogIn = (e) => {
   e.preventDefault();
   setEmailError('');
    setPasswordError('');
 
    let hasError = false;
 
    if (!email) {
      setEmailError('Please enter your email address');
      hasError = true;
    }
 
    if (!password) {
      setPasswordError('Please enter your password');
      hasError = true;
    }
 
    if (hasError) {
      return;
    }

    const body = {
      
      officialEmail: email,
     password: password,
    }
    login(body, setMessage, setLoading, setIsSuccessful, setUserData, setShowModal)

  
    
     
   
  }
    
  if (loading){
    return <div className='justify-content-center align-items-center text-center' style={{paddingTop:'300px'}}>
   <div className="spinner-border text-secondary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
        </div>; 
  }
 
  return (
    <div><GuestNavbar/>
     <div className='justify-content-center align-items-center text-align-center py-5 px-4 mb-5'>
     <LoginForm
          setShowModal={setShowModal}
      
          modalText='Welcome back'
          handleLogIn= {handleLogIn}
          formValid={formValid}
          password={password}
          email={email}
          setEmail={setEmail}
          setPassword={setPassword}
          passwordError={passwordError}
          setPasswordError={setPasswordError}
          emailError={emailError}
          setEmailError={setEmailError}
          showSignUpButtons={showSignUpButtons}
          setShowSignUpButtons={setShowSignUpButtons}
          toggleSignUpButtons={toggleSignUpButtons}
        />
     </div>
     <LoginModal
        showModal={showModal}
       isSuccess={isSuccessful}
        closeModal={()=> setShowModal(false)}
        modalText={message}
        showResendConfirmation={message === 'Please confirm your email address to log in.'} 
        onResendConfirmation={() => {
          
          navigate('/resend-confirm');
        }}
      />


    </div>
  )
}

export default Login