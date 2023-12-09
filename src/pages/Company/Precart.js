import React, { useContext, useEffect, useRef, useState } from 'react'
import { CompanyDetailsForm } from '../../components/Forms/Company'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { ProductItem } from './ProductItem';
import GuestNavbar from '../../components/Navbar/GuestNavbar';
import UserNavbar from '../../components/Navbar/UserNavbar';
import Footer from '../../components/Footer'
import { useAppContext } from '../../AppContext';
import axios from 'axios';
import productRoute from '../../services/productRoute';
import ratingsRoute from '../../services/ratingsRoute';
import companyRoute from '../../services/companyRoute';
import { LoginModal } from '../../components/Forms/Authenticationforms';


export const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export const ProductCarousel = ({shuffledProducts, handleProductClick}) => {
  const productsPerSlide = {
    xl: 5,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1,
  };
  
  const navigate= useNavigate();


  const productGroups = [];
  const totalProducts = shuffledProducts.length;

  for (let i = 0; i < totalProducts; i += productsPerSlide.xl) {
    productGroups.push(shuffledProducts.slice(i, i + productsPerSlide.xl)); 
  }


 
  return (
    <div id="productCarousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-inner px-5 px-sm-0">
        {productGroups.map((productGroup, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <div className="d-flex gap-3 product-card">
              {productGroup.map((product, innerIndex) => (
                <div key={product._id}  className={`col-xl-${12 / productsPerSlide.xl} col-lg-${12 / productsPerSlide.lg} col-md-${12 / productsPerSlide.md} col-sm-${12 / productsPerSlide.sm} col-12 mb-5`}>
                  <div className="card h-100" style={{ borderRadius: '25px' }} onClick={() => handleProductClick(product?._id)}>
                    <img
                      src={product?.productImage}
                      className="card-img-top img-fixed-height" style={{ objectFit: 'cover', height: '', width: '100%' , borderTopRightRadius:'25px', borderTopLeftRadius:'25px',}}
                      alt={product?.productName}
                    />
                    <div className="card-body" style={{ borderRadius: '0px 0px 25px 25px', background: '#D1D2D3' }}>
                      <p className="p-small" style={{ fontWeight: '500' }}>{product?.productName}</p>
                      <p className="" style={{ fontWeight: '700' }}>₦{product?.productPrice.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='product-carousel-container'>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#productCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#productCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div>
     
    </div>
  );
};

export const progressReviews= [
  {
  id:1,
 
  review:"Excellent"
  },
  {
      id:2,
      
      review:"Very good"
  },
  {
      id:3,
 
      review:"Average"
  },
  {
      id:4,
      
      review:"Poor"
  },
  {
      id:5,
     
      review:"Terrible"
  },
  
  
];

export function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
} 

export function formatDateToWords(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  const day = date.toLocaleDateString('en-US', { day: 'numeric' });
  const month = date.toLocaleDateString('en-US', { month: 'long' });
  const year = date.toLocaleDateString('en-US', { year: 'numeric' });

  return `${day}${getDaySuffix(day)} ${month} ${year}`;
}


export const date = formatDateToWords('2022-07-10'); 

export function getRatingStars(rating) {
  const maxRating = 5;
  const filledStars = Math.min(maxRating, rating);
  const emptyStars = maxRating - filledStars;
  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(
      <i key={i} className="bi bi-star-fill"></i>
    );
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <i key={i + filledStars} className="bi bi-star"></i>
    );
  }

  return stars;
}

export const ReviewContainer = ({ averageRating, totalReviews, progressReviews, label, reviews, averageStarIconsFill, handleDeleteReview, handleEditReview, isLoggedIn })=> {

 
  return (
    <div className='px-lg-5 mx-2 d-block d-sm-flex justify-content-between gap-4 flex-wrap review-container '> 
    <div className="d-flex flex-column gap-1 mb-5 average-review">
     <h4>Reviews</h4>
     <div className='d-flex gap-2'>
     <h6>{averageRating.toFixed(1)}</h6>
  <div>
  {averageStarIconsFill.map((icon, index) => (
<span key={index} className="me-1">
{icon}
</span>
))}
  </div>
     </div>
     
     <h6>

     {averageRating.toFixed(1)} out of 5 stars (based on {totalReviews}{' '}
{totalReviews === 1 ? 'review' : 'reviews'})
</h6>

{progressReviews.map((progressReview) => {
const isSelected = progressReview.review === label;
const progressBarWidth = isSelected ? '100%' : '0%';
return (
<div key={progressReview.id} className="d-flex align-items-center pre-cart">
  <div className="" style={{ minWidth: '100px' }}>
    <p className="my-auto">{progressReview.review}</p>
  </div>
  <div className="flex-grow-1">
    <div className="progress">
      <div
        className={`progress-bar ${isSelected ? 'bg-dark' : 'bg-light'}`}
        role="progressbar"
        style={{ width: progressBarWidth}}
        aria-valuenow={isSelected ? '100' : '0'}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</div>
);
})}


    </div >
    <div className="d-flex flex-wrap">
{reviews.map((review, index) => {
  const { id, reviewText, reviewTitle, companyName, rating, date, companyId } = review;

  const userId= localStorage.getItem('userId')

  const isLoggedInUserReview = isLoggedIn && (userId === companyId);
  return (
    <div key={id} className={`col-12 col-md-${reviews.length === 1 ? '12' : '6'} mb-4 review-card${index >= 3 ? ' mt-4' : ''}`}>
      <div className='d-flex gap-3'>
            <h4>{reviewTitle} </h4> 
            </div>
            <div className='d-flex gap-2'>
            <div>{getRatingStars(review.rating)}</div>
            <h6>{date}</h6>
            </div>
            <div>
            <h6>{reviewText}</h6>
      <h6> {companyName}</h6>
            </div>
           
           
            {isLoggedInUserReview && review.id !== 1 &&  (  
              <div> <button onClick={() => handleEditReview(review)} className="btn btn-primary mt-2 me-2"><i className="bi bi-pencil-square"></i></button>

      <button onClick={() => handleDeleteReview(review.id)} className="btn btn-danger mt-2"><i className="bi bi-trash" style={{color:''}}></i></button>
      </div>
    )}
          </div>
        )
      })}

    </div>
    </div>
  )
}

export function Precart() {
const {addToCart, setSelectedProduct, selectedRating, setSelectedRating,reviews,setReviews,newReview, setNewReview,totalRating,totalReviews, averageRating, averageStarIconsFill, label, productData, setProductData, userData, cartItems, setCartItems} = useAppContext();
const {productId} = useParams();
const [product, setProduct] = useState(null);




const [editReviewId, setEditReviewId] = useState(null);
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [details, setDetails] = useState('')
 
const navigate = useNavigate()
const [quantity, setQuantity] = useState(1);

const [shuffledProducts, setShuffledProducts] = useState([]);
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [isLoading, setIsLoading] = useState(true);
const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [reservedItems, setReservedItems] = useState([]); 
  const [showModal, setShowModal] = useState(false);
const {getOneProduct, getProducts}= productRoute()
const {getAllRatings, createRating, editRating, deleteRating}= ratingsRoute()
const {createCart} = companyRoute()
const [selectedFileUrl, setSelectedFileUrl] = useState(null);
const cloudinaryRef = useRef();
const widgetRef = useRef();  
const userType = localStorage.getItem('userType');
  const token = localStorage.getItem('userToken');
useEffect(() => {

  
    if (userType && token)  {
    setIsLoggedIn(true);
  } else {

    setIsLoggedIn(false);
  }

  
}, []);  

useEffect(() => {
  getOneProduct(
    setMessage, setLoading, setIsSuccessful, productId, setProduct, setShowModal
  );
}, [productId]);


useEffect(() => {
  getAllRatings(setMessage, setLoading, setIsSuccessful, reviews,setReviews, setShowModal);
}, []);




useEffect(() => {
  getProducts(setMessage, setLoading, setIsSuccessful, setProductData, setShowModal);
}, []);


useEffect(() => {
  
  if (productData.length > 1) {
    const shuffledArray = shuffleArray(productData);
    setShuffledProducts(shuffledArray);
  }
}, [productData]);


const handleRatingClick = (rating) => {
  setSelectedRating(rating);
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (editReviewId) {
    handleUpdateReview(); 
  } else {
    handleReviewSubmit(); 
  }
};

const handleReviewSubmit =  () => {
  if(!isLoggedIn){
    return
  }


 

  const body = {
    review: newReview.reviewText, 
    status: selectedRating, 
    reviewTitle:newReview.reviewTitle,
    productId:productId,
  };
 createRating(
  body, setMessage, setLoading, setIsSuccessful, reviews, setReviews, setShowModal
 
)
    setNewReview({
      reviewTitle: '',
      reviewText: '',
    });
    setSelectedRating(0);
  
};

const handleEditReview = (review) => {
  setEditReviewId(review.id);
  setNewReview({
    reviewTitle: review.reviewTitle,
    reviewText: review.reviewText,
  });
  setSelectedRating(review.rating);

};
const handleUpdateReview =  () => {
  if (editReviewId) {
    const body = {
      review: newReview.reviewText,
      status: selectedRating,
      reviewTitle:newReview.reviewTitle,
      productId:productId,
    };
    editRating(
      editReviewId,
      body,
      setMessage,
      setLoading,
      setIsSuccessful,
      setEditReviewId,
      reviews,
      setReviews,
      setNewReview,
      setShowModal
    );
  }
  setEditReviewId(null);
  setNewReview({
    reviewTitle: '',
    reviewText: '',
  });
  setSelectedRating(0);
};




const handleCancelEdit = () => {
  setEditReviewId(null); 
  setNewReview({
    reviewTitle: '',
    reviewText: '',
  });
  setSelectedRating(0); 
};





const handleDeleteReview =  (reviewId) => {
  deleteRating(
    setMessage, setLoading, setIsSuccessful, reviewId, reviews, setReviews, setShowModal
  )
 
};




const handleQuantityChange = (e) => {
  setQuantity(e.target.value);
};

const openUploadWidget = () => {
  if (window.cloudinary) {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'do03u50qn',
        uploadPreset: 'LegalMoUpload',
      },
      (error, result) => {
      
        if (!error && result && result.event === 'success') {
          const fileName = result.info.original_filename || '';
          setSelectedFile(fileName);

          const fileUrl = result.info.url || '';
          setSelectedFileUrl(fileUrl);
         
        }
      }
    );

 
    if (widgetRef.current) {
      widgetRef.current.open();
    }
  }
};


const handleDeleteClick = () => {
  

  setSelectedFileUrl(null);
  setSelectedFile(null);


};

const handleReserve= ()=> {
  const userType=localStorage.getItem('userType')
  if(userType === 'company'){

  const body = {
    productId: product?._id,
      quantity:quantity,
  }
      if (details !== '' && details !== null && details !== undefined) {
        body.detail = details;
      }
      
    
      if (selectedFileUrl !== '' && selectedFileUrl !== null && selectedFileUrl !== undefined) {
        body.file = selectedFileUrl;
      }
  
      if (selectedFile !== '' && selectedFile !== null && selectedFile !== undefined) {
        body.fileName = selectedFile;
      }
    
  
  createCart(
    body, 
    setMessage,
    setLoading,
    setIsSuccessful
  ) 

  }else{

    
 
    const reservedItem = {
      productId: product?._id,
      productPrice: product.productPrice,
      productName: product.productName,
      productImage: product.productImage,
      quantity: quantity,
      detail: details,
    };
    let existingReservedItems = JSON.parse(localStorage.getItem('reservedItems')) || [];

    
      const existingProductIndex = existingReservedItems.findIndex(
        (item) => item.productId === reservedItem.productId
      );

      if (existingProductIndex !== -1) {
    
        existingReservedItems[existingProductIndex].quantity = quantity;
        existingReservedItems[existingProductIndex].detail = details;
      } else {
     
        existingReservedItems.push(reservedItem);
      }

      localStorage.setItem('reservedItems', JSON.stringify(existingReservedItems));

 
    navigate('/cart');
  }
}
const handleProductClick = (productId) => {
  
  getOneProduct(
    setMessage, setLoading, setIsSuccessful, productId, setProduct, setShowModal
  )
  
};




if (loading) {
  return <div className='justify-content-center align-items-center text-center' style={{paddingTop:'300px'}}>
 <div className="spinner-border text-secondary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
      </div>; 
}


  return (
    <>
    {isLoggedIn ? <UserNavbar /> : <GuestNavbar />}
   
    <div> 
      <section style={{backgroundColor:'#CFCFCF'}} className='p-5 '>
        <div className=' d-block d-md-flex gap-5 justify-content-center text-align-center align-content-center text-center'>
        <div className="card mb-3" style={{borderRadius: '25px', width:'20rem'}}>
                    <img src={product?.productImage} alt={product?.productName}className="" style={{borderRadius:'none', height:'319px'}} />
                    <div className="card-body justify-content-center align-items-center" style={{borderRadius: '0px 0px 20px 20px',
        background:'#545454', height:'',}}>
                  
                    <p className="p-small text-white" style={{fontWeight:'500'}}>{product?.productName}</p>
                    
    </div>
        </div>
        <div className='card p-4 mb-3' style={{border:'none', borderRadius:'0', backgroundColor:'#FBFCFD', maxWidth:'25rem'}}>
        <div className="d-flex  flex-column justify-content-center align-items-center text-align-center gap-2">
         <div className='form-group'>
          <select
            id="quantitySelect"
            className="form-select "
            value={quantity}
            onChange={handleQuantityChange}
          >
              <option disabled value={1}>QTY: 1</option>
    {Array.from({ length: 10 }, (_, i) => (
      <option key={i + 1} value={i + 1} className='justify-content-center align-items-center text-align-center'>
        {i + 1}
      </option>
    ))}
          </select>
         </div>
         <p>₦{product?.productPrice.toLocaleString()}</p>
         <h6 style={{fontWeight:'500'}}>Available</h6>

         <p className='text-center' style={{fontSize:'16px', fontWeight:'600'}}>Your order will be delivered between 7-10 working days after purchase</p>
         <p className='text-center' style={{fontSize:'17px'}}>Your selection is available for immediate purchase</p>

         
         <button onClick={handleReserve} className='btn btn-primary'  style={{width:'100%'}}>Reserve</button>
        </div>

        </div>
        </div>
        <div className='px-xl-5 mx-xl-5'>
        <div className="my-5 justify-content-center align-content-center mx-lg-5 px-sm-5">
  <h6 name="exampleFormControlTextarea1" className="form-label">Give details</h6>
  <textarea className="form-control bg-white" id="exampleFormControlTextarea1" rows="8" placeholder='Type more details about your purchase' value={details} onChange={(event) => setDetails(event.target.value)}></textarea>
  <div className='mt-4'>
   

{!selectedFileUrl && (
       <button className=" d-flex gap-2" style={{border:'none', backgroundColor:'#CFCFCF'}}
          onClick={openUploadWidget}
         
        >
          Upload Document <i className="bi bi-cloud-upload"></i>
        </button>
      )}

{selectedFileUrl && (
               <div className='d-flex my-2' style={{flexWrap:'wrap' }}>
                 <p className='p-small' style={{ }}>
                   
                   <i className='bi bi-file-earmark-text-fill' style={{ color: 'wine' }}></i> &nbsp;
                   <a href={selectedFileUrl}>{selectedFile}</a>
                   <button className='btn btn-danger' onClick={handleDeleteClick} style={{ border: 'none', backgroundColor: 'transparent' }}>
                     <i className='bi bi-trash' style={{ color: 'red', fill: 'red' }}></i>
                   </button>
                 </p>
               </div>
             )}

     
    </div>
</div>
        </div>
       
           
      </section>
      <section className='py-3  py-sm-5 px-sm-5 px-4'>
        <div className='line my-5' style={{border:'1px solid #7E7E7F'}}></div>
        <ReviewContainer  averageRating={averageRating}
      totalReviews={totalReviews}
      progressReviews={progressReviews}
      label={label}
      reviews={reviews} averageStarIconsFill={averageStarIconsFill} handleDeleteReview={handleDeleteReview} handleEditReview={handleEditReview} isLoggedIn={isLoggedIn}/>

      {isLoggedIn && (
        <div className='row justify-content-center mt-5'>
        <div className='col-sm-6 col-12  d-flex flex-column'>
        <form onSubmit={handleSubmit}>
        <div className='text-center mb-3'>
          <h6>Your rating</h6>
          <div>
            {[1, 2, 3, 4, 5].map((rating) => (
              <span
              key={rating}
              onClick={() => handleRatingClick(rating)}
              className={`me-1 bi bi-star${rating <= selectedRating ? '-fill' : ''}`}
            ></span>
            ))}
          </div>
        </div>
        {/* <div className='form-group mb-4'>
    <label name="companyName" className="form-label">Company Name</label>
    <input
      type="text"
      className="form-control"
      id="companyName"
      value={newReview.companyName} 
      onChange={(e) => setNewReview({ ...newReview, companyName: e.target.value })} required
    />
  </div> */}
  <div className='form-group mb-4'>
    <label name="reviewTitle" className="form-label">Title of your review</label>
    <input
      type="text"
      className="form-control"
      id="reviewTitle"
      value={newReview.reviewTitle} 
      onChange={(e) => setNewReview({ ...newReview, reviewTitle: e.target.value })} required
    />
  </div>
  <div className='form-group mb-3'>
    <label name="reviewText" className="form-label">Your review</label>
    <textarea
      className="form-control"
      id="reviewText"
      rows="5"
      value={newReview.reviewText}
      onChange={(e) => setNewReview({ ...newReview, reviewText: e.target.value })} required
    ></textarea>
  </div>
        <div className='text-center mt-3'>
          {editReviewId && (
            <button type="button" onClick={handleCancelEdit} className="btn btn-danger me-3" style={{width:"40%"}}>
            Cancel
          </button>
          )}
          <button type='submit' className='btn btn-primary' style={{width:"40%"}} >Submit</button>
        </div>
      </form>
        </div>
        </div>
      )}
        
        
      </section>
      <section className='px-lg-2'>
        <h3 className='my-5 text-center'>You may also like</h3>
        <div className='px-sm-5 mb-5'>
         <ProductCarousel shuffledProducts={shuffledProducts} handleProductClick={handleProductClick}/>
        </div>
      </section>
      
    
    </div>
    <Footer/>
    < LoginModal
        showModal={showModal}
        isSuccess={isSuccessful}
        closeModal={() => setShowModal(false)}
        modalText={message}
        
      />
    </>
    
  )
}

