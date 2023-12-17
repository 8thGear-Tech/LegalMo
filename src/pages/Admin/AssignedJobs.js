import React, { useEffect, useState } from 'react'
import { lawyerLists } from './Lawyers';
import { Pagination } from '../../components/Buttons/Admin';
import AdminNavbar from '../../components/Navbar/AdminNavbar';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useAppContext } from '../../AppContext';
import adminRoute from '../../services/adminRoute';
import { ViewMoreModal } from '../../components/Cards/Admin';

const AssignedJobs = () => {
    const location = useLocation();
    const itemsPerPage = 5
    const navigate = useNavigate();
    const {getOneJob, getVerifiedLawyers,assignJob, verifyLawyer} = adminRoute()
    const [loading, setLoading] = useState(true);
    const [selectedJob, setSelectedJob] = useState(null);
    const [message, setMessage] = useState('');
    const [isSuccessful, setIsSuccessful] = useState(false);
   const [details, setDetails]= useState([])
    const [lawyers, setLawyers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [statusFilter, setStatusFilter] = useState('Applied Lawyers');
  const [selectedLawyer, setSelectedLawyer] = useState(null);
 
  const [showViewMoreModal, setShowViewMoreModal] = useState(false);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    itemsPerPage: 5,
  });

  const {jobId}= useParams();



  useEffect(() => {
  

    if (statusFilter === 'Verified Lawyers') {
     
       getVerifiedLawyers(setMessage, setLoading, setIsSuccessful, setLawyers, setShowModal);
    } else if (statusFilter === 'Applied Lawyers') {
      getOneJob(
        setMessage, setLoading, setIsSuccessful, jobId,setSelectedJob
    );
    }
    
  }, [statusFilter]);

 

  useEffect(()=>{
    getOneJob(
      setMessage, setLoading, setIsSuccessful, jobId,setSelectedJob
  );
  },[])

  useEffect(() => {
    if (statusFilter === 'Applied Lawyers' && selectedJob && selectedJob?.appliedLawer) {
      setLawyers(selectedJob.appliedLawer); // 
    }
  }, [selectedJob, statusFilter]);

const handleCheckboxChange = (lawyerId) => {
    setSelectedLawyer(lawyerId);
  
  };
  const handleStatusFilterChange = (newStatus) => {
    setStatusFilter(newStatus);
   
    setPagination({ currentPage: 1, itemsPerPage: 5 });
  };
  const handleViewMoreShow = (selectedLawyer) => {
    setSelectedLawyer(selectedLawyer); 
    setShowViewMoreModal(true); 
  };
const handleViewMoreClose = () => {
setShowViewMoreModal(false);
setSelectedLawyer(null)
};

const handleVerify= (lawyerId) => {

  verifyLawyer(
    setMessage, setLoading, setIsSuccessful, lawyerId, setShowModal
   
  )
  const updatedLawyers = lawyers.filter(lawyer => lawyer._id !== lawyerId);
  setLawyers(updatedLawyers);

}

const handleLawyerProfileNavigation = (lawyerId) => {


  navigate(`/lawyer/profile/${lawyerId}`)
}
  
  const handleAssignClick = () => {
 
  
    if (!selectedLawyer) {
      alert('Please select a lawyer to assign the job.');
      return;
    }

    if (selectedLawyer?.verified === 'false') {
      setShowViewMoreModal(true); 
      setSelectedLawyer(selectedLawyer);
    } else {
      const body={
        jobId:jobId,
        lawyerId:selectedLawyer
      }
    
      assignJob(
        body,setMessage, setLoading, setIsSuccessful
      )
    }
  
 
  };
  
 
   

  
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
            
        <div className='d-flex gap-5 py-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
                  <button onClick={() => handleStatusFilterChange('Applied Lawyers')}
                    className={statusFilter === 'Applied Lawyers' ? 'verify-active me-md-5' : 'verify-button me-md-5'}>Applied Lawyers</button>
                  <button onClick={() => handleStatusFilterChange('Verified Lawyers')}
                    className={statusFilter === 'Verified Lawyers' ? 'verify-active ' : 'verify-button '}>Verified Lawyers</button>
                </div>
                {lawyers.length === 0 ? (
              <div className="text-center mt-5">
                <p>No lawyers available.</p>
              </div>
            ) : (
              <div>
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
            )}
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
        <ViewMoreModal handleViewMoreClose={handleViewMoreClose} handleViewMoreShow={handleViewMoreShow} showViewMoreModal={showViewMoreModal}
        lawyer={selectedLawyer}
        handleVerify={handleVerify} handleLawyerProfileNavigation={handleLawyerProfileNavigation}/>

     
      </AdminNavbar>
    );
  };
export default AssignedJobs
