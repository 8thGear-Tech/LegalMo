import React, { useState } from 'react'
import UserNavbar from '../../components/Navbar/UserNavbar'
import Footer from '../../components/Footer'

export const allJobDetails = [
  {
    id:1,
    jobName: 'Contract Drafting and Review',
    initialDetails:'We are looking for an employment law expert who will prepare and employment contract stating lorem ipsom lorem ipsom.....',
    jobPrice: 100000,
  },
  {
    id:2,
    jobName: 'Contract Drafting and Review',
    initialDetails:'We are looking for an employment law expert who will prepare and employment contract stating lorem ipsom lorem ipsom.....',
    jobPrice: 100000,
  },
  {
    id:3,
    jobName: 'Contract Drafting and Review',
    initialDetails:'We are looking for an employment law expert who will prepare and employment contract stating lorem ipsom lorem ipsom.....',
    jobPrice: 100000,
  }
]

const LawyerDetails = () => {
  return (
    <div>
      {allJobDetails.map((jobDetail) =>{
        const {id,jobName,jobPrice} = jobDetail;
        return(
          <div className='d-block d-sm-flex justify-content-between align-items-center gap-md-3 gap-sm-3 px-lg-5 px-3 pt-3 pb-2' key={id} style={{ borderBottom: '1px solid #CFCFCF' }}>
              <div className='d-flex flex-column gap-4'>
                <h6>{jobName}</h6>
                <p style={{color:'#5F5F5F'}}>Amount: ₦{jobPrice.toLocaleString()}</p>
              </div>
              <div className='d-flex align-items-center gap-xl-2 gap-sm-1 gap-2 action'>
                <p>Schedule a call</p>
                <i className="bi bi-telephone mb-3"></i>
              </div>
              <div className='d-flex align-items-center gap-xl-2 gap-sm-1 gap-2 action'>
                <p>Chat with a client</p>
                <i className="bi bi-chat mb-3"></i>
              </div>
              <div className='d-flex align-items-center gap-xl-2 gap-sm-1 gap-2 action'>
                <p>Upload</p>
                <i className="bi bi-cloud-upload mb-3"></i>
              </div>
          </div>
        )
      })}
    </div>
  )
}


const LawyerDashboard = () => {

  const [selectedButton, setSelectedButton] = useState(0);
  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };
  return (
    <div>
       <UserNavbar/>
       <div className='p-3 p-sm-5 '>
        <div className='card'>
        <div className='d-flex justify-content-between py-3 px-lg-5 px-1 'style={{ borderBottom: '1px solid #CFCFCF' }}>
            
            <p className={
                      selectedButton === 0
                        ? "active-p-text"
                        : " p-text"
                    }
                    onClick={() => handleButtonClick(0)}>Pending project</p>
            
            <p className={
                      selectedButton === 1
                        ? "active-p-text"
                        : "p-text"
                    }
                    onClick={() => handleButtonClick(1)}>Completed Project</p>
           
           <p className={
                      selectedButton === 2
                        ? "active-p-text"
                        : " p-text"
                    }
                    onClick={() => handleButtonClick(2)}>Pending payment</p>
            
            <p className={
                      selectedButton === 3
                        ? "active-p-text"
                        : "p-text"
                    }
                    onClick={() => handleButtonClick(3)}>Completed payment</p>
        </div>
        <div>
        {selectedButton === 0 && (
          <LawyerDetails/>
        )}
          {selectedButton === 1 && (
          <LawyerDetails/>
        )}
          {selectedButton === 2 && (
          <LawyerDetails/>
        )}
          {selectedButton === 3 && (
          <LawyerDetails/>
        )}
        </div>

        </div>
       <div className='card px-sm-5 py-5 px-3 gap-5 my-5'>
  <h4 className='text-center'>Notifications</h4>
  <div className='d-block d-md-flex gap-5 align-items-center'>
    <div className='d-flex flex-column gap-3'>
      <h6>Contract Drafting and Review</h6>
      <p style={{color:'#5F5F5F'}}>We are looking for an employment law expert who will prepare and employment contract stating lorem ipsom lorem ipsom.....</p>
    </div>
    <div className='
    ' >
    <button type='submit' className='btn btn-outline-primary' style={{width:'180px'}}>View more details</button>
    </div>
    
  </div>
  <div className='d-block d-md-flex gap-5 align-items-center'>
    <div className='d-flex flex-column gap-3'>
      <h6>Contract Drafting and Review</h6>
      <p style={{color:'#5F5F5F'}}>We are looking for an employment law expert who will prepare and employment contract stating lorem ipsom lorem ipsom.....</p>
    </div>
    <div className='
    ' >
    <button type='submit' className='btn btn-outline-primary' style={{width:'195px'}}>Scheduled Client call</button>
    </div>
    
  </div>
      </div>
       </div>
     
      <Footer/>
    </div>
  )
}

export default LawyerDashboard
