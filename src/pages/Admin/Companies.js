import React, { useState } from 'react'
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import profileImage from '../../assets/images/adminprofile-lg.svg'
import { Link } from 'react-router-dom'
import { Pagination } from '../../components/Buttons/Admin'
import { ViewMoreModal } from '../../components/Cards/Admin';

const companyLists = [
  {
    id:1,
    companyName:'LegalMo',
    cacRegNo: 'CAC123',
    industry:'Law',
    dateofReg:'01/01/1999',
    companyImage: profileImage,
  },
  {
    id:2,
    companyName:'LegalMo',
    cacRegNo: 'CAC123',
    industry:'Law',
    dateofReg:'01/01/1999',
    companyImage: profileImage,
  },
  {
    id:3,
    companyName:'LegalMo',
    cacRegNo: 'CAC123',
    industry:'Law',
    dateofReg:'01/01/1999',
    companyImage: profileImage,
  },
  {
    id:4,
    companyName:'LegalMo',
    cacRegNo: 'CAC123',
    industry:'Law',
    dateofReg:'01/01/1999',
    companyImage: profileImage,
  },
  {
    id:5,
    companyName:'LegalMo',
    cacRegNo: 'CAC123',
    industry:'Law',
    dateofReg:'01/01/1999',
    companyImage: profileImage,
  },
  {
    id:6,
    companyName:'LegalMo',
    cacRegNo: 'CAC123',
    industry:'Law',
    dateofReg:'01/01/1999',
    companyImage: profileImage,
  },
  {
    id:7,
    companyName:'LegalMo',
    cacRegNo: 'CAC123',
    industry:'Law',
    dateofReg:'01/01/1999',
    companyImage: profileImage,
  },
  {
    id:8,
    companyName:'LegalMo',
    cacRegNo: 'CAC123',
    industry:'Law',
    dateofReg:'01/01/1999',
    companyImage: profileImage,
  },
  {
    id:9,
    companyName:'LegalMo',
    cacRegNo: 'CAC536',
    industry:'Law',
    dateofReg:'01/01/1999',
    companyImage: profileImage,
  },
  {
    id:10,
    companyName:'LegalMo',
    cacRegNo: 'CAC559',
    industry:'Law',
    dateofReg:'01/01/1999',
    companyImage: profileImage,
  },
  {
    id:11,
    companyName:'LegalMo',
    cacRegNo: 'CAC123',
    industry:'Law',
    dateofReg:'01/01/1999',
    companyImage: profileImage,
  },
  {
    id:12,
    companyName:'LegalMo',
    cacRegNo: 'CAC123',
    industry:'Law',
    dateofReg:'01/01/1999',
    companyImage: profileImage,
  },
  {
    id:13,
    companyName:'LegalMo',
    cacRegNo: 'CAC123',
    industry:'Law',
    dateofReg:'01/01/1999',
    companyImage: profileImage,
  },
  {
    id:14,
    companyName:'LegalMo',
    cacRegNo: 'CAC123',
    industry:'Law',
    dateofReg:'01/01/1999',
    companyImage: profileImage,
  },
  {
    id:15,
    companyName:'LegalMo',
    cacRegNo: 'CAC123',
    industry:'Law',
    dateofReg:'01/01/1999',
    companyImage: profileImage,
  }
]


const Companies = () => {

  const itemsPerPage = 5;
  const [pagination, setPagination] = useState({
    currentPage: 1,
    itemsPerPage: 5,
  });
  const [showViewMoreModal, setShowViewMoreModal] = useState(false);

  const totalPages = Math.ceil(companyLists.length / pagination.itemsPerPage);


  const displayedCompanies = () => {
    const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
    const endIndex = startIndex + pagination.itemsPerPage;
    return companyLists.slice(startIndex, endIndex);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPagination((prevState) => ({ ...prevState, currentPage: newPage }));
    }
  };
  const handleViewMoreShow= () => {
       
    setShowViewMoreModal(true);
  };
const handleViewMoreClose = () => {
setShowViewMoreModal(false);
};

  return (
    <AdminNavbar>
      <div className='py-5 my-3 px-lg-5 px-3'>
        <h4 style={{ fontWeight: '600' }} className='text-center mb-5'>
          Clients
        </h4>
        <div className='py-3'>
        {displayedCompanies().map((company)  => {
            return (
              <div key={company.id} className='mb-4'>
                <div
                  className='d-flex justify-content-between py-3 px-0 px-md-3 align-items-center'
                  style={{ borderBottom: '1px solid #CFCFCF' }}
                >
                 
                  <img src={company.companyImage} alt={company.companyName} className='img-fluid' style={{minWidth:'70px', maxWidth:'150px'}}/>
                  <div className='d-block d-sm-flex justify-content-between gap-xl-5 gap-lg-3 gap-md-5 gap-sm-3'>
                  <h6>{company.companyName}</h6>
                 
                  <p style={{ color: '#373737' }}>{company.cacRegNo}</p>
                  <p style={{ color: '#373737' }}>{company.industry}</p>
                  <p style={{ color: '#373737' }}>{company.dateofReg}</p>
                 
                  <button
                    style={{
                      color: '#02143A',
                      backgroundColor: 'transparent',
                      border: 'none',
                    }}
                    className='mb-2'
                  onClick={handleViewMoreShow}>
                    <h6>View more</h6>
                  </button>
                  </div>
              
              </div>
              </div>
            );
          })}
        </div>
      </div>

   
      <Pagination
       pagination={pagination}
  totalPages={totalPages}
  handlePageChange={handlePageChange}
 
/>
<ViewMoreModal handleViewMoreClose={handleViewMoreClose} handleViewMoreShow={handleViewMoreShow} showViewMoreModal={showViewMoreModal}/>
    </AdminNavbar>
  );
};

export default Companies;
