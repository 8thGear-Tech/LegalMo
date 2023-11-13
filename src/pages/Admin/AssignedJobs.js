import React, { useState } from 'react'
import { lawyerLists } from './Lawyers';
import { Pagination } from '../../components/Buttons/Admin';
import AdminNavbar from '../../components/Navbar/AdminNavbar';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAppContext } from '../../AppContext';

const AssignedJobs = () => {
    const location = useLocation();
    const itemsPerPage = 5
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
  const jobId = queryParams.get('id');

  const jobName = queryParams.get('jobName');
  const jobDetails = queryParams.get('details');
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const {jobList, setJobList} = useAppContext();
const handleCheckboxChange = (lawyerId) => {
    setSelectedLawyer(lawyerId);
  };

  
  const handleAssignClick = () => {
 
  
    if (!selectedLawyer) {
      alert('Please select a lawyer to assign the job.');
      return;
    }
  
 
  
 
    const jobIndex = jobList.findIndex((job) => job.id === jobId);
  

    if (jobIndex !== -1) {
      const updatedJobList = [...jobList]; 
      updatedJobList[jobIndex].statusVerification = 'Pending'; 
  
  
  
      setJobList(updatedJobList);
     
    }

  
    const lawyerName = lawyerLists.find((lawyer) => lawyer.id === selectedLawyer).lawyerName;
    alert(`Job "${jobName}" has been assigned to Lawyer "${lawyerName}".`);
  
 
      navigate('/admin/jobs');
  };
  
 
    const [pagination, setPagination] = useState({
      currentPage: 1,
      itemsPerPage: 5,
    });

  
    const totalPages = Math.ceil(lawyerLists.length / pagination.itemsPerPage);
 
    const handlePageChange = (newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setPagination((prevState) => ({ ...prevState, currentPage: newPage }));
      }
    };
  
    const getCurrentPageData = () => {
      const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
      const endIndex = startIndex + pagination.itemsPerPage;
      return lawyerLists.slice(startIndex, endIndex);
    };
            
    return (
      <AdminNavbar>
        <div className='py-5 my-3 px-2 px-sm-3'>
            <div className='justify-content-center mx-5 px-lg-5 mb-5'>
                <div className='card gap-3 p-3 p-sm-5' style={{border:'none', backgroundColor:'#EEF1F6', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'}}>
                <h5 className='modal-title' id='editPaymentModal' style={{fontWeight:'600'}}>
                Details
              </h5>
    <h6 className='' style={{fontWeight:''}}>{jobDetails}</h6>
             
          
              
          
                </div>
            </div>
       
        <div className=' card p-3'>
            
       
      
        {getCurrentPageData().map((lawyer) => (
              <div key={lawyer.id} className='mb-4'>
             
 
            <div
                className='d-flex gap-5 py-3 px-0 px-md-3 align-items-center'
                style={{ borderBottom: '1px solid #CFCFCF' }}
              >
                        <input
            type="checkbox"
            value={lawyer.id}
            checked={selectedLawyer === lawyer.id}
            onChange={() => handleCheckboxChange(lawyer.id)}
          />

                <img src={lawyer.lawyerImage} alt={lawyer.lawyerName} className='img-fluid' style={{minWidth:'70px', maxWidth:'150px'}}/>
                <div className='d-block d-sm-flex justify-content-between gap-xl-5 gap-lg-4 gap-md-5 gap-sm-5'>
                <h6>{lawyer.lawyerName}</h6>
               
                <p style={{ color: '#373737' }}>{lawyer.snRegNo}</p>
                
                <p style={{ color: '#373737' }}>{lawyer.dateofReg}</p>
               
            
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

<div className='d-flex justify-content-end'>
    <button type='submit' className='btn btn-primary px-5' onClick={handleAssignClick}>ASSIGN</button>
</div>


        </div>

     
      </AdminNavbar>
    );
  };
export default AssignedJobs
