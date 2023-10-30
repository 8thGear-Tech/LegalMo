import React, { useState } from 'react'
import {CompanyProfileForm} from '../../components/Forms/Company'
import UserNavbar from '../../components/Navbar/UserNavbar'
import Footer from '../../components/Footer'
import companyImage from '../../assets/images/adminprofile-lg.svg'

export const initialCompanyProfileDetails = {
  email: 'legalmo@yahoo.com',
  website: 'www.legalmo.biz',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at justo auctor, efficitur tellus ut,cies sapien. Proin et urna sed ligula Sed volutpat felis vitae semper. Fusce in varius risus, vel feugiat justo. Ut bibendum libero nec tortor ornare, ac interdum.',
  physicalAddress:'41 CMD Road, Magodo/Secretariat, Lagos',
  phoneNumber: '09012345678',
  alternateEmail: 'legalmo2@gmail.com',
  companyImage:companyImage,
  
};



function CompanyProfile() {

  const [isEditing, setIsEditing] = useState(false);
  const [details, setDetails] = useState(initialCompanyProfileDetails);

  const handleSave = (updatedDetails) => {
    setDetails(updatedDetails);
    setIsEditing(false);
  };

  const handleCancel= () => {
    setIsEditing(false)
  }
  return (
    <div>
      <UserNavbar/>
     <section className='py-5 px-4 px-sm-5 mb-5'>
      {isEditing ? (
        <CompanyProfileForm initialDetails={details} onSave={handleSave} onCancel={handleCancel} /> ):(
          <div className='px-lg-5'>
          
      
        <div className='d-flex gap-3 gap-sm-5 align-items-center'>
            <div>
                <img src={details.companyImage} alt='company' className='profile-img' style={{ background: '#FFF', padding: '10px', borderRadius: '200px'}}/>
            </div>
            <div className='mt-3 d-flex flex-column action'>
                <h5 style={{ fontWeight: '500' }}>LegalMo</h5>
                
                    <p className='text-secondary' style={{color:''}} onClick={() => setIsEditing(true)}>Update your details  <span><i className="bi bi-pencil"></i></span></p>
        
            </div>
        </div>
   
    
          <div className='mt-5 pt-sm-5 '>
            <div className='py-3 row mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <h6  className="col-12 col-md-3"style={{fontWeight:'600'}}>Email Address</h6>
              <div className='card pt-2 pb-1 px-md-2 col'>
                <p>{details.email}
                </p>
                </div>
            </div>
            <div className='py-3 row mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <h6  className="col-12 col-md-3"style={{fontWeight:'600'}}>Website</h6>
              <div className='card pt-2 pb-1 px-md-2 col'>
                <p>{details.website}
                </p>
                </div>
            </div>
            <div className='py-3 row mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <h6  className="col-12 col-md-3"style={{fontWeight:'600'}}>Your Bio</h6>
              <div className='card pt-2 pb-1 px-md-2 col'>
                <p>{details.bio}
                </p>
                </div>
            </div>
        
            <div className='py-3 row mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <h6  className="col-12 col-md-3"style={{fontWeight:'600'}}>Phone Number</h6>
              <div className='card pt-2 pb-1 px-md-2 col'>
                <p>{details.phoneNumber}
                </p>
                </div>
            </div>
            <div className='py-3 row mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <h6  className="col-12 col-md-3"style={{fontWeight:'600'}}>Physical Address</h6>
              <div className='card pt-2 pb-1 px-md-2 col'>
                <p>{details.physicalAddress}
                </p>
                </div>
            </div>
            <div className='py-3 row mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <h6  className="col-12 col-md-3"style={{fontWeight:'600'}}>Alternate Email</h6>
              <div className='card pt-2 pb-1 px-md-2 col'>
                <p>{details.alternateEmail}
                </p>
                </div>
            </div>
          </div>
          </div>
        )
      }
      
     </section>
      <Footer/>
    </div>
  )
}

export default CompanyProfile