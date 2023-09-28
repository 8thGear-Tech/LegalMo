import React, { useRef, useState } from 'react';
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import jobImage from '../../assets/images/non-compliance.svg'
import { Pagination } from '../../components/Buttons/Admin';
import { ViewMoreModal } from '../../components/Cards/Admin';
import { Link } from 'react-router-dom';

export const jobLists = [
    {
      id:1,
      jobName:'Contract Drafting and Review',
      jobPrice: 'N100,000',
      statusVerification:'Unassigned',
     jobImage: jobImage,
    },
    {
      id:2,
      jobName:'Contract Drafting and Review',
      jobPrice: 'N100,000',
      statusVerification:'Pending',
     jobImage: jobImage,
    },
    {
      id:3,
      jobName:'Contract Drafting and Review',
      jobPrice: 'N100,000',
      statusVerification:'Unassigned',
     jobImage: jobImage,
    },
    {
      id:4,
      jobName:'Contract Drafting and Review',
      jobPrice: 'N100,000',
      statusVerification:'Pending',
     jobImage: jobImage,
    },
    {
      id:5,
      jobName:'Contract Drafting and Review',
      jobPrice: 'N100,000',
      statusVerification:'Completed',
     jobImage: jobImage,
    },
    {
      id:6,
      jobName:'Contract Drafting and Review',
      jobPrice: 'N100,000',
      statusVerification:'Pending',
     jobImage: jobImage,
    },
    {
      id:7,
      jobName:'Contract Drafting and Review',
      jobPrice: 'N100,000',
      statusVerification:'Unassigned',
     jobImage: jobImage,
    },
    {
      id:8,
      jobName:'Contract Drafting and Review',
      jobPrice: 'N100,000',
      statusVerification:'Pending',
     jobImage: jobImage,
    },
    {
      id:9,
      jobName:'Contract Drafting and Review',
      jobPrice: 'N100,000',
      statusVerification:'Completed',
     jobImage: jobImage,
    },
    {
      id:10,
      jobName:'Contract Drafting and Review',
      jobPrice: 'N100,000',
      statusVerification:'Unassigned',
     jobImage: jobImage,
    },
    {
      id:11,
      jobName:'Contract Drafting and Review',
      jobPrice: 'N100,000',
      statusVerification:'Unassigned',
     jobImage: jobImage,
    },
    {
      id:12,
      jobName:'Contract Drafting and Review',
      jobPrice: 'N100,000',
      statusVerification:'Completed',
     jobImage: jobImage,
    },
    {
      id:13,
      jobName:'Contract Drafting and Review',
      jobPrice: 'N100,000',
      statusVerification:'Unassigned',
     jobImage: jobImage,
    },
    {
      id:14,
      jobName:'Contract Drafting and Review',
      jobPrice: 'N100,000',
      statusVerification:'Completed',
     jobImage: jobImage,
    },
    {
      id:15,
      jobName:'Contract Drafting and Review',
      jobPrice: 'N100,000',
      statusVerification:'Completed',
     jobImage: jobImage,
    },
    {
        id:16,
        jobName:'Contract Drafting and Review',
        jobPrice: 'N100,000',
        statusVerification:'Pending',
       jobImage: jobImage,
      },
      {
        id:17,
        jobName:'Contract Drafting and Review',
        jobPrice: 'N100,000',
        statusVerification:'Unassigned',
       jobImage: jobImage,
      },
      {
        id:18,
        jobName:'Contract Drafting and Review',
        jobPrice: 'N100,000',
        statusVerification:'Completed',
       jobImage: jobImage,
      },
      {
        id:19,
        jobName:'Contract Drafting and Review',
        jobPrice: 'N100,000',
        statusVerification:'Pending',
       jobImage: jobImage,
      },
      {
        id:20,
        jobName:'Contract Drafting and Review',
        jobPrice: 'N100,000',
        statusVerification:'Completed',
       jobImage: jobImage,
      },
  ]




  const Jobs = () => {
    const itemsPerPage = 5
    const [moreDetails, setMoreDetails] = useState('');
    const [selectedJob, setSelectedJob] = useState(null);
    const [showMoreDetailsModal, setShowMoreDetailsModal] = useState(false);
    const [showViewMoreModal, setShowViewMoreModal] = useState(false);
    const [statusFilter, setStatusFilter] = useState('Unassigned');
    const [initialDetails, setInitialDetails] = useState(`
    We are in need of:
    
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  `);
  const [updatedDetails, setUpdatedDetails] = useState(initialDetails);
const [updatedFileName, setUpdatedFileName] = useState('');
  const [moreDetailsModalText, setMoreDetailsModalText] = useState('');


  const [moreDetailsModalFileName, setMoreDetailsModalFileName] = useState('');

 
    const [pagination, setPagination] = useState({
      currentPage: 1,
      itemsPerPage: 5,
    });

    const fileInputRef = useRef(null);
    const [selectedFileName, setSelectedFileName] = useState(null);
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
 
  setMoreDetailsModalText(updatedDetails || initialDetails);
  setShowMoreDetailsModal(true);
};

const handleMoreDetailsClose = () => {
  setShowMoreDetailsModal(false);
};

const handleMoreDetailsSend = () => {
 
  setUpdatedDetails(moreDetailsModalText);
  setUpdatedFileName(selectedFile.name);

 
  setShowMoreDetailsModal(false);
};

// ...

  const handleViewMoreShow = (job) => {
    setSelectedJob(job);
  
    setMoreDetailsModalFileName(job.moreDetailsFileName || '');
    setMoreDetailsModalText(job.moreDetails || initialDetails);
  
    setShowViewMoreModal(true);
  };
  

  const handleViewMoreClose = () => {
    setShowViewMoreModal(false);
  };
    const handleStatusFilterChange = (newStatus) => {
      setStatusFilter(newStatus);
     
      setPagination({ currentPage: 1, itemsPerPage: 5 });
    };
  
    const filteredJobs = jobLists.filter(
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
                <button   onClick={handleMoreDetailsShow}
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
              Contract Drafting and Review
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
                  <p>{updatedDetails}</p>
                </div>
              </div>
              <div className='d-flex justify-content-between mt-3'>
                <p>{updatedFileName}</p>
                {selectedJob.statusVerification === 'Unassigned' && (
                  <Link to='/admin/assign-job' className='text-dark'>
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
    <div className={`modal-backdrop fade ${showViewMoreModal ? 'show' : ''}`} style={{ display: showViewMoreModal ? 'block' : 'none' }}></div>
  </div>
)}

   {/* More details modal      */}
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
                Contract Drafting and Review
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
                  id='exampleFormControlTextarea1'
                  rows='8'
                  placeholder='Start typing...'
                  value={moreDetailsModalText}
                  onChange={(event) => setMoreDetailsModalText(event.target.value)}
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
      </AdminNavbar>
    );
  };
  
  export default Jobs;
  
