import React from 'react'
import { Link } from 'react-router-dom'
import '../../sassfiles/components/Navbar/_guestnav.scss'

import legalMoLogo from '../../assets/images/legalmologo.svg'
import { NavLoginbtn, NavSignUpbtn } from '../Buttons/Navbarbtns'



const GuestNavbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary guest-navbar">
  <div className="container-fluid px-md-5 px-3 justify-content-between">
    <Link className="navbar-brand" to='/landing'><img src={legalMoLogo} alt="legalMoLogo"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2 gap-lg-4">
        <li className="nav-item">
          <Link className="nav-link"  to="/about-us">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      
      </ul>
      <div className="d-block d-lg-flex gap-2 gap-lg-3">
        <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link my-0 my-lg-2"  to="/cart"><i className="bi bi-cart3 cart-icon"></i></Link>
        </li>
        </ul>
        <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link" to="/login"><NavLoginbtn/></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup"><NavSignUpbtn/></Link>
        </li>
        </ul>
      
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default GuestNavbar
