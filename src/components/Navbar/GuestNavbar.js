import React from 'react'
import '../../sassfiles/components/Navbar/_guestnav.scss'

import legalMoLogo from '../../assets/images/legalmologo.svg'
import { NavLoginbtn, NavSignUpbtn } from '../Buttons/Navbarbtns'



const GuestNavbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary guest-navbar">
  <div className="container-fluid px-5 justify-content-between">
    <a className="navbar-brand" href="#"><img src={legalMoLogo} alt="legalMoLogo"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2 gap-lg-4">
        <li className="nav-item">
          <a className="nav-link"  href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      
      </ul>
      <div className="d-block d-lg-flex gap-2 gap-lg-3">
        <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link my-0 my-lg-2"  href="#"><i className="bi bi-cart3 cart-icon"></i></a>
        </li>
        </ul>
        <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link" href="#"><NavLoginbtn/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><NavSignUpbtn/></a>
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
