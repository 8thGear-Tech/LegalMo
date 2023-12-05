// create product

import { useEffect, useRef, useState } from "react";
import priceBox from '../../assets/images/price-box.svg'
import { useNavigate } from "react-router-dom";

export const  CreateProductForm=({ setShowModal, setSuccessMessage , handleProductCreation, handleFileChange, handleImageUpload,fileInputRef,productName, setProductName, productDescription, setProductDescription, productPrice, setProductPrice, formValid})=> {


    return (
      <form className="login-card" onSubmit={handleProductCreation}>

<div className="mb-5" style={{ position: 'relative' }}>
              <label className="form-label">
               Product Image
              </label>
              <div className="input-group position-relative">
              
              <input
              type="text"
              className="form-control ps-4"
              id="imageTextInput"
              placeholder="Upload"
              readOnly
              onClick={handleImageUpload} 
            />
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileChange} 
            />
               <i className="bi bi-file-earmark-plus" style={{position:'absolute',top:'20%',left:'1%'}}></i>
              </div>
            
            </div>
         <div className="mb-5" style={{ position: 'relative' }}>
              <label className="form-label">
               Product Name
              </label>
              <div className="input-group">
                <input
                  type='text'
                  className="form-control py-2"
                  name='productName'
                 placeholder="Textbox" value={productName}
                 onChange={(event) => setProductName(event.target.value)} required
                />
               
              </div>
            
            </div>

            <div className="mb-5" style={{ position: 'relative' }}>
              <label className="form-label">
               Price
              </label>
              <div className="input-group position-relative" style={{width:'60%'}}>
                
              <input
  type='text'  
  className="form-control py-2"
  name='productPrice'
  placeholder="Textbox"
  value={productPrice}
  onChange={(event) => {
    const numericValue = event.target.value.replace(/\D/g, ''); 
    setProductPrice(numericValue);
  }} 
  required
/>

                <img src={priceBox} alt='box' className='' style={{position:'absolute',top:'30%',right:'3%'}}/>
               
              </div>
            
            </div>

            <div className="mb-5" style={{ position: 'relative' }}>
              <label className="form-label">
               Description
              </label>
              <div className="input-group">
                <input
                  type='text'
                  className="form-control py-2"
                  name='description'
                  placeholder="Textbox"
                  value={productDescription}
                 onChange={(event) => setProductDescription(event.target.value)} required
                />
               
              </div>
            
            </div>
        <div className="text-center">

        <button type="submit" className={` btn px-5 ${formValid ? 'btn-primary btn-newPrimary' : 'btn-secondary'}`}
       >CREATE</button>
        </div>

        
      </form>
    );
}