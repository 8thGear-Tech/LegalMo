import React, { useRef, useState } from 'react';
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import jobImage from '../../assets/images/non-compliance.svg'
import { Pagination } from '../../components/Buttons/Admin';

const jobLists = [
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
    const [showModal, setShowModal] = useState(false);
    const [statusFilter, setStatusFilter] = useState('Unassigned');

 
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
    const handleShow = () => {
       
        setShowModal(true);
      };
   const handleClose = () => {
    setShowModal(false);
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
                  className='mb-2'
                >
                  <h6>View more</h6>
                </button>
                <button   onClick={handleShow}
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

        <div
        className={`modal fade px-2 ${showModal ? 'show' : ''}`}
        style={{ display: showModal ? 'block' : 'none' }}
        tabIndex='-1'
        role='dialog'
        aria-labelledby='editPaymentModal'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg modal-dialog-centered' role='document'>
          <div className='modal-content gap-3 p-3 p-sm-5'>
            <div className='modal-header'>
              <h5 className='modal-title' id='editPaymentModal' style={{fontWeight:'600'}}>
                Contract Drafting and Review
              </h5>
              
              <button type='button' className='btn-close' onClick={handleClose}></button>
            </div>
            <div className='modal-body '>
                <h6 className='mb-2' style={{color:'#5F5F5F'}}>We are looking for an employment law expert who will prepare and employment contract stating lorem ipsom lorem ipsom.....</h6>
             
              <div className='form-group gap-2 mt-5'>
              <h6 name="exampleFormControlTextarea1" className="form-label">Give more details</h6>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder='Start typing...' value={moreDetails} onChange={(event) => setMoreDetails(event.target.value)}></textarea>
              
              </div>
              <div className='d-flex flex-column mt-5'>
            <div className=''>
    <input
  type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
        accept=".pdf, .doc, .docx"
      />
     
      
     {!selectedFile && (
        <button
          className="d-flex gap-2 btn btn-outline-primary justify-content-center"
          onClick={handleUploadClick}
          style={{ width: '250px' }}
        >
          Upload Document
          <i className="bi bi-cloud-upload"></i>
        </button>
      )}

      {selectedFile && (
        <div className='d-flex my-2'>
          <p className=' p-small'> <i className="bi bi-file-earmark-text-fill" style={{color:'wine'}}></i> &nbsp;
         {selectedFile.name}
            <button className="btn btn-danger" onClick={handleDeleteClick}  style={{border:'none', backgroundColor:'transparent'}} >
              <i className="bi bi-trash" style={{color:'red', fill:"red"}}></i> 
            </button>
          </p>
        </div>
      )}
    </div>
              <button type='button' style={{ width: '250px' }} className='btn btn-primary mt-3 px-5' onClick={handleClose}>
                Send
              </button>
            </div>
            </div>
           
          </div>
        </div>
      </div>
      <div
        className={`modal-backdrop fade ${showModal ? 'show' : ''}`}
        style={{ display: showModal ? 'block' : 'none' }}
      ></div>
      </AdminNavbar>
    );
  };
  
  export default Jobs;
  
