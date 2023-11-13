import React, { useRef, useState } from 'react';
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import jobImage from '../../assets/images/non-compliance.svg'
import { Pagination } from '../../components/Buttons/Admin';
import { ViewMoreModal } from '../../components/Cards/Admin';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../AppContext';
import adminRoute from '../../services/adminRoute';

  const Jobs = () => {
    const {jobList, setJobList} = useAppContext();
    const itemsPerPage = 5
    const [newDetails, setNewDetails] = useState('');
    const [selectedJob, setSelectedJob] = useState(null);
    const [showMoreDetailsModal, setShowMoreDetailsModal] = useState(false);
    const [showViewMoreModal, setShowViewMoreModal] = useState(false);
    const [statusFilter, setStatusFilter] = useState('Unassigned');
   
  

  const [jobDetails, setJobDetails] = useState({});
  const [jobFiles, setJobFiles] = useState({});
  const {getPendingJobs, getUnassignedJobs, getCompletedJobs} = adminRoute();
 
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
 
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);


 
    const [pagination, setPagination] = useState({
      currentPage: 1,
      itemsPerPage: 5,
    });


    const fileInputRef = useRef(null);
   
    const [selectedFile, setSelectedFile] = useState(null);

    
    // useEffect(() => {
      
    //   if (statusFilter === 'Unassigned') {
       
    //      getUnassignedJobs(setMessage, setLoading, setIsSuccessful, setJobs, setShowModal);
    //   } else if (statusFilter === 'Pending') {
        
    //      getPendingJobs(setMessage, setLoading, setIsSuccessful, setJobs, setShowModal);
    //   }else if (statusFilter === 'Completed') {
        
    //     getCompletedJobs(setMessage, setLoading, setIsSuccessful, setJobs, setShowModal);
    //  }
      
    // }, [statusFilter]);


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

     
       
const handleMoreDetailsClose = () => {
  setSelectedJob(null)
  setShowMoreDetailsModal(false);
};

const handleMoreDetailsShow = (job) => {
  setSelectedJob(job);
  setNewDetails(job.initialDetails);
  setShowMoreDetailsModal(true);
  
  setSelectedFile(job.uploadedFile); 
};



const handleMoreDetailsSend = () => {
  if (selectedJob) {
    selectedJob.initialDetails = newDetails;
    selectedJob.uploadedFile = selectedFile; 
  }

  setShowMoreDetailsModal(false);
};


