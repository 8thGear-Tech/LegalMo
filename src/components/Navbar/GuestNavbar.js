import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import legalMoLogo from "../../assets/images/legalmologo.svg";
import { NavLoginbtn, NavSignUpbtn } from "../Buttons/Navbarbtns";

const GuestNavbar = () => {
  const location = useLocation();
  const isLoggedPage =
    location.pathname === "/login" ||
    location.pathname.includes("/signup") ||
    location.pathname === "/lawyer-signup" ||
    location.pathname === "/company-signup" ||
    location.pathname === "/admin-signup" ||
    location.pathname === "/next-lawyer-signup" ||
    location.pathname === "/next-company-signup" ||
    location.pathname === "/password-reset" ||
    location.pathname === "/new-password" ||
    location.pathname === "/otp";

  const [showContactButtons, setShowContactButtons] = useState(false);
  const [showSignUpButtons, setShowSignUpButtons] = useState(false);

  const toggleContactButtons = () => {
    setShowContactButtons(!showContactButtons);
    setShowSignUpButtons(false);
  };
  const isContactActive = showContactButtons ? 'navlink-active' : '';
 

  const toggleSignUpButtons = () => {
    setShowSignUpButtons(!showSignUpButtons);
    setShowContactButtons(false);
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary guest-navbar">
  <div className="container-fluid px-md-5 px-3 justify-content-between ">
    <Link className="navbar-brand" to='/landing'><img src={legalMoLogo} alt="legalMoLogo"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2 gap-lg-4 short-links">
        <li className="nav-item">
          <NavLink className="nav-link"  to="/about-us" activeclassname='active'>About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products" activeclassname='active' >Products</NavLink>
        </li>
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
      <div className="d-block d-lg-flex gap-2 gap-lg-3 align-items-center">
      {!isLoggedPage &&(
        <>
        <ul className="navbar-nav ">
        <li className="nav-item">
          <NavLink className="nav-link "  activeclassname='active' to="/cart" ><i className="bi bi-cart3 cart-icon"></i></NavLink>
        </li>
        </ul>
        <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link" to="/login"><NavLoginbtn/></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" onClick={toggleSignUpButtons}><NavSignUpbtn/></Link>
        </li>
        {showSignUpButtons && (
        <div role="group" aria-label="Basic example" className="btn-group sign-btn position-absolute gap-1" >
        <Link to='/company-signup' className="btn btn-primary">As a Company</Link>
        <div className='my-2' style={{borderLeft:'1px solid white'}}></div>
        <Link to='/lawyer-signup' type="button" className="btn btn-primary">As a Lawyer</Link>
        
      </div>
      )}
        </ul>
        </>)}
      
      </div>
    </div>
  </div>
</nav>
    </>
  );
};

export default GuestNavbar;
