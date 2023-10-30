import React, { useState } from 'react'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import Footer from '../../components/Footer'
import SingleProducts from '../Company/SingleProducts'
import Packages from '../Company/Packages';
import UserNavbar from '../../components/Navbar/UserNavbar';
import { useEffect } from 'react';


function Products() {
  const [selectedButton, setSelectedButton] = useState(0);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {

    const token = localStorage.getItem('userToken');
    if (token) {
      // Token exists, user is authenticated
      setIsLoggedIn(true);
    } else {
 
      setIsLoggedIn(false);
    }

    setIsLoading(false);
  }, []);  
  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  if (isLoading){
    return <div className='justify-content-center align-items-center text-center my-5' style={{paddingTop:'300px'}}>
   <div className="spinner-border text-secondary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
        </div>; 
  }
  return (
    <>
       {isLoggedIn ? <UserNavbar /> : <GuestNavbar />}
  
      <div className='p-sm-5 p-4'>
        <div className='text-center gap-5  works-section'>
          <h3 className='pb-5'>Shop our products</h3>
          <div className="btn-group py-3" role="group" aria-label="Basic outlined example" >
  <button type="button" className={selectedButton === 0 ? 'active-btn-outline btn btn-outline-primary px-md-5' : ' btn btn-outline-primary px-md-5'} onClick={() => handleButtonClick(0)}>Single</button>
  <button type="button" className={selectedButton === 1 ? 'active-btn-outline btn btn-outline-primary px-md-5' : ' btn btn-outline-primary px-md-5'}  onClick={() => handleButtonClick(1)}>Packages</button>
  
              </div>
        </div>
        <div className='px-md-5'>
          {selectedButton === 0 &&(
            <SingleProducts/>
          )}
        </div>
        <div className=''>
          {selectedButton === 1 &&(
            <Packages/>
          )}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Products