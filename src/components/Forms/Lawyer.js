
import React, { useRef, useState } from "react";
import lawyerImage from '../../assets/images/lawyer-image.svg'
import { useAppContext } from "../../AppContext";

const areasOfPractiseOptions = [
  'Maritime', 
'International Trade and Investment', 
'Tax Practise', 
'Aviation and Space',
'Sports',
'Entertainment', 
'Technology', 
// 'Public Sector',
// 'Debt Recovery and Insolvency', 
// 'Dispute Resolution and Litigation',
// 'Information Technology', 
// 'Corporate Commercial', 
// 'Corporate Advisory', 
// 'Alternate Dispute Resolution', 
// 'Arbitration', 
// 'Banking and Finance', 
// 'Compliance and Investigations', 
// 'Capital Markets', 
// 'Corporate Governance', 
// 'Employment', 
// 'Energy and Natural Resources', 
// 'Intellectual Property', 
// 'Mergers and Acquisition',
// 'Media',
// 'Oil and Gas', 
// 'Power',
// 'Real Estate'
]

export const LawyerProfileForm=({ initialDetails, onSave, onCancel })=> {
  
  const [formData, setFormData] = useState({
    ...initialDetails,
    areasOfPractise: initialDetails?.areasOfPractise || [], 
  });
  const {setLawyerUserProfilePicture}= useAppContext()
  const [imageFile, setImageFile] = useState(null);
  const fileInputRef = useRef(null);
const [areasOfPractise, setAreasOfPractise]= useState([])
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  
  

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    
    setImageFile(file);
   
    
  };

  const handleCameraIconClick = () => {
    fileInputRef.current.click();
    
  };
 
  
 
  const handleButtonClick = (option) => {
    const updatedAreasofPractise = formData?.areasOfPractise.includes(option)
      ? formData?.areasOfPractise.filter((item) => item !== option)
      : [...formData?.areasOfPractise, option];
      console.log(updatedAreasofPractise)
      setAreasOfPractise(updatedAreasofPractise);
    setFormData({ ...formData, areasOfPractise: updatedAreasofPractise });
    setLawyerUserProfilePicture(imageFile);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onSave(formData, imageFile, areasOfPractise);
  };


 
    return (
      <form className='' onSubmit={handleSubmit}>
        <div className="position-relative">
        <div style={{background:'#CFCFCF', borderRadius: '20px 20px 0px 0px', height:'190px'}} className="position-relative ">
          <div className="d-flex justify-content-end ">
            
         
         <button
              type='button'
              style={{
                background: '#FFF',
                padding: '5px 10px',
                borderRadius: '200px',
                boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)',
                border: 'none',
                cursor: 'pointer',marginTop:'150px', zIndex:'1'
              }}
              onClick={handleCameraIconClick}
             className="me-3">
              <i className='bi bi-camera'> <input
        ref={fileInputRef}
        type="file"
        id="profileImageInput"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageUpload}
      /></i>
            </button>
        
          </div>
        </div>
        <div className="profile-container" >
        
          <div className="d-flex gap-3 align-items-center">
      <img  src={imageFile ? URL.createObjectURL(imageFile) : formData.profileImage?.url} alt='lawyer' className='profile-img' style={{ background: '#FFF', padding: '10px', borderRadius: '200px', boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)'}}/>
      <h5 className="mt-2" style={{fontWeight:'500'}}>Profile</h5>
      </div>
      <div className="d-flex gap-2 mt-4 mt-sm-2">
    <button type='button' className='btn btn-outline-primary' style={{width:'90px',height:'50px'}} onClick={onCancel}>Cancel</button>
    <button type='submit' className='btn btn-primary px-2'  style={{width:'90px',height:'50px'}} >Save</button>
</div>

      
      </div>
      </div>
           
     <div className="mt-5 pt-5 px-lg-1" >
      <div>
        <h5 className="mt-sm-5 pt-sm-5" style={{fontWeight:'600'}}>Expertise</h5>
        <div className="mt-3">
          {areasOfPractiseOptions.map((option, index) => (
            <button
              key={index}
              type="button"
              className={`btn ${formData?.areasOfPractise.includes(option) ? "btn-primary" : "btn-outline-secondary"} me-2 mb-2`}
              onClick={() => handleButtonClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
        </div>
       

        <div className='mt-5'>
            <div className='py-3 row mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <h6  className="col-12 col-md-3"style={{fontWeight:'600'}}>Email Address</h6>
              
              <input
        type="email"
        name="officialEmail"
        value={formData?.officialEmail}
        onChange={handleInputChange} className="py-2 px-md-2 col"
      />
                
            </div>
            <div className='py-3 row mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <h6  className="col-12 col-md-3"style={{fontWeight:'600'}}>SCN</h6>
              <input
        type="text"
        name="scn"
        value={formData?.scn}
        onChange={handleInputChange} className="py-2 px-md-2 col"
      />
            </div>
            <div className='py-3 row mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <div className="col-12 col-md-3">

             
              <h6  style={{fontWeight:'600'}}>Your Bio</h6>
              <p className="text-muted">Write a short introduction</p>
              </div>
              <div className="col">
              <textarea
        type="text"
        name="yourBio"
        value={formData?.yourBio || ''}
        onChange={handleInputChange} className="py-2 px-md-2 w-100" rows={5}></textarea>
        <p className="text-muted">400 characters left</p>
        </div>
     
            </div>
            <div className='py-3 row mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <h6  className="col-12 col-md-3"style={{fontWeight:'600'}}>Year of Call</h6>
              <input
        type="text"
        id="yearOfCall"
        name="yearOfCall"
        value={formData?.yearOfCall || ''}
        onChange={handleInputChange}className="py-2 px-md-2 col"
      />
            </div>
            <div className='py-3 row mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <h6  className="col-12 col-md-3"style={{fontWeight:'600'}}>Phone Number</h6>
              <input
  type="text"
  name="phoneNumber"
  value={formData?.phoneNumber}
  onChange={(event) => {
    const numericValue = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setFormData({ ...formData, phoneNumber: numericValue });
  }}
  className="py-2 px-md-2 col"
 
/>
            </div>
            <div className='py-3 row mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <div className="col-12 col-md-3">
              <h6  className=""style={{fontWeight:'600'}}>Alternate Email</h6>
              <p className="text-muted">Enter an alternate email if you would like to be contacted via a different email</p>
              </div>
              <input
        type="email"
        name="alternativeEmailAddress"
        value={formData?.alternativeEmailAddress || ''}
        onChange={handleInputChange} className="py-2 px-md-2 col"
      />
            </div>
          </div>
      
        </div>
      </form>
    );
  }