import React, { useState } from 'react';
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import profileImage from '../../assets/images/lawyer-admin.svg'
import { Pagination } from '../../components/Buttons/Admin';
import { ViewMoreModal } from '../../components/Cards/Admin';

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
 
    const [pagination, setPagination] = useState({
      currentPage: 1,
      itemsPerPage: 5,
    });
  
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
  
    const filteredLawyers = lawyerLists.filter(
      (lawyer) => lawyer.statusVerification === statusFilter
    );
  
    const totalPages = Math.ceil(filteredLawyers.length / pagination.itemsPerPage);
 
    const handlePageChange = (newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setPagination((prevState) => ({ ...prevState, currentPage: newPage }));
      }
    };
  
    const getCurrentPageData = () => {
      const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
      const endIndex = startIndex + pagination.itemsPerPage;
      return filteredLawyers.slice(startIndex, endIndex);
    };
            
    return (
      <AdminNavbar>
        <div className='py-5 my-3 px-lg-5 px-3'>
        <h4 style={{ fontWeight: '600' }} className='text-center mb-5'>
          Lawyers
        </h4>
        <div className=' card p-3'>
            <div className='d-flex gap-5 py-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
          <button onClick={() => handleStatusFilterChange('Verified')}
          className={statusFilter === 'Verified' ? 'verify-active me-md-5' : 'verify-button me-md-5'}>Verified</button>
          <button  onClick={() => handleStatusFilterChange('Unverified')}
          className={statusFilter === 'Unverified' ? 'verify-active ' : 'verify-button '}>Unverified</button>
           </div>
       
      
          {getCurrentPageData().map((lawyer) => (
              <div key={lawyer.id} className='mb-4'>
              <div
                className='d-flex justify-content-between py-3 px-0 px-md-3 align-items-center'
                style={{ borderBottom: '1px solid #CFCFCF' }}
              >
               
                <img src={lawyer.lawyerImage} alt={lawyer.lawyerName} className='img-fluid' style={{minWidth:'70px', maxWidth:'150px'}}/>
                <div className='d-block d-sm-flex justify-content-between gap-xl-5 gap-lg-3 gap-md-5 gap-sm-3'>
                <h6>{lawyer.lawyerName}</h6>
               
                <p style={{ color: '#373737' }}>{lawyer.snRegNo}</p>
                
                <p style={{ color: '#373737' }}>{lawyer.dateofReg}</p>
               
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
     
       <Pagination
       pagination={pagination}
  totalPages={totalPages}
  handlePageChange={handlePageChange}
 
/>

        </div>
        <ViewMoreModal handleViewMoreClose={handleViewMoreClose} handleViewMoreShow={handleViewMoreShow} showViewMoreModal={showViewMoreModal}/>
      </AdminNavbar>
    );
  };
  
  export default Lawyers;
  
