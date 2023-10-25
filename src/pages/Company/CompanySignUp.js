import React, { useState, useEffect } from 'react'
import { SignUpForm, LoginModal } from '../../components/Forms/Authenticationforms'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import Footer from '../../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import authRoute from '../../services/authRoute'



const CompanySignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [showModal, setShowModal] = useState(false);
   const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [userData, setUserData] = useState({});
  const {signupAsCompany} = authRoute();
  const [formDataStep1, setFormDataStep1] = useState({})
  const [formDataStep2, setFormDataStep2] = useState({})

  const companyFields = [
    { name: 'companyName', label: 'Company Name', type: 'text', required: true },
    { name: 'contactName', label: 'Contact Name', type: 'text', required: true },
    { name: 'phoneNumber', label: 'Contact Phone Number', type:'number', required: true },
    { name: 'email', label: 'Official Email Address', type: 'email', required: true },
    { name: 'address', label: 'Office Address', type: 'text', required: true },
  ];
  
  const nextCompanyFields = [
    { name: 'cacNumber', label: 'CAC Registration Number', type: 'text', required: true },
    { name: 'industry', label: 'Industry ', type: 'text', required: true },
    { name: 'password', label: 'Password', type: 'password', required: true },
    { name: 'confirmPassword', label: 'Confirm password', type: 'password', required: true },
  ];
  

  const handleNextCompanySignUp = (formData) => {
    setFormDataStep1(formData)
    setStep(2);
  };
  

  const handleCompanySignup = (formData) => {
    setFormDataStep2(formData)
    
    const body = {
      companyName: formData.companyName,
 contactName: formData.contactName,
 phoneNumber: formData.phoneNumber,
 officialEmail: formData.email,
 officeAddress: formData.address,
 cac: formData.cacNumber,
 industry: formData.industry,
 password: formData.password,
 passwordConfirm: formData.confirmPassword,
    }


    
    signupAsCompany(body, setMessage, setLoading, setIsSuccessful, setUserData, setShowModal)
  };

  return (
    <>
      <GuestNavbar />
      <div className='justify-content-center align-items-center text-align-center py-5 px-4 mb-5'>
        {step === 1 && (
          <SignUpForm
            formTitle='Sign up as a Company'
            fields={companyFields}
            onSubmit={handleNextCompanySignUp}
            submitButtonLabel='Next'
          />
        )}
        {step === 2 && (
          <SignUpForm
            formTitle='Sign up as a Company'
            fields={nextCompanyFields}
            initialData={formDataStep1}
            onSubmit={handleCompanySignup}
            submitButtonLabel='Sign up'
          />
        )}
       
      </div>
      <LoginModal
        showModal={showModal}
        isSuccess={isSuccessful}
        closeModal={() => setShowModal(false)}
        modalText={message}
        subText='Kindly click on the link sent to your email address for verification'
      />
    </>
  );
};

export default CompanySignUp;