const handleViewMoreShow = (job) => {
 
  setSelectedJob(job);
  setShowViewMoreModal(true);
  setSelectedFile(job.uploadedFile); 
};


  const handleViewMoreClose = () => {
    setShowViewMoreModal(false);
    setSelectedJob(null)
  };
    const handleStatusFilterChange = (newStatus) => {
      setStatusFilter(newStatus);
     
      setPagination({ currentPage: 1, itemsPerPage: 5 });
    };
  
    const filteredJobs = jobList.filter(
      (job) => job.statusVerification === statusFilter
       
    );
  
    const totalPages = Math.ceil(filteredJobs.length / pagination.itemsPerPage);
 
    const handlePageChange = (newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setPagination((prevState) => ({ ...prevState, currentPage: newPage }));
      }
    };
  
    const getCurrentPageData = () => {
      const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
      const endIndex = startIndex + pagination.itemsPerPage;
      return filteredJobs.slice(startIndex, endIndex);
    };
   
            
    return (
      <AdminNavbar>
        <div className='py-5 my-3 px-2 px-sm-3'>
        <h4 style={{ fontWeight: '600' }} className='text-center mb-5'>
          Jobs
        </h4>
        <div className=' card p-3'>
            <div className='d-flex gap-2 gap-sm-5 py-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
          <button onClick={() => handleStatusFilterChange('Unassigned')}
          className={statusFilter === 'Unassigned' ? 'verify-active' : 'verify-button'}>Unassigned Jobs</button>
          <button  onClick={() => handleStatusFilterChange('Pending')}
          className={statusFilter === 'Pending' ? 'verify-active' : 'verify-button'}>Pending jobs</button>
          <button  onClick={() => handleStatusFilterChange('Completed')}
          className={statusFilter === 'Completed' ? 'verify-active' : 'verify-button'}>Completed jobs</button>
           </div>
       
      
          {getCurrentPageData().map((job) => (
            
              <div key={job.id} className='mb-4'>
              <div
                className='d-flex justify-content-between gap-5 gap-sm-3 py-3  align-items-center'
                style={{ borderBottom: '1px solid #CFCFCF' }}
              >
               
                <img src={job.jobImage} alt={job.jobName} className='img-fluid' style={{minWidth:'70px', maxWidth:'150px'}}/>
                <div className='d-block d-sm-flex justify-content-between gap-xl-4 gap-lg-3 gap-md-4 gap-sm-3 align-items-center'>
                <h6>{job.jobName}</h6>
               
                <h6 style={{ color: '#373737' }}>{job.jobPrice}</h6>
                
               
               
                <button
                  style={{
                    color: '#02143A',
                    backgroundColor: 'transparent',
                    border: 'none',
                  }}
                  className='mb-2' onClick={() => handleViewMoreShow(job)}
                >
                  <h6>View more</h6>
                </button>
                <button  onClick={() => handleMoreDetailsShow(job)}
                  style={{
                    color: '#02143A',
                    backgroundColor: 'transparent',
                    border: 'none',
                  }}
                  className='mb-2'
                >
                  <h6>Add details</h6>
                </button>
                </div>
            
            </div>
            </div>
          ))}
       </div>
     
       <Pagination
       pagination={pagination}
  totalPages={totalPages}
  handlePageChange={handlePageChange}
 
/>


        </div>

      {/* view more modal */}
      {selectedJob && (
          <div>
          <div
            className={`modal fade px-2 ${showViewMoreModal ? 'show' : ''}`}
            style={{ display: showViewMoreModal ? 'block' : 'none' }}
            tabIndex='-1'
            role='dialog'
            aria-labelledby=''
            aria-hidden='true'
          >
            <div className='modal-dialog modal-lg modal-dialog-centered' role='document'>
              <div className='modal-content gap-3 p-3 p-sm-5'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='' style={{ fontWeight: '600' }}>
                  {selectedJob ? selectedJob.jobName : ''}
                  </h5>
      
                  <button type='button' className='btn-close' onClick={handleViewMoreClose}></button>
                </div>
                <div className='modal-body '>
                 
                  <h6 className='mb-2' style={{ color: '#5F5F5F' }}>
                    We are looking for an employment law expert who will prepare an employment contract .
                  </h6>
      
                  <div className='form-group gap-2 mt-5'>
                    <h6 name='exampleFormControlTextarea1' className='form-label'>
                      Details
                    </h6>
                    <div className='card p-3'>
                      <div>
                        <p>{selectedJob.initialDetails}</p>
                      </div>
                    </div>
                    <div className='d-flex justify-content-between mt-3'>
                      <div>
                    {selectedFile && selectedFile.name && (
                <p>
                  <i className='bi bi-file-earmark-text-fill' style={{ color: 'wine' }}></i> &nbsp;
                  {selectedFile.name}
                </p>
              )}
              </div>
              <div>
                      {selectedJob.statusVerification === 'Unassigned' && (
                        <Link
                        to={`/admin/assign-job?id=${selectedJob.id}&details=${encodeURIComponent(selectedJob.initialDetails)}&jobName=${encodeURIComponent(selectedJob.jobName)}`}
                        className='text-dark'
                      >
                        Assign
                      </Link>
                      )}
                      {(selectedJob.statusVerification === 'Pending' || selectedJob.statusVerification === 'Completed') && (
                        <Link className='text-dark'>Assigned to Asher Daniels</Link>
                      )}
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
  

   {/* More details modal      */}
  {selectedJob && (
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
           We are looking for an employment law expert who will prepare an employment contract stating lorem ipsum lorem ipsum.....
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

  )}
   
   
      </AdminNavbar>
    );
  }; 


  export default Jobs;
  
