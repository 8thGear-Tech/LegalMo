import React, { useState, useEffect } from 'react'
 import UserNavbar from '../../components/Navbar/UserNavbar'
import Footer from '../../components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';

const GetPaid = () => {
    const [selectedButton, setSelectedButton] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [formValid, setFormValid] = useState(false);
    const [accountNumber, setAccountNumber] = useState('0123456789');
    const [accountName, setAccountName] = useState('Amber Daniels');
    const [bank, setBank] = useState('United Bank for Africa');
  
    const [tempAccountNumber, setTempAccountNumber] = useState('');
    const [tempAccountName, setTempAccountName] = useState('');
    const [tempBank, setTempBank] = useState('');
    const navigate = useNavigate();
const location = useLocation();
   
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
    
  useEffect(() => {
    if (location.state && location.state.updatedDetails) {
      const { accountNumber, accountName, bank } = location.state.updatedDetails;
      setAccountNumber(accountNumber);
      setAccountName(accountName);
      setBank(bank);
    }
  }, [location.state]);
  
    const handleEditDetails = () => {
      setTempAccountNumber('');
      setTempAccountName('');
      setTempBank('');
      setIsEditing(true);
    };
  
    const handleUpdate = (e) => {
     e.preventDefault();
      setIsEditing(false);
      setAccountNumber(tempAccountNumber);
      setAccountName(tempAccountName);
      setBank(tempBank);
   navigate('/lawyer/otp', {
    state: {
      updatedDetails: {
        accountNumber: tempAccountNumber,
        accountName: tempAccountName,
        bank: tempBank,
      },
    },
   })
    }

    const handleClose = () => {
      setIsEditing(false);
    };



    const handleButtonClick = (buttonIndex) => {
      setSelectedButton(buttonIndex);
    };


const paymentDetails = (
  
  <div
  className='card p-sm-5 p-3 gap-4 '
  style={{
    borderRadius: '20px',
    background: 'linear-gradient(0deg, #FFF 0%, #FFF 100%), #FFF',
    border: '1px solid  #CFCFCF'}}
>
  <div className='d-flex gap-3'>
    <h5 style={{ fontWeight: '600' }}>Payment Account</h5>
    <button onClick={handleEditDetails}
      className="mb-2"
      style={{border:'none', background:'transparent'}}
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
)
    
const editPaymentDetails = (
  <div className='card p-sm-5 p-3 justify-content-center align-items-center'>

  
    <div className='gap-4 d-flex flex-column'>
    <div className='d-flex align-items-center gap-5 text-center' >
      <h5 style={{ fontWeight: '600' }}>Payment Account</h5>
       <button type='button' className='btn-close' onClick={handleClose}></button>
    </div>
    <form className='gap-3' onSubmit={handleUpdate}>
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
     
      <button type="submit" className={` btn w-100 ${formValid ? 'btn-primary btn-newPrimary' : 'btn-secondary'}`}
     >Update</button>
      
    </form>
    </div>
   
  
  </div>
);

  return (
    <>
    <UserNavbar/>
    <div className='px-lg-5'>
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
             {isEditing ? editPaymentDetails : paymentDetails}
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
    </div>
      <Footer/>
    </>
  )
}

export default GetPaid

