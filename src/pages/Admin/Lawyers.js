import React, { useState, useEffect } from 'react';
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import profileImage from '../../assets/images/lawyer-admin.svg'
import { Pagination } from '../../components/Buttons/Admin';
import { ViewMoreModal } from '../../components/Cards/Admin';
import adminRoute from '../../services/adminRoute';

export const lawyerLists = [
    {
      id:1,
      lawyerName:'Asher Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Verified',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:2,
      lawyerName:'Omoba Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Unverified',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:3,
      lawyerName:'Asher Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Verified',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:4,
      lawyerName:'Asher Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Unverified',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:5,
      lawyerName:'Asher Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Unverified',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:6,
      lawyerName:'Asher Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Verified',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:7,
      lawyerName:'Asher Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Unverified',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:8,
      lawyerName:'Asher Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Verified',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:9,
      lawyerName:'Asher Daniels',
      snRegNo: 'CAC536',
      statusVerification:'Verified',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:10,
      lawyerName:'Asher Daniels',
      snRegNo: 'CAC559',
      statusVerification:'Unverified',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:11,
      lawyerName:'Asher Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Verified',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:12,
      lawyerName:'Asher Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Verified',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:13,
      lawyerName:'Asher Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Verified',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:14,
      lawyerName:'Asher Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Unverified',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:15,
      lawyerName:'Lionel Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Verified',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    }
  ]




  const Lawyers = () => {
    const itemsPerPage = 5
    const [statusFilter, setStatusFilter] = useState('Verified');
    const [showViewMoreModal, setShowViewMoreModal] = useState(false);
    const {getVerifiedLawyers, getUnverifiedLawyers} = adminRoute();
 
    const [pagination, setPagination] = useState({
      currentPage: 1,
      itemsPerPage: 5,
    });
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [isSuccessful, setIsSuccessful] = useState(false);
   
    const [lawyers, setLawyers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
  

      if (statusFilter === 'Verified') {
       
         getVerifiedLawyers(setMessage, setLoading, setIsSuccessful, setLawyers, setShowModal);
      } else if (statusFilter === 'Unverified') {
        
         getUnverifiedLawyers(setMessage, setLoading, setIsSuccessful, setLawyers, setShowModal);
      }
      
    }, [statusFilter]);
  
    const handleViewMoreShow= () => {
       
      setShowViewMoreModal(true);
    };
  const handleViewMoreClose = () => {
  setShowViewMoreModal(false);
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
                      className='d-flex justify-content-between py-3 px-0 px-md-3 align-items-center'
                      style={{ borderBottom: '1px solid #CFCFCF' }}
                    >

                      <img src={profileImage} alt={lawyer.name} className='img-fluid' style={{ minWidth: '70px', maxWidth: '150px' }} />
                      <div className='d-block d-sm-flex justify-content-between gap-xl-5 gap-lg-3 gap-md-5 gap-sm-3'>
                        <h6>{lawyer.name}</h6>

                        <p style={{ color: '#373737' }}>{lawyer.scn}</p>

                        <p style={{ color: '#373737' }}>01/11/1999</p>

                        <button
                          style={{
                            color: '#02143A',
                            backgroundColor: 'transparent',
                            border: 'none',
                          }} onClick={handleViewMoreShow}
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
        <ViewMoreModal handleViewMoreClose={handleViewMoreClose} handleViewMoreShow={handleViewMoreShow} showViewMoreModal={showViewMoreModal}/>
      </AdminNavbar>
    
    );
  };
  
  export default Lawyers;
  
