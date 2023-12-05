import React from 'react'
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import Footer from '../../components/Footer'
import dashboard from '../../assets/images/dashboard.svg'
import ratings from '../../assets/images/rating.svg'
import companies from '../../assets/images/companies.svg'
import lawyers from '../../assets/images/lawyers.svg'
import payment from '../../assets/images/payment.svg'
import jobs from '../../assets/images/jobs.svg'
import { Link } from 'react-router-dom'

const dashboardMenu=[
  {
    id:1,
    img:dashboard,
    text:'Dashboard',
    url:'/admin/dashboard',
  },
  {
    id:2,
    img:companies,
    text:'Companies',
    url:'/admin/companies',
  },
  {
    id:3,
    img:lawyers,
    text:'Lawyers',
    url:'/admin/lawyers',
  },
  {
    id:4,
    img:jobs,
    text:'Jobs',
    url:'/admin/jobs',
  },
  {
    id:5,
    img:payment,
    text:'Payments',
    url:'/admin/payment',
  },
  {
    id:6,
    img:ratings,
    text:'Ratings',
    url:'/admin/ratings',
  }
]

const AdminDashboard = () => {
  const firstRowMenu = dashboardMenu.slice(0, 3); 
  const secondRowMenu = dashboardMenu.slice(3);   
  return (
    <>
      <AdminNavbar>
        
        <div className='py-5 my-sm-5 px-md-5 px-3'>
          <div className='d-flex justify-content-end mb-5'> <Link to='/admin/new-product' className=' text-dark'>Create Product</Link></div>
         
          <div className='py-5 row row-cols-1 row-cols-sm-3 g-3 g-lg-5'>
            {firstRowMenu.map((menu) => {
              const { id, text, img, url } = menu;
              return (
                <div className='col' key={id}>
                  <Link
                    to={url}
                    className='card p-5 justify-content-center text-decoration-none align-items-center text-center text-align-center gap-5'
                    style={{
                      borderRadius: '20px',
                      background:
                        'linear-gradient(0deg, #FFF 0%, #FFF 100%), #FFF',
                      border: 'none',
                      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <img src={img} alt={text} style={{ width: '50px', height: '50px' }} />
                    <h6 style={{ fontWeight: '600' }}>{text}</h6>
                  </Link>
                </div>
              );
            })}
          </div>
       
            <div className='line' style={{ border: '3px solid #032773', marginTop: '20px' }}></div>
          

          {/* Second Row */}
          <div className='py-5 row row-cols-1 row-cols-sm-3 g-3 g-lg-5'>
            {secondRowMenu.map((menu) => {
              const { id, text, img, url } = menu;
              return (
                <div className='col' key={id}>
                  <Link
                    to={url}
                    className='card p-5 justify-content-center text-decoration-none align-items-center text-center text-align-center gap-5'
                    style={{
                      borderRadius: '20px',
                      background:
                        'linear-gradient(0deg, #FFF 0%, #FFF 100%), #FFF',
                      border: 'none',
                      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <img src={img} alt={text} style={{ width: '50px', height: '50px' }} />
                    <h6 style={{ fontWeight: '600' }}>{text}</h6>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </AdminNavbar>
     
    </>
  );
}

export default AdminDashboard
