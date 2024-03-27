
import React, {useState, useRef} from "react";
import { useAppContext } from "../../AppContext";

  export const CompanyProfileForm=({ initialDetails, onSave, onCancel })=> {
  

    const [formData, setFormData] = useState({
      ...initialDetails,
    });
    const [imageFile, setImageFile] = useState(null);
    const fileInputRef = useRef(null);
  
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
  
   
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
     
      onSave(formData, imageFile);
     
    };
      return (
        <form className='' onSubmit={handleSubmit}>
          <div className="position-relative">
          <div style={{background:'#CFCFCF', borderRadius: '20px 20px 0px 0px', height:'190px'}} className="position-relative">
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
          accept="image/*"
          id="profileImageInput"
          
          style={{ display: 'none' }}
          onChange={handleImageUpload}
        /></i>
              </button>
          
            </div>
          </div>
          <div className="profile-container" >
          
            <div className="d-flex gap-3 align-items-center">
        <img  src={imageFile ? URL.createObjectURL(imageFile) : formData?.profileImage?.url} alt='company' className='profile-img' style={{ background: '#FFF', padding: '10px', borderRadius: '200px', boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)'}}/>
        <h5 className="mt-2" style={{fontWeight:'500'}}>Profile</h5>
        </div>
        <div className="d-flex gap-2 mt-4 mt-sm-2">
      <button type='button' className='btn btn-outline-primary' style={{width:'90px',height:'50px'}} onClick={onCancel}>Cancel</button>
      <button type='submit' className='btn btn-primary px-2'  style={{width:'90px',height:'50px'}} >Save</button>
  </div>
  
        
        </div>
        </div>
             
       <div className="mt-5 pt-5 px-lg-1" >
          <div className='mt-5 pt-sm-5'>
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
                <h6  className="col-12 col-md-3"style={{fontWeight:'600'}}>Website</h6>
                <input
          type="text"
          name="website"
          value={formData?.website || ''}
          onChange={handleInputChange} className="py-2 px-md-2 col"
        />
              </div>
              <div className='py-3 row mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
              <div className="col-12 col-md-3">

              <h6  className=""style={{fontWeight:'600'}}>Your Bio</h6>
              <p className="text-muted">Write a short introduction</p>
              </div>
              <div className="col">
              <textarea
        type="text"
        name="yourBio"
        value={formData?.yourBio || ''}
        onChange={handleInputChange} className="py-2 px-2 w-100" rows={5}></textarea>
        <p className="text-muted">400 characters left</p>
        </div>
     
            </div>
             
              <div className='py-3 row mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
                <h6  className="col-12 col-md-3"style={{fontWeight:'600'}}>Phone Number</h6>
                <input
  type="text"
  name="phoneNumber"
  value={formData?.phoneNumber}
  onChange={(event) => {
    const numericValue = event.target.value.replace(/\D/g, '');
    setFormData({ ...formData, phoneNumber: numericValue });
  }}
  className="py-2 px-md-2 col"
 
/>

        
              </div>
              <div className='py-3 row mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
                <h6  className="col-12 col-md-3"style={{fontWeight:'600'}}>Physical Address</h6>
                <input
          type="text"
          name="officeAddress"
          value={formData?.officeAddress || ''}
          onChange={handleInputChange} className="py-2 px-md-2 col"
        />
              </div>
              <div className='py-3 row mb-3' style={{ borderBottom: '1px solid #CFCFCF' }}>
                <div className="col-12 col-md-3">
                <h6  style={{fontWeight:'600'}}>Alternate Email</h6>
                <p className="text-muted">Enter an alternate email if you would like to be contacted via a different email</p>
                </div>
                <input
          type="text"
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