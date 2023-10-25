import React, { useRef, useState } from 'react'
import UserNavbar from '../../components/Navbar/UserNavbar'
import Footer from '../../components/Footer'
import { allJobDetails } from '../Lawyer/Dashboard'
import { useAppContext } from '../../AppContext'
import { useNavigate } from 'react-router-dom'

const CompanyDetails = () => {

  
  return (
    <div>
      {allJobDetails.map((job) =>{
        const {id,jobName,jobPrice} = job;
        return(
          <div className='d-block d-sm-flex justify-content-between align-items-center gap-md-3 gap-sm-3 px-lg-5 px-3 pt-3 pb-2' key={id} style={{ borderBottom: '1px solid #CFCFCF' }}>
              <div className='d-flex flex-column gap-4'>
                <h6>{jobName}</h6>
                <p style={{color:'#5F5F5F'}}>Amount: ₦{jobPrice.toLocaleString()}</p>
              </div>
              <div className='d-block d-sm-flex gap-5'>
              <div className='d-flex align-items-center gap-xl-2 gap-sm-1 gap-2 action'>
                <p>Schedule a call</p>
                <i className="bi bi-telephone mb-3"></i>
              </div>
              <div className='d-flex align-items-center gap-xl-2 gap-sm-1 gap-2 action'>
                <p>Chat with a lawyer</p>
                <i className="bi bi-chat mb-3"></i>
              </div>
              </div>
            
          </div>
        )
      })}
    </div>
  )
}

const CompanyDashboard = () => {

 const navigate = useNavigate()
  const [selectedButton, setSelectedButton] = useState(0);
  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };
  const [jobList, setJobList] = useState(allJobDetails);
  const [newDetails, setNewDetails] = useState('');
    const [selectedJob, setSelectedJob] = useState(null);
    const [showMoreDetailsModal, setShowMoreDetailsModal] = useState(false);
    const [jobDetails, setJobDetails] = useState({});
    const [jobFiles, setJobFiles] = useState({});
    const fileInputRef = useRef(null);
   
    const [selectedFile, setSelectedFile] = useState(null);

    
    const handleUploadClick = () => {
        fileInputRef.current.click();
      };
      
      
      const handleFileChange = (e) => {
        const newSelectedFile = e.target.files[0];
      
        if (newSelectedFile) {
          const maxSizeInBytes = 5 * 1024 * 1024; // 5MB
      
          if (newSelectedFile.size <= maxSizeInBytes) {
            setSelectedFile(newSelectedFile);
        
          } else {
            alert('File size exceeds the limit of 5MB. Please choose a smaller file.');
            e.target.value = null;
            setSelectedFile(null);
           
          }
        } else {
          setSelectedFile(null);
         
        }
      };
      
      const handleDeleteClick = () => {
        
        setSelectedFile(null);
      
        if (fileInputRef.current) {
          fileInputRef.current.value = null;
        }
       
      };

      const handleMoreDetailsShow = (job) => {
        setSelectedJob(job);
        setNewDetails(job.initialDetails);
        setShowMoreDetailsModal(true);
        
        setSelectedFile(job.uploadedFile); 
      };
       
const handleMoreDetailsClose = () => {
  setSelectedJob(null)
  setShowMoreDetailsModal(false);
};

