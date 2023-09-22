import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import profileImage from '../../assets/images/adminprofile.png'

import legalMoLogo from "../../assets/images/legalmologo.svg";
import { NavLoginbtn } from "../Buttons/Navbarbtns";


const UserNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

    const isCompanyRoute = location.pathname.includes('/company');
    const isLawyerRoute = location.pathname.includes('/lawyer');

  


  
   const [showContactButtons, setShowContactButtons] = useState(false);
//   const [showSignUpButtons, setShowSignUpButtons] = useState(false);

  const toggleContactButtons = () => {
    setShowContactButtons(!showContactButtons);
   
  };
  const isContactActive = showContactButtons ? 'navlink-active' : '';
 

//   const toggleSignUpButtons = () => {
//     setShowSignUpButtons(!showSignUpButtons);
//     setShowContactButtons(false);
//   };
const handleLogOut = ()=>{
  navigate('/login');
  // localStorage.setItem('isLoggedIn', 'false');

}

  return (
    <>
    <nav className='navbar navbar-expand-lg guest-navbar navbar-special'>
  <div className="container-fluid px-md-5 px-3 justify-content-between ">
    <Link className="navbar-brand" to='/landing'><img src={legalMoLogo} alt="legalMoLogo"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
  </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2 gap-lg-3 short-links">
      <li className="nav-item">
          <NavLink className="nav-link"  to="/landing" activeclassname='active'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/about-us" activeclassname='active'>About Us</NavLink>
        </li>
        {isLawyerRoute && (
         <li className="nav-item">
         <NavLink className="nav-link" to="/lawyer/dashboard" activeclassname="active">
           Dashboard
         </NavLink>
       </li>
       )}

{isCompanyRoute && (
         <li className="nav-item">
         <NavLink className="nav-link" to="/company/dashboard" activeclassname="active">
           Dashboard
         </NavLink>
       </li>
       )}
       {!isLawyerRoute && (
         <li className="nav-item">
         <NavLink className="nav-link" to="/products" activeclassname="active">
           Products
         </NavLink>
       </li>
       )}
               
      
      
           
        <li className="nav-item">
          <Link  className={`nav-link ${isContactActive}`} onClick={toggleContactButtons}>Contact</Link>
        </li>
        {showContactButtons && (
        <div role="group" aria-label="Basic example" className="btn-group contact-btn position-absolute"  >
        <button type="button" className="btn btn-primary">Send an Email</button>
        <div className='my-2' style={{borderLeft:'1px solid white'}}></div>
        <button type="button" className="btn btn-primary">Speak to an Agent</button>
        
      </div>
      )}
      
      </ul>
      <div className="d-block d-lg-flex gap-2  align-items-center">
      <ul className="navbar-nav gap-1">
      {!isLawyerRoute && ( <li className="nav-item">
                    <NavLink className="nav-link my-lg-3
                    "  activeclassname='active' to="/cart" ><i className="bi bi-cart3 cart-icon"></i></NavLink>
                  </li>)}

        {isCompanyRoute &&(
              <li className="nav-item">
              <NavLink className="nav-link "  activeclassname='active' to="/company/profile" ><img src={profileImage} alt='profile-image'/></NavLink>
            </li>
        )}
          {isLawyerRoute &&(
              <li className="nav-item">
              <NavLink className="nav-link "  activeclassname='active' to="/lawyer/profile" ><img src={profileImage} alt='profile-image'/></NavLink>
            </li>
        )}
       <li className="nav-item">
                    <a className="nav-link" onClick={handleLogOut}><NavLoginbtn text='Log out' style={{backgroundColor: '#CFCFCF'}}/></a>
                  </li>
                 
        </ul>
             </div>
      
    </div>
    </div>
  </nav>
    </>
  );
};

export default UserNavbar;
