import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo/legalmologo.png'

function Footer() {
  return (
    <div className='footer'>
        <div className='footerLeft'>
            <img src={Logo} alt='logo'/>
        </div>
        <div className='footerCentre'>
            <h4>Quick links</h4>
            <Link to="/about-us">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/terms-of-use" >Terms of use</Link>
            <Link to="/privacy-policy">Privacy policy</Link>
        </div>         
        <div className='footerRight'> 
            <h4>Follow us</h4>
            <button>Facebook</button>
            <button>Instagram</button>
            <button>LinkedIn</button>
            <button>Twitter</button>
        </div>
        <h6>
            <span>&copy;</span>All rights reserved 2023, LegalMo.
        </h6>
    </div>

  )
}

export default Footer