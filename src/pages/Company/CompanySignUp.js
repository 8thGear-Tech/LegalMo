import React, { useState } from 'react'
import { SignUpForm, LoginModal } from '../../components/Forms/Authenticationforms'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import Footer from '../../components/Footer'
import { Link, useNavigate } from 'react-router-dom'

 export function CompanySignUp() {
  const navigate = useNavigate();

  const handleNextCompanySignUp = (formData) => {
    
   
    navigate('/signup/nextcompany'); 
  };

  const companyFields = [
    { name: 'companyName', label: 'Company Name', type: 'text', required: true },
    { name: 'contactName', label: 'Contact Name', type: 'text', required: true },
    { name: 'phoneNumber', label: 'Contact Phone Number', type:'number', required: true },
    { name: 'email', label: 'Official Email Address', type: 'email', required: true },
    { name: 'address', label: 'Office Address', type: 'text', required: true },
  ];

  

  return (
    <>
    <GuestNavbar/>
    <div className='justify-content-center align-items-center text-align-center py-5 px-4 mb-5'>
    <SignUpForm formTitle="Sign up as a Company" fields={companyFields} onSubmit={handleNextCompanySignUp} submitButtonLabel="Next" />
    </div>
  
    </>
    
    
  );
}

export function NextCompanySignUp() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
 
  const handleCompanySignup = (formData) => {
    setShowModal(true);
    setSuccessMessage(true);
    setTimeout(() => {
      navigate('/company/dashboard');
    }, 3000);
    // localStorage.setItem('isLoggedIn', 'true');
  };

  const nextCompanyFields = [
    { name: 'registrationNumber', label: 'CAC Registration Number', type: 'text', required: true },
    { name: 'industry', label: 'Industry ', type: 'text', required: true },
    { name: 'password', label: 'Password', type: 'password', required: true },
    { name: 'confirmPassword', label: 'Confirm password', type: 'password', required: true },
  ];
  

  return (
    <>
    <GuestNavbar/>
    <div className='justify-content-center align-items-center text-align-center py-5 px-4 mb-5'>
    <SignUpForm formTitle="Sign up as a Company" fields={nextCompanyFields} onSubmit={handleCompanySignup} submitButtonLabel="Sign up" />
    </div>
    <LoginModal
        showModal={showModal}
        successMessage={successMessage}
        closeModal={closeModal}
        modalText='You have successfully created an account'
      />
    </>
    
    
  );
}