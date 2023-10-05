import React, { useState } from 'react'
import { LawyerProfileForm } from '../../components/Forms/Lawyer'
import UserNavbar from '../../components/Navbar/UserNavbar'
import Footer from '../../components/Footer'
import lawyerImage from '../../assets/images/lawyer-image.svg'

export const initialProfileDetails = {
  email: 'amberdaniels@yahoo.com',
  scn: '000123',
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  yearOfCall:'1999-01-01',
  phoneNumber: '09012345678',
  alternateEmail: 'amberdaniels2@yahoo.com',
  lawyerImage:lawyerImage,
  expertise: [],
};

const expertiseOptions = [
  'Maritime',
  'International Trade and Investment',
  'Tax Practice',
  'Sports',
  'Entertainment',
  'Technology',
  'Oil and Gas',
  'Banking',
  'Telecommunications',
  'Transportation',
  'Aviation and Space',
];

function LawyerProfile() {

  const [isEditing, setIsEditing] = useState(false);
  const [details, setDetails] = useState(initialProfileDetails);

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
     <section className='py-5 px-3 px-sm-5 mb-5'>
      {isEditing ? (
        <LawyerProfileForm initialDetails={details} onSave={handleSave} onCancel={handleCancel} expertiseOptions={expertiseOptions}/> ):(
          <div className='px-lg-5'>
          <div className='d-flex flex-column flex-md-row align-items-center justify-content-between px-xl-5 mb-3'>
        <div className='order-md-1 order-2 mt-5 mt-md-0'>
            <h6 style={{ fontWeight: '600', color: '#373737' }}>Expertise</h6>
            <div className='d-flex gap-3 flex-wrap mt-3'>
            {(details.expertise?.length ?? 0) > 0 ? (
        details.expertise.map((expertise, index) => (
          <button key={index} className='btn btn-outline-secondary me-5'>
            {expertise}
          </button>
        ))
      ) : (
        <button
          className='btn btn-outline-secondary'
          onClick={() => setIsEditing(true)}
        >
          Add Expertise
        </button>
      )}
        </div>
        </div>
        <div className='d-flex flex-column text-center order-md-2 order-1'>
            <div>
                <img src={details.lawyerImage} alt='lawyer' className='profile-img' style={{ background: '#FFF', padding: '10px', borderRadius: '200px', boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)'}}/>
            </div>
            <div className='mt-3 d-flex flex-column text-align-center text-center action'>
                <h5 style={{ fontWeight: '500' }}>Amber Daniels</h5>
                
                    <p className='text-secondary' style={{color:''}} onClick={() => setIsEditing(true)}>Update your details       <span><i className="bi bi-pencil"></i></span></p>
        
            </div>
        </div>
    </div>
    
          <div className='mt-5 '>
            <div className='py-3 d-flex justify-content-between align-items-center product-card pe-md-5 mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <h6  className="me-md-5 me-3"style={{fontWeight:'600'}}>Email Address</h6>
              <div className='card pt-2 pb-1 px-md-2 flex-grow-1 mx-md-5 ps-1'>
                <p>{details.email}
                </p>
                </div>
            </div>
            <div className='py-3 d-flex justify-content-between align-items-center product-card pe-md-5 mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <h6  className="me-md-5 me-3"style={{fontWeight:'600'}}>SCN</h6>
              <div className='card pt-2 pb-1 px-md-2 flex-grow-1 mx-md-5 ps-1'>
                <p>{details.scn}
                </p>
                </div>
            </div>
            <div className='py-3 d-flex justify-content-between align-items-center product-card pe-md-5 mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <h6  className="me-3"style={{fontWeight:'600', width:''}}>Your Bio</h6>
              <div className='card pt-2 pb-1 px-md-2 flex-grow-1 mx-md-5 ps-1'>
                <p>{details.bio}
                </p>
                </div>
            </div>
            <div className='py-3 d-flex justify-content-between align-items-center product-card pe-md-5 mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <h6  className="me-md-5 me-3"style={{fontWeight:'600'}}>Year of Call</h6>
              <div className='card pt-2 pb-1 px-md-2 flex-grow-1 mx-md-5 ps-1'>
                <p>{new Date(details.yearOfCall).toLocaleDateString()}
                </p>
                </div>
            </div>
            <div className='py-3 d-flex justify-content-between align-items-center product-card pe-md-5 mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <h6  className="me-md-5 me-3"style={{fontWeight:'600'}}>Phone Number</h6>
              <div className='card pt-2 pb-1 px-md-2 flex-grow-1 mx-md-5 ps-1'>
                <p>{details.phoneNumber}
                </p>
                </div>
            </div>
            <div className='py-3 d-flex justify-content-between align-items-center product-card pe-md-5 mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <h6  className="me-md-5 me-1"style={{fontWeight:'600'}}>Alternate Email</h6>
              <div className='card pt-2 pb-1 px-md-2 flex-grow-1 mx-md-5 ps-1'>
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

export default LawyerProfile