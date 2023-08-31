import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/legalmologo.png'
import {NavLoginbtn, NavSignUpbtn} from '../Buttons/Navbarbtns'

function GuestNavbar() {
    return(
        <div className='guest-navbar'>
            <div className='leftSide'>
            <img src={Logo} alt="logo"/>
            </div>
            <div className='center'>
                <Link to="/" >Home</Link>
                <Link to="/about-us">About</Link>
                <Link to="/products">Products</Link>    
                <Link to="/contact">Contact</Link>
            </div>
            <div className='rightSide'>
                <button>Cart</button>
                    <NavLoginbtn/>
                    <NavSignUpbtn/>
            </div>
        </div>
  );
}

export default GuestNavbar

