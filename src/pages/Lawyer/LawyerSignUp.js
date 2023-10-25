import React, { useState } from 'react'
import { SignUpForm, LoginModal } from '../../components/Forms/Authenticationforms'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import Footer from '../../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import authRoute from '../../services/authRoute'


const LawyerSignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
   const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [userData, setUserData] = useState({});
  const {signupAsLawyer} = authRoute();
  const [formDataStep1, setFormDataStep1] = useState({})
  const [formDataStep2, setFormDataStep2] = useState({})


  const lawyerFields = [
    { name: 'firstName', label: 'Name', type: 'text', required: true },
    { name: 'phoneNumber', label: 'Phone Number', type: 'number', required: true },
    { name: 'email', label: 'Official Email Address', type: 'email', required: true },
    { name: 'firmName', label: 'Name of Firm', type: 'text', required: true },
    { name: 'address', label: 'Address of Law Firm', type: 'text', required: true },
  ];
  
  const nextLawyerFields = [
    { name: 'sceNumber', label: 'Supreme Court Enrollment Number (SCN)', type: 'text', required: true },
    { name: 'cacNumber', label: 'CAC Accreditation Number', type: 'text', required: true },
 
    { name: 'password', label: 'Password', type: 'password', required: true },
    { name: 'confirmPassword', label: 'Confirm password', type: 'password', required: true },
    { name: 'practice', label: 'Area of Practice ', type: 'text', required: true },
  ];

  const handleNextLawyerSignUp = (formData) => {
    setFormDataStep1(formData)
    setStep(2);
  };
  

  const handleLawyerSignup = (formData) => {
    setFormDataStep2(formData)
  
    const body = {
      name: formData.firstName,
 phoneNumber: formData.phoneNumber,
 officialEmail: formData.email,
 lawFirmName: formData.firmName,
 lawFirmAddress: formData.address,
 scn: formData.sceNumber,
 cac: formData.cacNumber,
 password: formData.password,
 passwordConfirm: formData.confirmPassword,
 areasOfPractise: [formData.practice]
    }


    
    signupAsLawyer(body, setMessage, setLoading, setIsSuccessful, setUserData, setShowModal)
  };

  return (
    <>
      <GuestNavbar />
      <div className='justify-content-center align-items-center text-align-center py-5 px-4 mb-5'>
        {step === 1 && (
          <SignUpForm
            formTitle='Sign up as a Lawyer'
            fields={lawyerFields}
            onSubmit={handleNextLawyerSignUp}
            submitButtonLabel='Next'
          />
        )}
        {step === 2 && (
          <SignUpForm
            formTitle='Sign up as a Lawyer'
            fields={nextLawyerFields}
            initialData={formDataStep1}
            onSubmit={handleLawyerSignup}
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

export default LawyerSignUp;


//  export function LawyerSignUp() {
//   const navigate = useNavigate();
//   const handleNextLawyerSignUp = (formData) => {
  
//     navigate('/signup/nextlawyer'); 
//   };

//   const lawyerFields = [
//     { name: 'firstName', label: 'Name', type: 'text', required: true },
//     { name: 'phoneNumber', label: 'Phone Number', type: 'number', required: true },
//     { name: 'email', label: 'Official Email Address', type: 'email', required: true },
//     { name: 'firmName', label: 'Name of Firm', type: 'text', required: true },
//     { name: 'address', label: 'Address of Law Firm', type: 'text', required: true },
//   ];

//   return (
//     <>
//     <GuestNavbar/>
//     <div className='justify-content-center align-items-center text-align-center py-5 px-4 mb-5'>
//     <SignUpForm formTitle="Sign up as a Lawyer" fields={lawyerFields} onSubmit={handleNextLawyerSignUp} submitButtonLabel="Next" />
//     </div>
   
//     </>
   
    
//   );
// }

// export function NextLawyerSignUp() {
//   const [showModal, setShowModal] = useState(false);
//   const [successMessage, setSuccessMessage] = useState(false);

//   const closeModal = () => {
//     setShowModal(false);
//   };
 
//   const navigate = useNavigate();
//   const handleLawyerSignUp = (formData) => {
//     setShowModal(true);
//     setSuccessMessage(true);
//     setTimeout(() => {
//       navigate('/lawyer/dashboard');
//     }, 3000);
//     // localStorage.setItem('isLoggedIn', 'true');
//   };

//   const nextLawyerFields = [
//     { name: 'enrollmentNumber', label: 'Supreme Court Enrollment Number (SCN)', type: 'text', required: true },
//     { name: 'accreditationNumber', label: 'CAC Accreditation Number', type: 'text', required: true },
 
//     { name: 'password', label: 'Password', type: 'password', required: true },
//     { name: 'confirmPassword', label: 'Confirm password', type: 'password', required: true },
//     { name: 'practice', label: 'Area of Practice ', type: 'text', required: true },
//   ];

//   return (
//     <>
//     <GuestNavbar/>
//     <div className='justify-content-center align-items-center text-align-center py-5 px-4 mb-5'>
//     <SignUpForm formTitle="Sign up as a Lawyer" fields={nextLawyerFields} onSubmit={handleLawyerSignUp} submitButtonLabel="Sign up" />
//     </div>
//     <LoginModal
//         showModal={showModal}
//         successMessage={successMessage}
//         closeModal={closeModal}
//         modalText='You have successfully created an account'
//         subText='Kindly await verification'
//       />
  
//     </>
   
    
//   );
// }
