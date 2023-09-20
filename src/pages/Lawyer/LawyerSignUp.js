import React, { useState } from 'react'
import { SignUpForm, LoginModal } from '../../components/Forms/Authenticationforms'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import Footer from '../../components/Footer'
import { Link, useNavigate } from 'react-router-dom'

 export function LawyerSignUp() {
  const navigate = useNavigate();
  const handleNextLawyerSignUp = (formData) => {
  
    navigate('/signup/nextlawyer'); 
  };

  const lawyerFields = [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'phoneNumber', label: 'Phone Number', type: 'number', required: true },
    { name: 'email', label: 'Official Email Address', type: 'email', required: true },
    { name: 'firmName', label: 'Name of Firm', type: 'text', required: true },
    { name: 'address', label: 'Address of Law Firm', type: 'text', required: true },
  ];

  return (
    <>
    <GuestNavbar/>
    <div className='justify-content-center align-items-center text-align-center py-5 px-4 mb-5'>
    <SignUpForm formTitle="Sign up as a Lawyer" fields={lawyerFields} onSubmit={handleNextLawyerSignUp} submitButtonLabel="Next" />
    </div>
   
    </>
   
    
  );
}

export function NextLawyerSignUp() {
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
 
  const navigate = useNavigate();
  const handleLawyerSignUp = (formData) => {
    setShowModal(true);
    setSuccessMessage(true);
    setTimeout(() => {
      navigate('/lawyer/dashboard');
    }, 3000);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const nextLawyerFields = [
    { name: 'enrollmentNumber', label: 'Supreme Court Enrollment Number (SCN)', type: 'text', required: true },
    { name: 'accreditationNumber', label: 'CAC Accreditation Number', type: 'text', required: true },
 
    { name: 'password', label: 'Password', type: 'password', required: true },
    { name: 'confirmPassword', label: 'Confirm password', type: 'password', required: true },
    { name: 'practice', label: 'Area of Practice ', type: 'text', required: true },
  ];

  return (
    <>
    <GuestNavbar/>
    <div className='justify-content-center align-items-center text-align-center py-5 px-4 mb-5'>
    <SignUpForm formTitle="Sign up as a Lawyer" fields={nextLawyerFields} onSubmit={handleLawyerSignUp} submitButtonLabel="Sign up" />
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
