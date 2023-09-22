import React from 'react'
import UserNavbar from '../../components/Navbar/UserNavbar'
import Footer from '../../components/Footer'


const CompanyDashboard = () => {
  return (
    <>
      <UserNavbar/>
      <section className='px-3 px-sm-5 py-5'>
       <div className='card py-5'>
        <div className='d-flex gap-5'>
          <h6 style={{fontWeight:'500'}}>Pending</h6>
          <h6 style={{fontWeight:'500'}}>Completed</h6>
        </div>
       </div>
      </section>
      <Footer/>
    </>
  )
}

export default CompanyDashboard
