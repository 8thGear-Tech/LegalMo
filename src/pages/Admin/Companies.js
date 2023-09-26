import React, { useState } from 'react'
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import profileImage from '../../assets/images/adminprofile-lg.svg'
import { Link } from 'react-router-dom'


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


  const [currentPage, setCurrentPage] = useState(1);


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

 
  const displayedCompanies = companyLists.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(companyLists.length / itemsPerPage)) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <AdminNavbar>
      <div className='py-5 my-3 px-lg-5 px-3'>
        <h4 style={{ fontWeight: '600' }} className='text-center mb-5'>
          Clients
        </h4>
        <div className='py-3'>
          {displayedCompanies.map((company) => {
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
                  >
                    <h6>View more</h6>
                  </button>
                  </div>
              
              </div>
              </div>
            );
          })}
        </div>
      </div>

   
      <nav aria-label='Page navigation' className='mb-5'>
        <ul className='pagination justify-content-center'>
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button
              className='page-link align-items-center'
              onClick={handlePreviousPage}
              style={{ margin: '0 10px',
              boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)', fontWeight:''}}
            >
              <h6><i className="bi bi-chevron-left"></i></h6>
              
            </button>
          </li>
          {Array.from({ length: Math.ceil(companyLists.length / itemsPerPage) }).map((_, index) => (
            <li
              key={index}
              className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
            >
              <button
                className='page-link align-items-center'
                onClick={() => handlePageChange(index + 1)}
                style={{ margin: '0 10px' , border: '1px solid #000',
                boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)', fontWeight:'700'}}
              >
                <h6>{index + 1}</h6>
                
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === Math.ceil(companyLists.length / itemsPerPage)
                ? 'disabled'
                : ''
            }`}
          >
            <button
              className='page-link align-items-center'
              onClick={handleNextPage}
              style={{ margin: '0 10px',
              boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)', fontWeight:''}}
            >
            <h6><i className="bi bi-chevron-right"></i></h6>
            </button>
          </li>
        </ul>
      </nav>
    </AdminNavbar>
  );
};

export default Companies;
