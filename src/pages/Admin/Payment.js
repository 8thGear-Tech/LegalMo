import React, { useState } from 'react';
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import profileImage from '../../assets/images/lawyer-admin.svg'
import { Pagination } from '../../components/Buttons/Admin';

const paymentLists = [
    {
      id:1,
      lawyerName:'Asher Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Pending',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:2,
      lawyerName:'Omoba Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Pending',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:3,
      lawyerName:'Asher Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Completed',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:4,
      lawyerName:'Asher Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Pending',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:5,
      lawyerName:'Asher Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Completed',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:6,
      lawyerName:'Asher Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Pending',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:7,
      lawyerName:'Asher Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Completed',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:8,
      lawyerName:'Asher Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Pending',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:9,
      lawyerName:'Asher Daniels',
      snRegNo: 'CAC536',
      statusVerification:'Completed',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:10,
      lawyerName:'Asher Daniels',
      snRegNo: 'CAC559',
      statusVerification:'Completed',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:11,
      lawyerName:'Asher Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Pending',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:12,
      lawyerName:'Asher Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Pending',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:13,
      lawyerName:'Asher Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Pending',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:14,
      lawyerName:'Asher Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Completed',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    },
    {
      id:15,
      lawyerName:'Lionel Daniels',
      snRegNo: 'SCN123',
      statusVerification:'Pending',
      dateofReg:'01/01/1999',
     lawyerImage: profileImage,
    }
  ]




  const Payments = () => {
    const itemsPerPage = 5
    const [statusFilter, setStatusFilter] = useState('Pending');
 
    const [pagination, setPagination] = useState({
      currentPage: 1,
      itemsPerPage: 5,
    });
  
  
    const handleStatusFilterChange = (newStatus) => {
      setStatusFilter(newStatus);
     
      setPagination({ currentPage: 1, itemsPerPage: 5 });
    };
  
    const filteredPayments = paymentLists.filter(
      (payment) => payment.statusVerification === statusFilter
    );
  
    const totalPages = Math.ceil(filteredPayments.length / pagination.itemsPerPage);
 
    const handlePageChange = (newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setPagination((prevState) => ({ ...prevState, currentPage: newPage }));
      }
    };
  
    const getCurrentPageData = () => {
      const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
      const endIndex = startIndex + pagination.itemsPerPage;
      return filteredPayments.slice(startIndex, endIndex);
    };
            
    return (
      <AdminNavbar>
        <div className='py-5 my-3 px-lg-5 px-3'>
        <h4 style={{ fontWeight: '600' }} className='text-center mb-5'>
          Payments
        </h4>
        <div className=' card p-3'>
            <div className='d-flex gap-5 py-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
          <button onClick={() => handleStatusFilterChange('Pending')}
          className={statusFilter === 'Pending' ? 'verify-active me-md-5' : 'verify-button me-md-5'}>Pending</button>
          <button  onClick={() => handleStatusFilterChange('Completed')}
          className={statusFilter === 'Completed' ? 'verify-active' : 'verify-button'}>Completed</button>
           </div>
       
      
          {getCurrentPageData().map((payment) => (
              <div key={payment.id} className='mb-4'>
              <div
                className='d-flex gap-5 py-3 px-0 px-md-3 align-items-center'
                style={{ borderBottom: '1px solid #CFCFCF' }}
              >
               
                <img src={payment.lawyerImage} alt={payment.lawyerName} className='img-fluid' style={{minWidth:'70px', maxWidth:'150px'}}/>
                <div className='d-block d-sm-flex justify-content-between gap-xl-5 gap-lg-4 gap-md-5 gap-sm-5'>
                <h6>{payment.lawyerName}</h6>
               
                <p style={{ color: '#373737' }}>{payment.snRegNo}</p>
                
                <p style={{ color: '#373737' }}>{payment.dateofReg}</p>
               
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
<div className='card p-sm-5 p-3 gap-5'>
  <h4 className='text-center'>Notifications</h4>
  <div className='d-block d-md-flex justify-content-between align-items-center'>
    <div className='d-flex flex-column gap-3'>
      <h6>Contract Drafting and Review</h6>
      <p style={{color:'#5F5F5F'}}>We are looking for an employment law expert</p>
    </div>
    <div style={{ height:'auto'}}>
    <button type='submit' className='btn btn-outline-primary' >View</button>
    </div>
    
  </div>
</div>

        </div>
      </AdminNavbar>
    );
  };
  
  export default Payments;
  
