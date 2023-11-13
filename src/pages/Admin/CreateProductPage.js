import React, { useState , useEffect, useRef} from 'react'
import { CreateProductForm } from '../../components/Forms/Admin'
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import { LoginModal } from '../../components/Forms/Authenticationforms';
import { useNavigate } from 'react-router-dom';
import productRoute from '../../services/productRoute';
function CreateProductPage() {
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [formValid, setFormValid] = useState(false); 
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [productData, setProductData] = useState([]);
  
const {createProduct} = productRoute();

  


  useEffect(() => {
    if (
      productName.trim() !== '' &&
      productPrice.trim() !== '' &&
      productDescription.trim() !== '' && selectedImage !== null
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [productName, productPrice, productDescription, selectedImage]);

  const fileInputRef = useRef(null);

  const handleImageUpload = () => {
    fileInputRef.current.click();
  
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    console.log(file);
    if (file) {
      setSelectedImage(file.name);
    
      document.getElementById('imageTextInput').value = file.name;
      setFormValid(true); 
    }
  };


  const handleProductCreation =(e) => {
    e.preventDefault();
    console.log(imageFile)
  
  const body = {
    productName:productName,
  productPrice: productPrice,
  productDescription:productDescription,
 productImage:imageFile,
   }

   
   createProduct( body, setMessage, setLoading, setIsSuccessful, setProductData, setShowModal)
  }

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <AdminNavbar>
    <div className='py-5 py-lg-0 my-sm-5 px-md-5 px-3'>
    <div className='mb-5'>
    <div
      className='card p-sm-5 p-3 my-5'
      style={{
        borderRadius: '20px',
        background: 'linear-gradient(0deg, #FFF 0%, #FFF 100%), #FFF',
        border: 'none',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      }}
    >
    <div className='px-3 px-md-5 py-5'><CreateProductForm setShowModal={setShowModal}
          setSuccessMessage={setSuccessMessage} handleProductCreation={handleProductCreation}
          handleFileChange={handleFileChange} handleImageUpload={handleImageUpload} fileInputRef={fileInputRef}
          productName={productName} setProductName={setProductName} productDescription={productDescription} setProductDescription={setProductDescription} productPrice={productPrice} setProductPrice={setProductPrice} formValid={formValid}
          modalText='New Product Created'/></div>
    </div>
    </div>
    </div>
    <LoginModal 
        showModal={showModal}
        isSuccess={isSuccessful}
        closeModal={()=> setShowModal(false)}
        modalText={message}
      />
    </AdminNavbar>
  )
}

export default CreateProductPage