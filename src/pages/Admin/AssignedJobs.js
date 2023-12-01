import React, { useEffect, useState } from 'react'
import { lawyerLists } from './Lawyers';
import { Pagination } from '../../components/Buttons/Admin';
import AdminNavbar from '../../components/Navbar/AdminNavbar';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useAppContext } from '../../AppContext';
import adminRoute from '../../services/adminRoute';

const AssignedJobs = () => {
    const location = useLocation();
    const itemsPerPage = 5
    const navigate = useNavigate();
    const {getOneJob, getVerifiedLawyers,assignJob} = adminRoute()
    const [loading, setLoading] = useState(true);
    const [selectedJob, setSelectedJob] = useState(null);
    const [message, setMessage] = useState('');
    const [isSuccessful, setIsSuccessful] = useState(false);
   const [details, setDetails]= useState([])
    const [lawyers, setLawyers] = useState([]);
    const [showModal, setShowModal] = useState(false);
 
  const [selectedLawyer, setSelectedLawyer] = useState(null);


  const {jobId}= useParams();

  useEffect(()=>{
    getVerifiedLawyers(setMessage, setLoading, setIsSuccessful, setLawyers, setShowModal)
  },[])

  useEffect(()=>{
    getOneJob(
      setMessage, setLoading, setIsSuccessful, jobId,setSelectedJob
  );
  },[])
const handleCheckboxChange = (lawyerId) => {
    setSelectedLawyer(lawyerId);
    console.log(selectedLawyer,'selected lawyer')
  };

  
  const handleAssignClick = () => {
 
  
    if (!selectedLawyer) {
      alert('Please select a lawyer to assign the job.');
      return;
    }
  
  const body={
    jobId:jobId,
    lawyerId:selectedLawyer
  }
  
  console.log(body,'assignbody')
  assignJob(
    body,setMessage, setLoading, setIsSuccessful
  )
  };
  
 
    const [pagination, setPagination] = useState({
      currentPage: 1,
      itemsPerPage: 5,
    });

  
    const totalPages = Math.ceil(lawyers.length / pagination.itemsPerPage);
 
    const handlePageChange = (newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setPagination((prevState) => ({ ...prevState, currentPage: newPage }));
      }
    };
  
    const getCurrentPageData = () => {
      const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
      const endIndex = startIndex + pagination.itemsPerPage;
      return lawyers.slice(startIndex, endIndex);
    };
      
    if (loading) {
      return <div className='justify-content-center align-items-center text-center' style={{paddingTop:'300px'}}>
     <div className="spinner-border text-secondary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
          </div>; 
    }
          
    return (
      <AdminNavbar>
        <div className='py-5 my-3 px-2 px-sm-3'>
            <div className='justify-content-center mx-5 px-lg-5 mb-5'>
                <div className='card gap-3 p-3 p-sm-5' style={{border:'none', backgroundColor:'#EEF1F6', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'}}>
                <h5 className='modal-title' id='editPaymentModal' style={{fontWeight:'600'}}>
                Details
              </h5>
              <h6 className='' style={{fontWeight:''}}> {selectedJob?.productId?.productDescription}</h6>
    <h6 className='' style={{fontWeight:''}}>{selectedJob?.detail}</h6>
             
          
              
          
                </div>
            </div>
       
        <div className=' card p-3'>
            
       
      
        {getCurrentPageData().map((lawyer) => (
              <div key={lawyer._id} className='mb-4'>
             
 
            <div
                className='d-flex gap-5 py-3 px-0 px-md-3 align-items-center'
                style={{ borderBottom: '1px solid #CFCFCF' }}
              >
                        <input
            type="checkbox"
            value={lawyer._id}
            checked={selectedLawyer === lawyer._id}
            onChange={() => handleCheckboxChange(lawyer._id)}
          />

                <img src={lawyer?.profileImage?.url} alt={lawyer?.name} className='img-fluid' style={{minWidth:'70px', maxWidth:'150px'}}/>
                <div className='d-block d-sm-flex justify-content-between gap-xl-5 gap-lg-4 gap-md-5 gap-sm-5'>
                <h6>{lawyer?.name}</h6>
               
                <p style={{ color: '#373737' }}>{lawyer?.scn}</p>
                
                {lawyer?.createdAt && <p style={{ color: '#373737' }}>{lawyer?.createdAt.split('T')[0]}</p>}
               
            
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
