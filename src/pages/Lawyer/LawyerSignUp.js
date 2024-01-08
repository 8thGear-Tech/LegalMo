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
  const [acceptTerms, setAcceptTerms] = useState(false);


  const lawyerFields = [
    { name: 'firstName', label: 'Name', type: 'text', required: true },
    { name: 'phoneNumber', label: 'Phone Number', type: 'number', required: true },
    { name: 'email', label: 'Official Email Address', type: 'email', required: true },
    { name: 'firmName', label: 'Name of Firm', type: 'text', required: false },
    { name: 'lawFirmAddress', label: 'Address of Law Firm', type: 'text', required: false },
  ];
  
  const nextLawyerFields = [
    { name: 'scnNumber', label: 'Supreme Court Enrollment Number (SCN)', type: 'text', required: true },
    { name: 'cacNumber', label: 'CAC Accreditation Number', type: 'text', required: false },
 
    { name: 'password', label: 'Password', type: 'password', required: true },
    { name: 'confirmPassword', label: 'Confirm password', type: 'password', required: true },
    
    { name: 'practice', label: 'Area of Practice ', type: 'select', required: true, 
  options:[
    {label:'Maritime', value:'Maritime'},
    {label:'International Trade and Investment', value:'International Trade and Investment'},
    {label:'Tax Practise', value:'Tax Practise'},
    {label:'Aviation and Space', value:'Aviation and Space'},
    {label:'Sports', value:'Sports'},
    {label:'Entertainment', value:'Entertainment'},
    {label:'Technology', value:'Technology'},
    // {label:'Public Sector', value:'publicSector'},
    // {label:'Debt Recovery and Insolvency', value:'debtRecoveryAndInsolvency'},
    // {label:'Dispute Resolution and Litigation', value:'disputeResolutionAndLitigation'},
    // {label:'Information Technology', value:'informationTechnology'},
    // {label:'Corporate Commercial', value:'corporateCommercial'},
    // {label:'Corporate Advisory', value:'corporateAdvisory'},
    // {label:'Alternate Dispute Resolution', value:'alternateDisputeResolution'},
    // {label:'Arbitration', value:'arbitration'},
    // {label:'Banking and Finance', value:'bankingAndFinance'},
    // {label:'Compliance and Investigations', value:'complianceAndInvestigations'},
    // {label:'Capital Markets', value:'capitalMarkets'},
    // {label:'Corporate Governance', value:'corporateGovernance'},
    // {label:'Employment', value:'employment'},
    // {label:'Energy and Natural Resources', value:'energyAndNaturalResources'},
    // {label:'Intellectual Property', value:'intellectualProperty'},
    // {label:'Mergers and Acquisition', value:'mergersAndAcquisition'},
    // {label:'Media', value:'media'},
    // {label:'Oil and Gas', value:'oilAndGas'},
    // {label:'Power', value:'power'},
    // {label:'Real Estate', value:'realEstate'},
   
  ] },
  ];

  const handleNextLawyerSignUp = (formData) => {
    setFormDataStep1(formData)
    setStep(2);
  };

  const handleAcceptTermsChange = () => {
    setAcceptTerms(!acceptTerms);
  };
  
  

  const handleLawyerSignup = (formData) => {
    if (!acceptTerms) {
      
      alert('Please accept the terms and conditions.');
      return;
    }
    setFormDataStep2(formData)
  
    const body = {
      name: formData.firstName,
 phoneNumber: formData.phoneNumber,
 officialEmail: formData.email,
 lawFirmName: formData.firmName,
 lawFirmAddress: formData.lawFirmAddress,
 scn: formData.scnNumber,
 cac: formData.cacNumber,
 password: formData.password,
 passwordConfirm: formData.confirmPassword,
 areasOfPractise: [formData.practice]
    }

    
    
    signupAsLawyer(body, setMessage, setLoading, setIsSuccessful, setUserData, setShowModal)
  };


  if (loading){
    return <div className='justify-content-center align-items-center text-center' style={{paddingTop:'300px'}}>
   <div className="spinner-border text-secondary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
        </div>; 
  }
  
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
            acceptTerms={acceptTerms}
            setAcceptTerms={setAcceptTerms}
            handleAcceptTermsChange={handleAcceptTermsChange}
            step={2}

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


