import React, { useState, useEffect } from 'react'
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import profileImage from '../../assets/images/adminprofile-lg.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Pagination } from '../../components/Buttons/Admin'
import { ViewMoreModal } from '../../components/Cards/Admin';
import adminRoute from '../../services/adminRoute';

// const companyLists = [
//   {
//     id:1,
//     companyName:'LegalMo',
//     cacRegNo: 'CAC123',
//     industry:'Law',
//     dateofReg:'01/01/1999',
//     companyImage: profileImage,
//   },
//   {
//     id:2,
//     companyName:'LegalMo',
//     cacRegNo: 'CAC123',
//     industry:'Law',
//     dateofReg:'01/01/1999',
//     companyImage: profileImage,
//   },
//   {
//     id:3,
//     companyName:'LegalMo',
//     cacRegNo: 'CAC123',
//     industry:'Law',
//     dateofReg:'01/01/1999',
//     companyImage: profileImage,
//   },
//   {
//     id:4,
//     companyName:'LegalMo',
//     cacRegNo: 'CAC123',
//     industry:'Law',
//     dateofReg:'01/01/1999',
//     companyImage: profileImage,
//   },
//   {
//     id:5,
//     companyName:'LegalMo',
//     cacRegNo: 'CAC123',
//     industry:'Law',
//     dateofReg:'01/01/1999',
//     companyImage: profileImage,
//   },
//   {
//     id:6,
//     companyName:'LegalMo',
//     cacRegNo: 'CAC123',
//     industry:'Law',
//     dateofReg:'01/01/1999',
//     companyImage: profileImage,
//   },
//   {
//     id:7,
//     companyName:'LegalMo',
//     cacRegNo: 'CAC123',
//     industry:'Law',
//     dateofReg:'01/01/1999',
//     companyImage: profileImage,
//   },
//   {
//     id:8,
//     companyName:'LegalMo',
//     cacRegNo: 'CAC123',
//     industry:'Law',
//     dateofReg:'01/01/1999',
//     companyImage: profileImage,
//   },
//   {
//     id:9,
//     companyName:'LegalMo',
//     cacRegNo: 'CAC536',
//     industry:'Law',
//     dateofReg:'01/01/1999',
//     companyImage: profileImage,
//   },
//   {
//     id:10,
//     companyName:'LegalMo',
//     cacRegNo: 'CAC559',
//     industry:'Law',
//     dateofReg:'01/01/1999',
//     companyImage: profileImage,
//   },
//   {
//     id:11,
//     companyName:'LegalMo',
//     cacRegNo: 'CAC123',
//     industry:'Law',
//     dateofReg:'01/01/1999',
//     companyImage: profileImage,
//   },
//   {
//     id:12,
//     companyName:'LegalMo',
//     cacRegNo: 'CAC123',
//     industry:'Law',
//     dateofReg:'01/01/1999',
//     companyImage: profileImage,
//   },
//   {
//     id:13,
//     companyName:'LegalMo',
//     cacRegNo: 'CAC123',
//     industry:'Law',
//     dateofReg:'01/01/1999',
//     companyImage: profileImage,
//   },
//   {
//     id:14,
//     companyName:'LegalMo',
//     cacRegNo: 'CAC123',
//     industry:'Law',
//     dateofReg:'01/01/1999',
//     companyImage: profileImage,
//   },
//   {
//     id:15,
//     companyName:'LegalMo',
//     cacRegNo: 'CAC123',
//     industry:'Law',
//     dateofReg:'01/01/1999',
//     companyImage: profileImage,
//   }
// ]


const Companies = () => {

  const itemsPerPage = 5;
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [pagination, setPagination] = useState({
    currentPage: 1,
    itemsPerPage: 5,
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [details, setDetails]= useState([])
 const {getCompanies, getCompany} = adminRoute();
 const navigate= useNavigate();


  const [showViewMoreModal, setShowViewMoreModal] = useState(false);

      useEffect(() => {
       
        getCompanies(setMessage, setLoading, setIsSuccessful, setCompanies, setShowModal);
      }, []);
      
     



  const totalPages = companies ? Math.ceil(companies.length / pagination.itemsPerPage) : 0;


  const displayedCompanies = () => {
    if (companies === undefined) {
      return []; 
    }
    const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
    const endIndex = startIndex + pagination.itemsPerPage;
    return companies.slice(startIndex, endIndex);
  };
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPagination((prevState) => ({ ...prevState, currentPage: newPage }));
    }
  };
  const handleViewMoreShow = (selectedCompany) => {
    setSelectedCompany(selectedCompany); 
    setShowViewMoreModal(true); 
  };
const handleViewMoreClose = () => {
setShowViewMoreModal(false);
setSelectedCompany(null)
};

const handleCompanyProfileNavigation = (companyId) => {


  navigate(`/company/profile/${companyId}`)}




  return (
    <AdminNavbar>
      <div className='py-5 my-3 px-lg-5 px-3'>
      {loading ? (
          <div className="text-center"style={{paddingTop:'150px', paddingBottom:'100px'}}>
            <div className="spinner-border" role="status" >
              <span className="visually-hidden" >Loading...</span>
            </div>
            <p>Loading companies...</p>
          </div>
        ) :(
          <div>
        <h4 style={{ fontWeight: '600' }} className='text-center mb-5'>
          Clients
        </h4>
        {companies.length === 0 ? (
              <div className="text-center mt-5">
                <p>No companies available.</p>
              </div>
        ):(
        <div className='py-3'>
        {displayedCompanies().map((company)  => {
            return (
              <div key={company?._id} className='mb-4'>
                <div
                  className='d-flex gap-3 py-3 px-0 px-md-3 align-items-center'
                  style={{ borderBottom: '1px solid #CFCFCF' }}
                >
                 
                  <img src={company?.profileImage?.url} alt={company?.companyName} className='img-fluid' style={{width:'150px', height:'100px'}}/>
                  <div className='d-block d-sm-flex justify-content-between gap-xl-5 gap-lg-3 gap-md-5 gap-sm-3'>
                  <h6>{company?.companyName || company?.name}</h6>
                 
                  <p style={{ color: '#373737' }}>{company?.cac}</p>
                  <p style={{ color: '#373737' }}>{company?.industry}</p>
                  {/* <p style={{ color: '#373737' }}>{company.dateofReg}</p> */}
                  {company?.createdAt && <p style={{ color: '#373737' }}>{company.createdAt.split('T')[0]}</p>}

                 
                  <button
                    style={{
                      color: '#02143A',
                      backgroundColor: 'transparent',
                      border: 'none',
                    }}
                    className='mb-2'
                  onClick={()=> handleViewMoreShow(company)}>
                    <h6>View more</h6>
                  </button>
                 
                  </div>
              
              </div>
              </div>
            );
          })}
        </div>
        )}
      
      <Pagination
       pagination={pagination}
  totalPages={totalPages}
  handlePageChange={handlePageChange}/>
</div>
        )}
      </div>
        
<ViewMoreModal handleViewMoreClose={handleViewMoreClose} handleViewMoreShow={handleViewMoreShow} showViewMoreModal={showViewMoreModal} company={selectedCompany} handleCompanyProfileNavigation={handleCompanyProfileNavigation}/>
    </AdminNavbar>
  );
};

export default Companies;
