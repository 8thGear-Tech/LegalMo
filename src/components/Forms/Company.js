
import React, {useState, useRef} from "react";
import { useAppContext } from "../../AppContext";

export const CompanyDetailsForm=()=> {
    return (
      <div>
        <form>
        <label htmlFor="details">Give details </label>
        <input name='details' placeholder='Type more details about your purchase' type='text'/>
        </form>
      </div>
    );
  }

  export const CompanyProfileForm=({ initialDetails, onSave, onCancel })=> {
    const {updateCompanyUserProfilePicture} = useAppContext();

    const [formData, setFormData] = useState({
      ...initialDetails,
    });
    const [imageFile, setImageFile] = useState(null);
    const fileInputRef = useRef(null);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      
      setImageFile(file);
      
    };
  
    const handleCameraIconClick = () => {
      fileInputRef.current.click();
      
    };
  
   
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const updatedDetails = {
        ...formData,
        companyImage: imageFile ? URL.createObjectURL(imageFile) : formData.companyImage,
      };
      updateCompanyUserProfilePicture(updatedDetails.companyImage)
      onSave(updatedDetails);
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
          
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        /></i>
              </button>
          
            </div>
          </div>
          <div className="profile-container" >
          
            <div className="d-flex gap-3 align-items-center">
        <img  src={imageFile ? URL.createObjectURL(imageFile) : formData.companyImage} alt='company' className='profile-img' style={{ background: '#FFF', padding: '10px', borderRadius: '200px', boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)'}}/>
        <h5 className="mt-2" style={{fontWeight:'500'}}>Profile</h5>
        </div>
        <div className="d-flex gap-2 mt-4 mt-sm-2">
      <button type='button' className='btn btn-outline-primary' style={{width:'90px',height:'50px'}} onClick={onCancel}>Cancel</button>
      <button type='submit' className='btn btn-primary px-2'  style={{width:'90px',height:'50px'}} >Save</button>
  </div>
  
        
        </div>
        </div>
             
       <div className="mt-5 pt-5" >
          <div className='mt-5 pt-sm-5'>
              <div className='py-3 d-block d-md-flex justify-content-between align-items-center product-card pe-md-5 mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
                <h6  className="me-md-5 me-3"style={{fontWeight:'600'}}>Email Address</h6>
                
                <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange} className="py-2 px-md-2 flex-grow-1 mx-md-5 ps-1"
        />
                  
              </div>
              <div className='py-3 d-block d-md-flex justify-content-between align-items-center product-card pe-md-5 mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
                <h6  className="me-md-5 me-3"style={{fontWeight:'600'}}>Website</h6>
                <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleInputChange} className="py-2 px-md-2 flex-grow-1 mx-md-5 ps-1"
        />
              </div>
              <div className='py-3 d-block d-md-flex justify-content-between align-items-center product-card pe-md-5 mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <div>

             
              <h6  className="me-3"style={{fontWeight:'600', width:'100%'}}>Your Bio</h6>
              <p className="text-muted">Write a short introduction</p>
              </div>
              <div className=" mx-md-5 w-100">
              <textarea
        type="text"
        name="bio"
        value={formData.bio}
        onChange={handleInputChange} className="py-2 px-md-2  ps-1 w-100" rows={5}></textarea>
        <p className="text-muted">400 characters left</p>
        </div>
     
            </div>
             
              <div className='py-3 d-block d-md-flex justify-content-between align-items-center product-card pe-md-5 mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
                <h6  className="me-md-5 me-3"style={{fontWeight:'600'}}>Phone Number</h6>
                <input
          type="number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange} className="py-2 px-md-2 flex-grow-1 mx-md-5 ps-1"
        />
              </div>
              <div className='py-3 d-block d-md-flex justify-content-between align-items-center product-card pe-md-5 mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
                <h6  className="me-md-5 me-3"style={{fontWeight:'600'}}>Physical Address</h6>
                <input
          type="text"
          name="physicalAddress"
          value={formData.physicalAddress}
          onChange={handleInputChange} className="py-2 px-md-2 flex-grow-1 mx-md-5 ps-1"
        />
              </div>
              <div className='py-3 d-block d-md-flex justify-content-between align-items-center product-card pe-md-5 mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
                <div>
                <h6  className="me-md-5 me-1"style={{fontWeight:'600'}}>Alternate Email</h6>
                <p className="text-muted">Enter an alternate email if you would like to be contacted via a different email</p>
                </div>
                <input
          type="text"
          name="alternateEmail"
          value={formData.alternateEmail}
          onChange={handleInputChange} className="py-2 px-md-2 flex-grow-1 mx-md-5 ps-1 w-100"
        />
              </div>
            </div>
        
          </div>
        </form>
      );
    }