const handleMoreDetailsSend = () => {
  if (selectedJob) {
    selectedJob.initialDetails = newDetails;
    selectedJob.uploadedFile = selectedFile; 
  }

  setShowMoreDetailsModal(false);
};


  return (
    <div>
       <UserNavbar/>
       <div className='p-3 p-sm-5 '>
        <div className='card'>
        <div className='d-flex gap-5 py-3 px-lg-5 px-1 'style={{ borderBottom: '1px solid #CFCFCF' }}>
            
            <p className={
                      selectedButton === 0
                        ? "active-p-text"
                        : " p-text"
                    }
                    onClick={() => handleButtonClick(0)}>Pending</p>
            
            <p className={
                      selectedButton === 1
                        ? "active-p-text"
                        : "p-text"
                    }
                    onClick={() => handleButtonClick(1)}>Completed</p>
           
           
        </div>
        <div>
        {selectedButton === 0 && (
          <CompanyDetails/>
        )}
          {selectedButton === 1 && (
          <CompanyDetails/>
        )}
       
        </div>

        </div>
       <div className='card px-sm-5 py-5 px-3 gap-5 my-5'>
  <h4 className='text-center'>Notifications</h4>
  {jobList.slice(0,2).map((job)=>
  {
    const {id, jobName, jobPrice, initialDetails} = job;
    return(
      <div className='d-block d-md-flex gap-5 align-items-center' key={job.id}>
      <div className='d-flex flex-column gap-3'>
        <h6>{jobName}</h6>
        <p style={{color:'#5F5F5F'}}>{initialDetails}</p>
      </div>
      <div className='
      ' >
      <button type='submit' className='btn btn-outline-primary' style={{width:'180px'}}  onClick={() => handleMoreDetailsShow(job)}>Give more details</button>
      </div>
      
    </div>
    )
  }
  
  )}
 
  
      </div>
       </div>

       <div>
 <div
   className={`modal fade px-2 ${showMoreDetailsModal ? 'show' : ''}`}
   style={{ display: showMoreDetailsModal ? 'block' : 'none' }}
   tabIndex='-1'
   role='dialog'
   aria-labelledby=''
   aria-hidden='true'
 >
   <div className='modal-dialog modal-lg modal-dialog-centered' role='document'>
     <div className='modal-content gap-3 p-3 p-sm-5'>
       <div className='modal-header'>
         <h5 className='modal-title' id='editPaymentModal' style={{ fontWeight: '600' }}>
         {selectedJob ? selectedJob.jobName : ''}
         </h5>

         <button type='button' className='btn-close' onClick={handleMoreDetailsClose}></button>
       </div>
       <div className='modal-body '>
         <h6 className='mb-2' style={{ color: '#5F5F5F' }}>
         {selectedJob ? selectedJob.initialDetails : ''}
         </h6>

         <div className='form-group gap-2 mt-5'>
           <h6 name='exampleFormControlTextarea1' className='form-label'>
             Give more details
           </h6>
           <textarea
             className='form-control'
            
             rows='8'
             placeholder='Start typing...'
             id="newDetails"
               value={newDetails}
               onChange={(e) => setNewDetails(e.target.value)}
           ></textarea>
         </div>
         <div className='d-flex flex-column mt-5'>
           <div>
             <input
               type='file'
               ref={fileInputRef}
               style={{ display: 'none' }}
               onChange={handleFileChange}
               accept='.pdf, .doc, .docx'
             />

             {!selectedFile && (
               <button
                 className='d-flex gap-2 btn btn-outline-primary justify-content-center'
                 onClick={handleUploadClick}
                 style={{ width: '250px' }}
               >
                 Upload Document
                 <i className='bi bi-cloud-upload'></i>
               </button>
             )}

             {selectedFile && (
               <div className='d-flex my-2'>
                 <p className='p-small'>
                   {' '}
                   <i className='bi bi-file-earmark-text-fill' style={{ color: 'wine' }}></i> &nbsp;
                   {selectedFile.name}
                   <button className='btn btn-danger' onClick={handleDeleteClick} style={{ border: 'none', backgroundColor: 'transparent' }}>
                     <i className='bi bi-trash' style={{ color: 'red', fill: 'red' }}></i>
                   </button>
                 </p>
               </div>
             )}
           </div>
           <button type='button' style={{ width: '250px' }} className='btn btn-primary mt-3 px-5' onClick={handleMoreDetailsSend}>
             Send
           </button>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div className={`modal-backdrop fade ${showMoreDetailsModal ? 'show' : ''}`} style={{ display: showMoreDetailsModal ? 'block' : 'none' }}></div>
</div>
     
      <Footer/>
    </div>
  )
}

export default CompanyDashboard
