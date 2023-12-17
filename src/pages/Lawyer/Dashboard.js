import React, { useEffect, useState } from 'react'
import UserNavbar from '../../components/Navbar/UserNavbar'
import Footer from '../../components/Footer'
import lawyerRoute from '../../services/lawyerRoute'
import { LoginModal } from '../../components/Forms/Authenticationforms'


const LawyerDashboard = () => {
  const [jobs, setJobs] = useState([]);
 
  const [statusFilter, setStatusFilter] = useState('Pending projects');
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
 const [options, setOptions]= useState([])
 const [showViewMoreModal, setShowViewMoreModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
const {getPendingJobs, getCompletedJobs, getJobs, requestDetail}= lawyerRoute()
const [selectedJob, setSelectedJob] = useState(null);
const [showRequestDetailsModal, setShowRequestDetailsModal] = useState(false);
const [moreDetails, setMoreDetails] = useState('')

  useEffect(() => {
  

    if (statusFilter === 'Pending projects') {
      getPendingJobs(
        setJobs, setMessage, setLoading, setIsSuccessful
       )
   
      
    } else if (statusFilter === 'Completed projects') {
      getCompletedJobs(
        setJobs, setMessage, setLoading, setIsSuccessful
       )
 
    }
    
  }, [statusFilter]);

  useEffect(() => {
    getPendingJobs(
      setJobs, setMessage, setLoading, setIsSuccessful
     )
  }, []);



  const handleStatusFilterChange = (newStatus) => {
    setStatusFilter(newStatus);
   
  
  };

  const handleViewMoreShow = (job) => {
 
    setSelectedJob(job);
    setShowViewMoreModal(true);
  
  };
  
  
    const handleViewMoreClose = () => {
      setShowViewMoreModal(false);
      setSelectedJob(null)
    };

    const handleRequestDetailsClose = () => {
   
      setShowRequestDetailsModal(false);
    };
    
    const handleRequestDetailsShow = (job) => {
      setSelectedJob(job);
      setShowRequestDetailsModal(true);
      
      
    };
    const handleRequestDetailsSend = () => {
if(moreDetails === ''){
  alert('Kindly request details')
  return
}
    const jobId = selectedJob?._id;
      const body = {
        detail: moreDetails,
      };

      
      requestDetail(body, setMessage, setLoading, setIsSuccessful, jobId, setShowModal);
      
      setShowRequestDetailsModal(false);
      setMoreDetails('')
    };


    const renderPendingNotifications = () => {
      // const pendingJobsWithDetails = jobs.filter(
      //   job => job.status === 'pending' && (job.companyDetail || job.companyFile || job.adminDetail || job.adminFile)
      // );

      const pendingJobsWithDetails = jobs.filter(
        job => job.status === 'pending' && (
          (job.companyDetail || job.companyFile || job.companyFileName) || 
          (job.adminDetail || job.adminFile || job.adminFileName)
        )
      );
  
      // Sort pending jobs by updatedAt in descending order
      const sortedPendingJobs = pendingJobsWithDetails.sort((a, b) =>
        new Date(b.updatedAt) - new Date(a.updatedAt)
      );
  
      return ( 
        <div className='card px-sm-5 py-5 px-3 gap-5 my-5' >
           <h4 className='text-center'>Notifications</h4>
           {sortedPendingJobs.length === 0 ? (
              <p className='text-center mt-4 mb-3'>No notifications</p>
            ) : (
              <div>
          {sortedPendingJobs.map(job => (
          
         
          <div className='d-block d-md-flex justify-content-between align-items-center mb-5 mb-md-3' key={job?._id}>
          <div className='d-flex flex-column gap-2 gap-md-3'>
              <h6>{job?.productId?.productName}</h6>
              <p style={{ color: '#5F5F5F' }}>
                {job?.productId?.productDescription.split(' ').slice(0, 17).join(' ')}
                {job?.productId?.productDescription.split(' ').length > 17 ? '...' : ''}
              </p>
            </div>
            <div>
              <button
                type='submit'
                className='btn btn-outline-primary'
                style={{ width: '180px' }}
                onClick={() => handleViewMoreShow(job)}
              >
                View more details
              </button>
            </div>
          </div>
          ))}
          </div>)}
        </div>
        
        );
    };

    if (loading) {
      return <div className='justify-content-center align-items-center text-center' style={{paddingTop:'300px'}}>
     <div className="spinner-border text-secondary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
          </div>; 
    }

  return (
    <div>
       <UserNavbar/>
       <div className='p-3 p-sm-5 '>
        <div className='card'>
          <div className='py-3 px-lg-5 px-1 'style={{ borderBottom: '1px solid #CFCFCF' }}>
        <div className='d-none d-md-flex gap-5'>
            
            <p className={
                      statusFilter === 'Pending projects'
                        ? "active-p-text"
                        : " p-text"
                    }
                    onClick={() => handleStatusFilterChange('Pending projects')}>Pending projects</p>
            
            <p className={
                      statusFilter === 'Completed projects'
                        ? "active-p-text"
                        : "p-text"
                    }
                    onClick={() => handleStatusFilterChange('Completed projects')}>Completed projects</p>
           
       
        </div>
        <div className='d-flex d-md-none px-2'>
          <div className='dropdown'>
         
    <select value={statusFilter} onChange={(e) => handleStatusFilterChange(e.target.value)} className='p-2'>
  <option value="Pending projects">Pending project</option>
  <option value="Completed projects">Completed Project</option>

</select>

          </div>
        </div>
        </div>
       

       

<div>{jobs.length === 0 ? (
    <p className='justify-content-center text-center py-5'>No projects</p>
  ) : (
    <div>
      {jobs.map((job) =>{
      
        return(
          <div className='d-block d-sm-flex justify-content-between align-items-center gap-md-3 gap-sm-3 px-lg-5 px-3 pt-3 pb-2' key={job?._id} style={{ borderBottom: '1px solid #CFCFCF' }}>
              <div className='d-flex flex-column gap-4'>
                <h6>{job?.productId?.productName}</h6>
                <p style={{color:'#5F5F5F'}}>Amount: ₦{job?.productId?.productPrice.toLocaleString()}</p>
              </div>
              <div className='d-flex align-items-center gap-xl-2 gap-sm-1 gap-2 action'>
                <p>Schedule a call</p>
                <i className="bi bi-telephone mb-3"></i>
              </div>
              <div className='d-flex align-items-center gap-xl-2 gap-sm-1 gap-2 action'>
                <p>Chat with a client</p>
                <i className="bi bi-chat mb-3"></i>
              </div>
              {statusFilter === 'Pending projects' && (
                 <div className='d-flex align-items-center gap-xl-2 gap-sm-1 gap-2'>
                 {/* <p>Request details</p>
                 <i className="bi bi-cloud-upload mb-3"></i> */}
                <button type='submit' className='btn btn-outline-primary py-2'   onClick={()=>handleRequestDetailsShow(job)}>Request more details</button>
               </div>
              )}
             
          </div>
        )
      })}
      </div>
  )}
    </div>

        </div>

        {renderPendingNotifications()}
      
       </div>
     
      <Footer/>
      {/* view more modal */}
      {selectedJob && (
          <div>
          <div
            className={`modal fade px-2 ${showViewMoreModal ? 'show' : ''}`}
            style={{ display: showViewMoreModal ? 'block' : 'none' }}
            tabIndex='-1'
            role='dialog'
            aria-labelledby=''
            aria-hidden='true' onClick={handleViewMoreClose}
          >
            <div className='modal-dialog modal-lg modal-dialog-centered' role='document'>
              <div className='modal-content gap-3 p-3 p-sm-5' style={{width:'90%'}}>
                <div className='modal-header'>
                  <h5 className='modal-title' id='' style={{ fontWeight: '600' }}>
                  {selectedJob?.productId?.productName}
                  </h5>
      
                  <button type='button' className='btn-close' onClick={handleViewMoreClose}></button>
                </div>
                <div className='modal-body '>
                 
                  <h6 className='mb-2' style={{ color: '#5F5F5F' }}>
                  {selectedJob?.productId?.productDescription}
                  </h6>
      
                  <div className='form-group gap-2 mt-5'>
                  {selectedJob.companyDetail || selectedJob.adminDetail && (
                      <div>
                      <h6 name='exampleFormControlTextarea1' className='form-label'>
                        Details
                      </h6>
                      <div className='card p-3'>
                      
                          <p>{selectedJob.companyDetail || selectedJob.adminDetail}</p>
                       
                      </div>
                      </div>
                    )}
                    <div className='d-flex justify-content-between gap-5 mt-3 align-items-center' style={{maxWidth:'auto'}}>
                      <div>
                    {(selectedJob?.companyFile && selectedJob?.companyFileName) || (selectedJob?.adminFile && selectedJob?.adminFileName) ? (
                      <div className='d-flex my-2'>
                <p className='p-small'>
                    <i className='bi bi-file-earmark-text-fill' style={{ color: 'wine' }}></i> &nbsp;
                    <a href={selectedJob?.companyFile || selectedJob?.adminFile}>{selectedJob?.companyFileName || selectedJob.adminFileName}</a>
                    </p>
               </div> ): null }
               
              </div>
          
                    </div>
                  </div>
       
                </div>
              </div>
            </div>
          </div>
          <div className={`modal-backdrop fade ${showViewMoreModal ? 'show' : ''}`} style={{ display: showViewMoreModal ? 'block' : 'none' }}></div>
        </div>
      
      )}

      {/* request details modal */}
      {selectedJob && (
      <div>
 <div
   className={`modal fade px-2 px-md-0 ${showRequestDetailsModal ? 'show' : ''}`}
   style={{ display: showRequestDetailsModal ? 'block' : 'none' }}
   tabIndex='-1'
   role='dialog'
   aria-labelledby=''
   aria-hidden='true'
 >
   <div className='modal-dialog modal-lg modal-dialog-centered' role='document'>
     <div className='modal-content gap-3 p-3 p-sm-5'>
       <div className='modal-header'>
         <h5 className='modal-title' id='editPaymentModal' style={{ fontWeight: '600' }}>
         {selectedJob?.productId?.productName}
         </h5>

         <button type='button' className='btn-close' onClick={handleRequestDetailsClose}></button>
       </div>
       <div className='modal-body '>
         <h6 className='mb-2' style={{ color: '#5F5F5F' }}>
       
                {selectedJob?.productId?.productDescription}
               
               
         </h6>
         <p style={{color:'#5F5F5F'}}>
                {selectedJob?.detail}
                </p>
         <div className='form-group gap-2 mt-5'>
           <h6 name='exampleFormControlTextarea1' className='form-label'>
             Request more details
           </h6>
           <textarea className="form-control bg-white" id="exampleFormControlTextarea1" rows="8" placeholder='Start typing....' value={moreDetails} onChange={(event) => setMoreDetails(event.target.value)} required></textarea>
          
         </div>
         <div className='d-flex flex-column mt-5'>
           <button type='button' style={{ width: '250px' }} className='btn btn-primary mt-3 px-5' onClick={handleRequestDetailsSend}>
             Send
           </button>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div className={`modal-backdrop fade ${showRequestDetailsModal ? 'show' : ''}`} style={{ display: showRequestDetailsModal ? 'block' : 'none' }}></div>
        </div>)}

        <LoginModal
        showModal={showModal}
       isSuccess={isSuccessful}
        closeModal={()=> setShowModal(false)}
        modalText={message}
        
      />
    </div>
  )
}

export default LawyerDashboard
