import React from 'react'
import Logo from '../../assets/images/legalmologo.png'
import AdminProfile from '../../assets/images/adminprofile.png'
function AdminNavbar() {
  return (
    <>
        <div className='navbar'>
            <div className='leftSide'>
              <img src={Logo} alt="logo"/>
            </div>
            <div className='rightSide'>
              Admin
                <img src={AdminProfile} alt=''/>
            </div>
        </div>
    </>
  )
} 

export default AdminNavbar