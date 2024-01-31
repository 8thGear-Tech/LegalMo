import React, { useState, useRef } from 'react'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import Footer from '../../components/Footer'
import SingleProducts from '../Company/SingleProducts'
import Packages from '../Company/Packages';
import UserNavbar from '../../components/Navbar/UserNavbar';
import { useEffect } from 'react';
import productRoute from '../../services/productRoute';
import priceBox from '../../assets/images/price-box.svg'
import { useNavigate } from 'react-router-dom';

export const EditProductForm = ({ product, handleUpdate, handleCancelEdit }) => {
  const [editedProduct, setEditedProduct] = useState(product);

  useEffect(() => {
    setEditedProduct(product);
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };
  const fileInputRef = useRef(null);

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      
      setEditedProduct({ ...editedProduct, productImage: file.name });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    handleUpdate(editedProduct);
  };

  const { productName, productImage, productPrice, productDescription } = editedProduct;

  return (
    <div className='card py-4 px-3 my-5 ' >
    <form className="login-card" onSubmit={handleSubmit}>
      <div className="mb-5" style={{ position: 'relative' }}>
        <label className="form-label">Product Image</label>
        <div className="input-group position-relative">
          <input
            type="text"
            className="form-control ps-4"
            id="imageTextInput"
            placeholder="Upload"
            readOnly
            value={productImage ? productImage : ''}
            onClick={handleImageUpload}
          />
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <i className="bi bi-file-earmark-plus" style={{ position: 'absolute', top: '20%', left: '1%' }}></i>
        </div>
      
      </div>

      <div className="mb-5" style={{ position: 'relative' }}>
        <label className="form-label">Product Name</label>
        <div className="input-group">
          <input
            type="text"
            className="form-control py-2"
            name="productName"
            placeholder="Textbox"
            value={productName}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="mb-5" style={{ position: 'relative' }}>
        <label className="form-label">Price</label>
        <div className="input-group position-relative" style={{ width: '60%' }}>
          <input
            type="text"
            className="form-control py-2"
            name="productPrice"
            placeholder="Textbox"
            value={productPrice}
            onChange={(event) => {
              const numericValue = event.target.value.replace(/\D/g, '');
              setEditedProduct({ ...editedProduct, productPrice: numericValue });
            }}
            required
          />
        
          <img src={priceBox} alt="box" className="" style={{ position: 'absolute', top: '30%', right: '3%' }} />
        </div>
      </div>

      <div className="mb-5" style={{ position: 'relative' }}>
        <label className="form-label">Description</label>
        <div className="input-group">
          <input
            type="text"
            className="form-control py-2"
            name="productDescription"
            placeholder="Textbox"
            value={productDescription}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className=" text-center">
        <button
          type="submit"
          className='btn btn-primary'
        >
          Update
        </button>
        <button
          type="button" onClick={handleCancelEdit}
          className='btn btn-danger ms-3'
        >
          Cancel
        </button>
      </div>
    </form>
    </div>
  );
};


function Products() {
  const [selectedButton, setSelectedButton] = useState(0);
const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [productData, setProductData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState(null);


const {getProducts, deleteProduct, getOneProduct, updateProduct} = productRoute();

const [editing, setEditing] = useState(false);
const [editedProduct, setEditedProduct] = useState(null);




  useEffect(() => {

    const userType = localStorage.getItem('userType');
    const token = localStorage.getItem('userToken');
    if (userType && token) {
     
      setIsLoggedIn(true);
    } else {
 
      setIsLoggedIn(false);
    }

    getProducts( setMessage, setLoading, setIsSuccessful, setProductData, setShowModal
      )
  }, []);  


  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  const handleDeleteClick = (productId) => {
   
   
    const updatedProductData = productData.filter(product => product._id !== productId);
      
    deleteProduct(
      setMessage, setLoading, setIsSuccessful, productId, updatedProductData, setProductData, setShowModal
     
    )
    
  };



  const handleProductClick = (productId) => {
   
      
    getOneProduct(
      setMessage, setLoading, setIsSuccessful, productId, setProduct, setShowModal
    )
    
  };

  const handleEditClick = (product) => {
    
    
    setEditing(true);
    setEditedProduct(product);
  };

  const handleUpdate = (product) => {
  
  
    const productId = product._id;
  
    const body = {
      productName:product.productName,
    productPrice: product.productPrice,
    productDescription:product.productDescription,
   productImage:product.productImage,
     }


     updateProduct(
      productId, body, setMessage, setLoading, setIsSuccessful, setShowModal
     
    )
    setEditing(false);
    setEditedProduct(null);
  };
  

  const handleCancelEdit = () => {
    setEditing(false);
    navigate('/products')
  }

  if (loading){
    return <div className='justify-content-center align-items-center text-center my-5' style={{paddingTop:'200px'}}>
   <div className="spinner-border text-secondary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
        </div>; 
  }
  return (
    <>


       {isLoggedIn ? <UserNavbar /> : <GuestNavbar />}
       <div className='p-sm-5 p-4'>
       {editing && editedProduct && (
        <div className='px-md-5'>
        <EditProductForm product={editedProduct} handleUpdate={handleUpdate} handleCancelEdit={handleCancelEdit}/>
        </div>
      )}
      {!editing &&(
        <div>
<div className='text-center gap-5  works-section'>
          <h3 className='pb-5'>Shop our products</h3>
          <div className="btn-group py-3" role="group" aria-label="Basic outlined example" >
  <button type="button" className={selectedButton === 0 ? 'active-btn-outline btn btn-outline-primary px-md-5' : ' btn btn-outline-primary px-md-5'} onClick={() => handleButtonClick(0)}>Single</button>
  <button type="button" className={selectedButton === 1 ? 'active-btn-outline btn btn-outline-primary px-md-5' : ' btn btn-outline-primary px-md-5'}  onClick={() => handleButtonClick(1)}>Packages</button>
  
              </div>
        </div>

        
        <div className='px-md-5'>
          {selectedButton === 0 &&(
            <SingleProducts productData={productData} handleDeleteClick={handleDeleteClick} handleProductClick={handleProductClick} handleEditClick={handleEditClick}/>
          )}
        </div>
        <div className=''>
          {selectedButton === 1 &&(
            <Packages/>
          )}
        </div>
        </div>
      )}
        
      </div>
      
      <Footer/>
    </>
  )
}

export default Products