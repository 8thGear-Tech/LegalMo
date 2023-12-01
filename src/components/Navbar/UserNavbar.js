import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import profileImage from '../../assets/images/adminprofile.png'
import lawyerImage from '../../assets/images/lawyer-image.svg'
import legalMoLogo from "../../assets/images/legalmologo.svg";
import { NavLoginbtn } from "../Buttons/Navbarbtns";
import { useAppContext } from "../../AppContext";
import authRoute from "../../services/authRoute";
import { LawyerProfileForm } from "../Forms/Lawyer";
import user from '../../assets/images/user.svg'
import lawyerRoute from "../../services/lawyerRoute";
import companyRoute from "../../services/companyRoute";

const UserNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {logout} = authRoute();

    const {getLawyerProfile}= lawyerRoute()
    const {getCompanyProfile}= companyRoute()
  
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [showModal, setShowModal] = useState(false);
  
    const [details, setDetails] = useState([]);

  
   const [showContactButtons, setShowContactButtons] = useState(false);


  const toggleContactButtons = () => {
    setShowContactButtons(!showContactButtons);
   
  };
  const isContactActive = showContactButtons ? 'navlink-active' : '';
  const userType = localStorage.getItem('userType');
  const authenticatedToken = localStorage.getItem('userToken');
  const userId = localStorage.getItem('userId');
 

  useEffect(()=>{
    if (userType === 'company'){
      const companyId= userId
      getCompanyProfile(
        setMessage,
        setLoading,
        setIsSuccessful,
        setDetails,
        companyId
      )}
    else if(userType === 'lawyer'){
      const lawyerId= userId
    getLawyerProfile(
      setMessage,
      setLoading,
      setIsSuccessful,
      setDetails, lawyerId
    ) 
    }
  }, [])


 
  const handleLogOut = ()=> {
   
  logout();
  }


  
  return (
    <>
    <nav className='navbar navbar-expand-lg guest-navbar navbar-special'>
  <div className="container-fluid px-md-5 px-3 justify-content-between ">
    <Link className="navbar-brand" to='/home'><img src={legalMoLogo} alt="legalMoLogo"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
  </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2 gap-lg-3 short-links">
      <li className="nav-item">
          <NavLink className="nav-link"  to="/home" activeclassname='active'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  to="/about-us" activeclassname='active'>About Us</NavLink>
        </li>
        {userType === 'admin' || userType === 'lawyer' && authenticatedToken && (
         <li className="nav-item">
         <NavLink className="nav-link" to="/lawyer/dashboard" activeclassname="active">
           Dashboard
         </NavLink>
       </li>
       )}

{userType === 'admin' || userType === 'lawyer' && authenticatedToken && (
         <li className="nav-item">
        <NavLink className="nav-link" to={`/lawyer/available-jobs/${userId}`} activeclassname="active">
  Jobs
</NavLink>

       </li>
       )}

{userType === 'admin' || userType === 'company' && authenticatedToken && (
         <li className="nav-item">
         <NavLink className="nav-link" to="/company/dashboard" activeclassname="active">
           Dashboard
         </NavLink>
       </li>
       )}
       {userType === 'admin' || userType === 'company' && authenticatedToken && (
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
      {userType === 'company' && authenticatedToken && ( <li className="nav-item">
                    <NavLink className="nav-link my-lg-3
                    "  activeclassname='active' to="/cart" ><i className="bi bi-cart3 cart-icon"></i></NavLink>
                  </li>)}

        {userType === 'admin' || userType === 'company' && authenticatedToken &&(
              <li className="nav-item">
              <Link className="nav-link " to={`/company/profile/${userId} `}>  
              <img src={details?.profileImage?.url || user} alt='profile-image' style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
              </Link>
            </li>
        )}
          {userType === 'admin' || userType === 'lawyer' && authenticatedToken &&(
              <li className="nav-item">
              <Link className="nav-link " to={`/lawyer/profile/${userId} `}>
              <img src={details?.profileImage?.url || user} alt='profile-image' style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
              </Link>
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
