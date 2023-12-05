import React, { useEffect, useState } from 'react'
import {CompanyProfileForm} from '../../components/Forms/Company'
import UserNavbar from '../../components/Navbar/UserNavbar'
import Footer from '../../components/Footer'
import companyImage from '../../assets/images/adminprofile-lg.svg'
import companyRoute from '../../services/companyRoute'
import adminRoute from '../../services/adminRoute'
import { useParams } from 'react-router-dom'
import { LoginModal } from '../../components/Forms/Authenticationforms'

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

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [details, setDetails] = useState([]);
  const {getCompanyProfile, updateProfile} = companyRoute();
  const {getCompany}= adminRoute();
  const {companyId} = useParams();

  useEffect(() => {
    const userType = localStorage.getItem('userType')
        if(userType === 'admin'){
          getCompany(
            setMessage,
            setLoading,
            setIsSuccessful,
            companyId,
            setDetails
          )
        } else {
          getCompanyProfile(
            setMessage,
            setLoading,
            setIsSuccessful,
            setDetails,
            companyId
          )
        }
        
       
      }, []); 

      const handleSave = (formData, imageFile) => {
        setIsEditing(false);
      
        const body = {
          profileImage: imageFile,
        };
      
        if (formData.officialEmail !== '' && formData.officialEmail !== null && formData.officialEmail !== undefined) {
          body.officialEmail = formData.officialEmail;
        }
        if (formData.website !== '' && formData.website !== null && formData.website !== undefined) {
          body.website = formData.website;
        }
        if (formData.yourBio !== '' && formData.yourBio !== null && formData.yourBio !== undefined) {
          body.yourBio = formData.yourBio;
        }
        if (formData.phoneNumber !== '' && formData.phoneNumber !== null && formData.phoneNumber !== undefined) {
          body.phoneNumber = formData.phoneNumber;
        }
        if (formData.alternativeEmailAddress !== '' && formData.alternativeEmailAddress !== null && formData.alternativeEmailAddress !== undefined) {
          body.alternativeEmailAddress = formData.alternativeEmailAddress;
        }
        if (formData.officeAddress !== '' && formData.officeAddress !== null && formData.officeAddress !== undefined) {
          body.officeAddress = formData.officeAddress;
        }
      
     
      
        updateProfile(
          body,
          setMessage,
          setLoading,
          setIsSuccessful,
          setDetails,
          companyId,
          setShowModal
        );
      };
      
      

  const handleCancel= () => {
    setIsEditing(false)
  }
  if (loading){
    return <div className='justify-content-center align-items-center text-center' style={{paddingTop:'300px'}}>
   <div className="spinner-border text-secondary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
        </div>; 
  }


  return (
    <div>
      <UserNavbar profilePicture={details?.profileImage?.url}/>
     <section className='py-5 px-4 px-sm-5 mb-5'>
      {isEditing ? (
        <CompanyProfileForm initialDetails={details} onSave={handleSave} onCancel={handleCancel} setDetails={setDetails} /> ):(
          <div className='px-lg-5'>
          
      
        <div className='d-flex gap-3 gap-sm-5 align-items-center'>
            <div>
                <img src={details?.profileImage?.url} alt='company' className='profile-img' style={{ background: '#FFF', padding: '10px', borderRadius: '200px'}}/>
            </div>
            <div className='mt-3 d-flex flex-column action'>
                <h5 style={{ fontWeight: '500' }}>{details?.companyName || details?.name }</h5>
                
                    <p className='text-secondary' style={{color:''}} onClick={() => setIsEditing(true)}>Update your details  <span><i className="bi bi-pencil"></i></span></p>
        
            </div>
        </div>
   
    
          <div className='mt-5 pt-sm-5 '>
            <div className='py-3 row mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <h6  className="col-12 col-md-3"style={{fontWeight:'600'}}>Email Address</h6>
              <div className='card pt-2 pb-1 px-md-2 col'>
                <p>{details?.officialEmail}
                </p>
                </div>
            </div>
            <div className='py-3 row mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <h6  className="col-12 col-md-3"style={{fontWeight:'600'}}>Website</h6>
              <div className='card pt-2 pb-1 px-md-2 col'>
                <p>{details?.website}
                </p>
                </div>
            </div>
            <div className='py-3 row mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <h6  className="col-12 col-md-3"style={{fontWeight:'600'}}>Your Bio</h6>
              <div className='card pt-2 pb-1 px-md-2 col'>
                <p>{details?.yourBio}
                </p>
                </div>
            </div>
        
            <div className='py-3 row mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <h6  className="col-12 col-md-3"style={{fontWeight:'600'}}>Phone Number</h6>
              <div className='card pt-2 pb-1 px-md-2 col'>
                <p>{details?.phoneNumber}
                </p>
                </div>
            </div>
            <div className='py-3 row mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <h6  className="col-12 col-md-3"style={{fontWeight:'600'}}>Physical Address</h6>
              <div className='card pt-2 pb-1 px-md-2 col'>
                <p>{details?.officeAddress}
                </p>
                </div>
            </div>
            <div className='py-3 row mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <h6  className="col-12 col-md-3"style={{fontWeight:'600'}}>Alternate Email</h6>
              <div className='card pt-2 pb-1 px-md-2 col'>
                <p>{details?.alternativeEmailAddress}
                </p>
                </div>
            </div>
          </div>
          </div>
        )
      }
      
     </section>
      <Footer/>
      <LoginModal
        showModal={showModal}
       isSuccess={isSuccessful}
        closeModal={()=> setShowModal(false)}
        modalText={message}
        
      />
    </div>
  )
}

export default CompanyProfile