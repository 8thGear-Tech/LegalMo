import React, { useState } from 'react'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import Footer from '../../components/Footer'
import SingleProducts from '../Company/SingleProducts'


function Products() {
  const [selectedButton, setSelectedButton] = useState(0);
  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };
  return (
    <>
      <GuestNavbar/>
      <div className='px-5'>
        <div className='text-center gap-5 my-5 works-section'>
          <h2>Shop our products</h2>
          <div className="btn-group mt-5" role="group" aria-label="Basic outlined example" >
  <button type="button" className={selectedButton === 0 ? 'active-btn-outline btn btn-outline-primary' : ' btn btn-outline-primary'} onClick={() => handleButtonClick(0)}>Single</button>
  <button type="button" className={selectedButton === 1 ? 'active-btn-outline btn btn-outline-primary' : ' btn btn-outline-primary'} onClick={() => handleButtonClick(1)}>Packages</button>
  
              </div>
        </div>
        <div>
          {selectedButton === 0 &&(
            <SingleProducts/>
          )}
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default Products