import React, { useState } from 'react'
import profileImage from '../../assets/images/adminprofile.png'
import Footer from '../Footer';
import { NavLink, Link } from 'react-router-dom';
import dashboard from '../../assets/images/dashboard-s.svg'
import ratings from '../../assets/images/rating-s.svg'
import companies from '../../assets/images/companies-s.svg'
import lawyers from '../../assets/images/lawyers-s.svg'
import payment from '../../assets/images/payment-s.svg'
import jobs from '../../assets/images/jobs-s.svg'

import legalMoLogo from "../../assets/images/legalmologo.svg";
import { NavLoginbtn } from '../Buttons/Navbarbtns';


function SidebarLink({ to, text, src }) {
    return (
      <li className="nav-item px-lg-2 py-lg-3 py-1" style={{borderBottom:'1px solid #FFF', borderTop:'1px solid #FFF'}}>
        
        <NavLink className="nav-link text-white gap-2 align-items-center" to={to}>
        <img src={src} alt={text} style={{width:'24px'}}/> &nbsp; &nbsp;{text}
        </NavLink>
      </li>
    );
  }

const AdminNavbar = ({children}) => {
   
  return (

    <div className="">
        {/* Top Navbar */}
        <nav className="navbar navbar-expand-lg navbar-special guest-navbar fixed-top">
  <div className="container-fluid ">
    <a className="navbar-brand mx-3"><img src={legalMoLogo} alt="legalMoLogo"/></a>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
  </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 gap-2 gap-lg-4 d-block d-lg-none ">
      
      <SidebarLink to="/admin/dashboard" text="Dashboard" src={dashboard}/>
              <SidebarLink to="/admin/companies" text="Companies" src={companies} />
              <SidebarLink to="/admin/lawyers" text="Lawyers" src={lawyers} />
              <SidebarLink to="/admin/jobs" text="Jobs" src={jobs}/>
              <SidebarLink to="/admin/payment" text="Payment" src={payment}/>
              <SidebarLink to="/admin/ratings" text="Ratings" src={ratings}/>
      
      </ul>
    

                <ul className="navbar-nav d-block d-lg-flex gap-3 align-items-center ms-auto me-3">

                <li className="nav-item my-lg-0 d-none d-lg-flex">
                    <Link className='nav-link'> Admin &nbsp; <img src={profileImage} alt='profile-image'/></Link>
              
              </li>

              <li className="nav-item my-lg-0 d-lg-none d-flex">
                    <Link className='nav-link'>  <img src={profileImage} alt='profile-image'/> &nbsp; Admin</Link>
              
              </li>
                  <li className="nav-item mb-2 mb-lg-0">
                    <Link className="nav-link" to="/login"><NavLoginbtn text='Log out'/></Link>
                  </li>
                 
                  
                
                </ul>
             
             
      
    </div>
    </div>
  
  </nav>
   

  {/* Left sidebar */}
  <div>

  <nav id="sidebar" className="d-none d-lg-block" style={{paddingTop:'110px'}}>
          <div className="position-fixed bg-primary " style={{height:'100%', width:'200px'}}>
            <ul className="nav flex-column mt-4">
            <SidebarLink to="/admin/dashboard" text="Dashboard" src={dashboard}/>
              <SidebarLink to="/admin/companies" text="Companies" src={companies} />
              <SidebarLink to="/admin/lawyers" text="Lawyers" src={lawyers} />
              <SidebarLink to="/admin/jobs" text="Jobs" src={jobs}/>
              <SidebarLink to="/admin/payment" text="Payment" src={payment}/>
              <SidebarLink to="/admin/ratings" text="Ratings" src={ratings}/>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
       <div style={{paddingTop:'30px'}}>
         <main className="col-12  col-lg-9 col-xl-10 ms-sm-auto px-4 px-xl-4 px-lg-0 py-5 py-lg-0">
          {children}
        </main>
       </div>
       </div>

       <Footer/>
      </div>

  )
}

export default AdminNavbar
