import React, { useState } from 'react'
 import UserNavbar from '../../components/Navbar/UserNavbar'
import Footer from '../../components/Footer';

const GetPaid = () => {
    const [selectedButton, setSelectedButton] = useState(0);
   
    const [accountNumber, setAccountNumber] = useState('0123456789');
    const [accountName, setAccountName] = useState('Amber Daniels');
    const [bank, setBank] = useState('United Bank for Africa');
    const handleButtonClick = (buttonIndex) => {
      setSelectedButton(buttonIndex);
    };
  return (
    <>
    <UserNavbar/>
    <div className='d-flex gap-5 p-5 mb-5'>
        <div className='card'>
            
            <p className={
                      selectedButton === 0
                        ? "active-p-text"
                        : " p-text"
                    }
                    onClick={() => handleButtonClick(0)}>Payment Details</p>
            <div className='line'></div>
            <p className={
                      selectedButton === 1
                        ? "active-p-text"
                        : "p-text"
                    }
                    onClick={() => handleButtonClick(1)}>Get Paid</p>
            <div className='line'></div>
            <p className={
                      selectedButton === 2
                        ? "active-p-text"
                        : "p-text"
                    }
                    onClick={() => handleButtonClick(2)}>Profile</p>
        </div>
        <div>
        {selectedButton === 0 && (
             <div className='d-flex flex-column py-5 py-md-3 gap-5'>
             <h5 style={{ fontWeight: '600' }}>Payment Details</h5>
             <div
               className='card p-sm-5 p-3 gap-4'
               style={{
                 borderRadius: '20px',
                 background: 'linear-gradient(0deg, #FFF 0%, #FFF 100%), #FFF',
                 border: 'none',
                 boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
               }}
             >
               <div className='d-flex gap-3'>
                 <h5 style={{ fontWeight: '600' }}>Payment Account</h5>
                 <button
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
            
       
            
             {/* <div
               className={`modal fade px-2 ${showModal ? 'show' : ''}`}
               style={{ display: showModal ? 'block' : 'none' }}
               tabIndex='-1'
               role='dialog'
               aria-labelledby='editPaymentModal'
               aria-hidden='true'
             >
               <div className='modal-dialog modal-dialog-centered' role='document'>
                 <div className='modal-content'>
                   <div className='modal-header'>
                     <h5 className='modal-title' id='editPaymentModal' style={{fontWeight:'600'}}>
                       Edit Payment Details
                     </h5>
                     <button type='button' className='btn-close' onClick={handleClose}></button>
                   </div>
                   <div className='modal-body'>
                    
                     <div className='form-group gap-2'>
                       <label>Account Number</label>
                     <input
                       type='text'
                       className='form-control'
                       placeholder='New Account Number'
                       value={tempAccountNumber}
                       onChange={(e) => setTempAccountNumber(e.target.value)}
                     />
                     </div>
                     <div className='form-group gap-2 mt-3'>
                       <label>Account Name</label>
                     <input
                       type='text'
                       className='form-control '
                       placeholder='New Account Name'
                       value={tempAccountName}
                       onChange={(e) => setTempAccountName(e.target.value)}
                     />
                     </div>
                     <div className='form-group gap-2 mt-3'>
                       <label>Bank</label>
                     <input
                       type='text'
                       className='form-control'
                       placeholder='New Bank'
                       value={tempBank}
                       onChange={(e) => setTempBank(e.target.value)}
                     />
                     </div>
                   </div>
                   <div className='modal-footer'>
                     <button type='button' className='btn btn-secondary' onClick={handleClose}>
                       Close
                     </button>
                     <button type='button' className='btn btn-primary' onClick={handleSave}>
                       Save Changes
                     </button>
                   </div>
                 </div>
               </div>
             </div>
             <div
               className={`modal-backdrop fade ${showModal ? 'show' : ''}`}
               style={{ display: showModal ? 'block' : 'none' }}
             ></div> */}
             </div>
        )}
        </div>

    </div>
      <Footer/>
    </>
  )
}

export default GetPaid
