import React, { useState, useEffect } from 'react'
 import UserNavbar from '../../components/Navbar/UserNavbar'
import Footer from '../../components/Footer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import lawyerRoute from '../../services/lawyerRoute.js';
import { LoginModal } from '../../components/Forms/Authenticationforms.js';
import axios from 'axios';
import LawyerOTP from './OTP.js';

const GetPaid = () => {
    const [selectedButton, setSelectedButton] = useState(0);
  
    const [isEditing, setIsEditing] = useState(false);
    const [formValid, setFormValid] = useState(false);
    const [accountNumber, setAccountNumber] = useState('');
    const [accountName, setAccountName] = useState('');
    const [bank, setBank] = useState('');
  const [noPaymentDetails, setNoPaymentDetails] = useState(false);
    const [tempAccountNumber, setTempAccountNumber] = useState('');
    const [tempAccountName, setTempAccountName] = useState('');
    const [tempBank, setTempBank] = useState('');
    const navigate = useNavigate();
const location = useLocation();
const {getPaymentDetails, addPaymentDetails, getOTP, confirmOTP, updatePaymentDetails}= lawyerRoute();
const [loading, setLoading] = useState(true);
const [message, setMessage] = useState('');
const [showModal, setShowModal] = useState(false);
const [isSuccessful, setIsSuccessful] = useState(false);
const [step, setStep] = useState(1);
const [otp, setOTP] = useState(["", "", "", "", "", ""]);

useEffect(()=>{
  getPaymentDetails(
    setMessage, setLoading, setIsSuccessful, setAccountNumber, setAccountName,setBank, setNoPaymentDetails
   
  )

}, [])



useEffect(() => {
  if (accountNumber && accountName && bank) {

    setTempAccountNumber(accountNumber);
    setTempAccountName(accountName);
    setTempBank(bank);
  }
}, [accountNumber, accountName, bank]);

   
    useEffect(() => {
      if (
       tempAccountName.trim() !== '' &&
        tempAccountNumber.trim() !== '' &&
        tempBank.trim() !== '' 
      ) {
        setFormValid(true);
      } else {
        setFormValid(false);
      }
    }, [tempAccountName, tempAccountNumber, tempBank, ]);
    
  

  const handleEditDetails = () => {
    getOTP(
    
      setMessage,
      setLoading,
      setIsSuccessful, setStep,
      setShowModal
     
    )
  
  }
  const handleOTPSubmit = (e) => {
    e.preventDefault();
  
    const body = {
      OTP: otp.join(''),
    };
    confirmOTP(
      body,
      setMessage,
      setLoading,
      setIsSuccessful,
      setStep,
      setShowModal
     
    ) 
   
  
   
    
  };
   
  
  const handleOTPChange = (e, index) => {
    
    const newDigit = e.target.value.replace(/[^0-9]/g, '');
  
    const newOTP = [...otp];
    newOTP[index] = newDigit;
    setOTP(newOTP);
  };

    const handleAddPaymentDetails = (e) => {
      e.preventDefault();
    

      const body={
        accountNumber: tempAccountNumber,
   accountName: tempAccountName,
   bank: tempBank,
   
      }

    
      addPaymentDetails (
        body,
        setMessage,
        setLoading,
        setIsSuccessful,
        setAccountNumber,
        setAccountName,
        setBank,
       
      );

     }
    const handleClose = (e) => {
      e.preventDefault()
      navigate('/lawyer/get-paid')
    };



    const handleButtonClick = (buttonIndex) => {
      setSelectedButton(buttonIndex);
    };
    const handleUpdate = (e) => {
      e.preventDefault();

      const body = {
        accountNumber: tempAccountNumber,
        accountName: tempAccountName,
        bank: tempBank,
      };


    
      updatePaymentDetails(
        body,
        setMessage,
        setLoading,
        setIsSuccessful,
        setAccountNumber,
        setAccountName,
        setBank,
        setStep,
        setShowModal
      )
     
    };
    


    const paymentDetails = () => {
      if (accountNumber && accountName && bank) {
        return (
          <div
            className='card p-sm-5 p-3 gap-4 '
            style={{
              borderRadius: '20px',
              background: 'linear-gradient(0deg, #FFF 0%, #FFF 100%), #FFF',
              border: '1px solid  #CFCFCF'
            }}
          >
            <div className='d-flex gap-3'>
              <h5 style={{ fontWeight: '600' }}>Payment Account</h5>
              <button
                onClick={handleEditDetails}
                className="mb-2"
                style={{ border: 'none', background: 'transparent' }}
              >
                <i className="bi bi-pencil"></i>
              </button>
            </div>
            <div className='gap-3'>
              <div className='d-flex gap-md-2'>
                <p style={{ maxWidth: '184px', minWidth: '130px' }}>Account number:</p>
                <p>{accountNumber}</p>
              </div>
              <div className='d-flex gap-md-4'>
                <p style={{ maxWidth: '184px', minWidth: '130px' }}>Account name:</p>
                <p>{accountName}</p>
              </div>
              <div className='d-flex gap-md-4'>
                <p style={{ maxWidth: '184px', minWidth: '130px' }}>Bank:</p>
                <p>{bank}</p>
              </div>
            </div>
          </div>
        );
      } else if (noPaymentDetails) {
        // No payment details exist, render the "Add Payment Details" button
        return (
          <div className='card p-sm-5 p-3 '>

  
          <div className='gap-4 d-flex flex-column'>
          <div className='d-flex align-items-center gap-5 justify-content-center text-center' >
            <h5 style={{ fontWeight: '600' }}>Payment Account</h5>
           
          </div>
          <form className='gap-3 mx-5' onSubmit={handleAddPaymentDetails}>
            <div className='mb-4 w-100'>
          
              <input
                type='text'
                className='form-control'
                id='accountNumber'
                placeholder='Account number'
                value={tempAccountNumber}
                onChange={(e) => setTempAccountNumber(e.target.value)} required
              />
            </div>
            <div className='mb-4 w-100'>
             
              <input
                type='text'
                className='form-control'
                id='accountName'
                placeholder='Account name'
                value={tempAccountName}
                onChange={(e) => setTempAccountName(e.target.value)} required
              />
            </div>
            <div className='mb-4 w-100'>
             
              <input
                type='text'
                className='form-control'
                id='bank'
                placeholder='Bank'
                value={tempBank}
                onChange={(e) => setTempBank(e.target.value)} required
              />
            </div>
           <div className='justify-content-center text-center'>
            <button type="submit" className={` btn w-50 ${formValid ? 'btn-primary btn-newPrimary' : 'btn-secondary'}`}
           >Add Payment Details</button>
            </div>
          </form>
          </div>
         
        
        </div>
        );
      } else{
        return (
          <div className="text-center"style={{paddingTop:'150px', paddingBottom:'100px'}}>
            <div className="spinner-border" role="status" >
              <span className="visually-hidden" >Loading...</span>
            </div>
           
          </div>
        )
      }
      
    };
    
    if (loading) {
      return <div className='justify-content-center align-items-center text-center' style={{paddingTop:'300px'}}>
     <div className="spinner-border text-secondary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
          </div>; 
    }
    

{/* <button type='button' className='btn-close' onClick={handleClose}></button> */}

  return (
    <>
    <UserNavbar/>
    { step === 1 && (<div className='px-lg-5'>
    <div className='d-block d-md-flex gap-md-5 p-5 mb-5 '>
      <div className='mt-5'>
      <div className='card py-2 mt-md-5' style={{height:'220px',width:'auto' ,borderRadius:'20px'}}>
            
            <p className={
                      selectedButton === 0
                        ? "active-p-text ps-3 pe-5 pt-3 pb-2"
                        : " p-text ps-3 pe-5 pt-3 pb-2"
                    }
                    onClick={() => handleButtonClick(0)}>Payment Details</p>
            <div className='' style={{border:'1px solid #CFCFCF'}}></div>
            <p className={
                      selectedButton === 1
                        ? "active-p-text ps-3 pe-5 pt-3 pb-2"
                        : "p-text ps-3 pe-5 pt-3 pb-2"
                    }
                    onClick={() => handleButtonClick(1)}>Get Paid</p>
           <div className='' style={{border:'1px solid #CFCFCF'}}></div>
            <p className={
                      selectedButton === 2
                        ? "active-p-text ps-3 pe-5 pt-3 pb-2"
                        : "p-text ps-3 pe-5 pt-3 pb-2"
                    }
                    onClick={() => navigate('/lawyer/profile')}>Profile</p>
        </div>
      </div>
       
        <div className='flex-grow-1'>
        {selectedButton === 0 && (
  <div className='d-flex flex-column py-5 py-md-3 gap-4 w-100'>
    <h5 style={{ fontWeight: '600' }}>Payment Details</h5>
    {/* {isEditing ? editPaymentDetails() : paymentDetails()} */}
    {paymentDetails()}
  </div>
)}

        {selectedButton === 1 && (
          <div className='d-flex flex-column py-5 py-md-3 gap-4 w-100'>
          <h5 style={{ fontWeight: '600' }}>Get Paid</h5>
          <div
  className='card p-sm-5 p-3 gap-4 mb-3'
  style={{
    borderRadius: '20px',
    background: 'linear-gradient(0deg, #FFF 0%, #FFF 100%), #FFF',
    border: '1px solid  #CFCFCF'}}
>
  <div className='d-flex flex-column gap-5'>
  <h5 style={{ fontWeight: '600' }}>Available Funds</h5>
  <div className='d-flex justify-content-between align-items-center'>
  <h5>₦100,000</h5>
  <button type='submit' className='btn btn-outline-primary px-4'>Get Paid</button>
  </div>
  </div>
          </div>     
          <div
  className='card p-sm-5 p-3 gap-4 mb-3'
  style={{
    borderRadius: '20px',
    background: 'linear-gradient(0deg, #FFF 0%, #FFF 100%), #FFF',
    border: '1px solid  #CFCFCF'}}
>
  <div className='d-flex flex-column gap-2'>
  <h5 style={{ fontWeight: '600' }}>Payment Schedule</h5>
  <div className='d-flex justify-content-between align-items-center'>
  <h5 style={{color: '#5F5F5F'}}>20th July, 2023</h5>
  <h5>₦100,000</h5>
  </div>
  <div className='d-flex justify-content-between align-items-center'>
  <h5 style={{color: '#5F5F5F'}}>20th October, 2023</h5>
  <h5>₦150,000</h5>
  </div>
  </div>
          </div>     
          <div
  className='card p-sm-5 p-3 gap-4 mb-3'
  style={{
    borderRadius: '20px',
    background: 'linear-gradient(0deg, #FFF 0%, #FFF 100%), #FFF',
    border: '1px solid  #CFCFCF'}}
>
  <div className='d-flex flex-column gap-2'>
  <h5 style={{ fontWeight: '600' }}>Withdrawal Schedule</h5>
  <div className='d-flex justify-content-between align-items-center'>
  <h5 style={{color: '#5F5F5F'}}>20th July, 2023</h5>
  <h5>₦100,000</h5>
  </div>
  <div className='d-flex justify-content-between align-items-center'>
  <h5 style={{color: '#5F5F5F'}}>20th October, 2023</h5>
  <h5>₦150,000</h5>
  </div>
  </div>
          </div>   
          </div>
        )}

        </div>

    </div>
    </div>)}

    { step === 2 && (
      <LawyerOTP otp={otp} setOTP={setOTP} handleOTPChange={handleOTPChange} handleOTPSubmit={handleOTPSubmit}/>
    )}

{ step === 3 && (
     
      <div className='m-5 card p-sm-5 p-3 justify-content-center align-items-center'>
        <div className='gap-4 d-flex flex-column'>
            <div className='d-flex align-items-center gap-5 text-center'>
              <h5 style={{ fontWeight: '600' }}>Payment Account</h5>
              </div>
        <form onSubmit={handleUpdate} className='gap-3'>
          <div className='mb-4 w-100'>
            <input
              type='text'
              className='form-control'
              id='editAccountNumber'
              placeholder='Account number'
              value={tempAccountNumber}
              onChange={(e) => setTempAccountNumber(e.target.value)}
              required
            />
          </div>
          <div className='mb-4 w-100'>
            <input
              type='text'
              className='form-control'
              id='editAccountName'
              placeholder='Account name'
              value={tempAccountName}
              onChange={(e) => setTempAccountName(e.target.value)}
              required
            />
          </div>
          <div className='mb-4 w-100'>
            <input
              type='text'
              className='form-control'
              id='editBank'
              placeholder='Bank'
              value={tempBank}
              onChange={(e) => setTempBank(e.target.value)}
              required
            />
          </div>
          <div className='justify-content-center text-center'>
          <button
                type='submit'
                className={` btn w-100 ${formValid ? 'btn-primary btn-newPrimary' : 'btn-secondary'}`}
              >
                Update
              </button>
          </div>
        </form>
      </div>
      </div>
      
    )}
    
    
    
      <Footer/>
      <LoginModal
        showModal={showModal}
       isSuccess={isSuccessful}
        closeModal={()=> setShowModal(false)}
        modalText={message}
        
      />
    </>
  )
}

export default GetPaid

