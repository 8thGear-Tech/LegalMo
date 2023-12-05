import React, { useState, useEffect } from 'react';
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import profileImage from '../../assets/images/lawyer-admin.svg'
import { Pagination } from '../../components/Buttons/Admin';
import { ViewMoreModal } from '../../components/Cards/Admin';
import adminRoute from '../../services/adminRoute';
import { LoginModal } from '../../components/Forms/Authenticationforms';
import { useNavigate } from 'react-router-dom';



  const Lawyers = () => {
    const itemsPerPage = 5
    const [selectedLawyer, setSelectedLawyer] = useState(null)
    const [statusFilter, setStatusFilter] = useState('Verified');
    const [showViewMoreModal, setShowViewMoreModal] = useState(false);
    const {getVerifiedLawyers, getUnverifiedLawyers, verifyLawyer, getLawyer} = adminRoute();
    const navigate= useNavigate();
 
    const [pagination, setPagination] = useState({
      currentPage: 1,
      itemsPerPage: 5,
    });
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [isSuccessful, setIsSuccessful] = useState(false);
   const [details, setDetails]= useState([])
    const [lawyers, setLawyers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
  

      if (statusFilter === 'Verified') {
       
         getVerifiedLawyers(setMessage, setLoading, setIsSuccessful, setLawyers, setShowModal);
      } else if (statusFilter === 'Unverified') {
        
         getUnverifiedLawyers(setMessage, setLoading, setIsSuccessful, setLawyers, setShowModal);
      }
      
    }, [statusFilter]);
  
    const handleViewMoreShow = (selectedLawyer) => {
      setSelectedLawyer(selectedLawyer); 
      setShowViewMoreModal(true); 
    };
  const handleViewMoreClose = () => {
  setShowViewMoreModal(false);
  setSelectedLawyer(null)
  };
    const handleStatusFilterChange = (newStatus) => {
      setStatusFilter(newStatus);
     
      setPagination({ currentPage: 1, itemsPerPage: 5 });
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

     
    
    return (
      <AdminNavbar>
      <div className='py-5 my-3 px-lg-5 px-3'>
        {loading ? (
          <div className="text-center"style={{paddingTop:'150px', paddingBottom:'100px'}}>
            <div className="spinner-border" role="status" >
              <span className="visually-hidden" >Loading...</span>
            </div>
            <p>Loading lawyers...</p>
          </div>
        ) : (
          <div>
            <h4 style={{ fontWeight: '600' }} className='text-center mb-5'>
              Lawyers
            </h4>

            {lawyers.length === 0 ? (
              <div className="text-center mt-5">
                <p>No lawyers available.</p>
              </div>
            ) : (
              <div className=' card p-3'>
                <div className='d-flex gap-5 py-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
                  <button onClick={() => handleStatusFilterChange('Verified')}
                    className={statusFilter === 'Verified' ? 'verify-active me-md-5' : 'verify-button me-md-5'}>Verified</button>
                  <button onClick={() => handleStatusFilterChange('Unverified')}
                    className={statusFilter === 'Unverified' ? 'verify-active ' : 'verify-button '}>Unverified</button>
                </div>

                {getCurrentPageData().map((lawyer) => (
                  <div key={lawyer._id} className='mb-4'>
                     <div
                      className='row py-3 px-0 px-md-3 align-items-center d-sm-flex d-none'
                      style={{ borderBottom: '1px solid #CFCFCF' }}
                    >
<div className='col'>
                      <img src={lawyer?.profileImage?.url} alt={lawyer?.name} className='img-fluid' style={{ minWidth: '70px', maxWidth: '150px' }} />
                      </div>
                     
                        <h6 className='col'>{lawyer.name}</h6>

                        <p style={{ color: '#373737' }} className='col'>{lawyer.scn}</p>

                     {lawyer?.createdAt && <p style={{ color: '#373737' }}className='col'>{lawyer?.createdAt.split('T')[0]}</p>}
<div className='col'>
                        <button
                          style={{
                            color: '#02143A',
                            backgroundColor: 'transparent',
                            border: 'none',
                          }} onClick={() => handleViewMoreShow(lawyer)}
                          className='mb-2'
                        >
                          <h6>View more</h6>
                        </button>

                        </div>
                      {/* </div> */}

                    </div>
                    <div
                      className='d-flex gap-3 py-3 px-0 px-md-3 align-items-center d-sm-none'
                      style={{ borderBottom: '1px solid #CFCFCF' }}
                    >

                      <img src={lawyer?.profileImage?.url} alt={lawyer?.name} className='img-fluid' style={{ minWidth: '70px', maxWidth: '150px' }} />
                      <div className='d-block gap-2'>
                        <h6>{lawyer.name}</h6>

                        <p style={{ color: '#373737' }}>{lawyer.scn}</p>

                     {lawyer?.createdAt && <p style={{ color: '#373737' }}>{lawyer?.createdAt.split('T')[0]}</p>}

                        <button
                          style={{
                            color: '#02143A',
                            backgroundColor: 'transparent',
                            border: 'none',
                          }} onClick={() => handleViewMoreShow(lawyer)}
                          className='mb-2'
                        >
                          <h6>View more</h6>
                        </button>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            )}

            <Pagination
              pagination={pagination}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
            />

          </div>
        )}
        </div>
        <ViewMoreModal handleViewMoreClose={handleViewMoreClose} handleViewMoreShow={handleViewMoreShow} showViewMoreModal={showViewMoreModal}
        lawyer={selectedLawyer}
        handleVerify={handleVerify} handleLawyerProfileNavigation={handleLawyerProfileNavigation}/>
        <LoginModal
        showModal={showModal}
       isSuccess={isSuccessful}
        closeModal={()=> setShowModal(false)}
        modalText={message}
       
      />
      </AdminNavbar>
    
    );
  };
  
  export default Lawyers;
  
