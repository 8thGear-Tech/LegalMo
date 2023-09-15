import React, { useEffect, useRef, useState } from 'react'
import { CompanyDetailsForm } from '../../components/Forms/Company'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ProductItem } from './ProductItem';
import GuestNavbar from '../../components/Navbar/GuestNavbar';
import Footer from '../../components/Footer'
const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const ProductCarousel = ({shuffledProducts}) => {
  const productsPerSlide = {
    xl: 5,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 1,
  };
  
 


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
            <div className="d-flex gap-3">
              {productGroup.map((product, innerIndex) => (
                <div key={product.id}  className={`col-xl-${12 / productsPerSlide.xl} col-lg-${12 / productsPerSlide.lg} col-md-${12 / productsPerSlide.md} col-sm-${12 / productsPerSlide.sm} col-12 mb-5`}>
                  <div className="card h-100" style={{ borderRadius: '25px' }}>
                    <img
                      src={product.productImage}
                      className="card-img-top img-fixed-height" style={{ objectFit: 'cover', height: '250px', width: '100%' }}
                      alt={product.productTitle}
                    />
                    <div className="card-body" style={{ borderRadius: '0px 0px 25px 25px', background: '#D1D2D3' }}>
                      <p className="p-small" style={{ fontWeight: '500' }}>{product.productTitle}</p>
                      <p className="" style={{ fontWeight: '700' }}>₦{product.productAmount.toLocaleString()}</p>
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


const reviews= [
  {
  id:1,
  progress:100,
  review:"Excellent"
  },
  {
      id:2,
      progress:0,
      review:"Very good"
  },
  {
      id:3,
      progress:0,
      review:"Average"
  },
  {
      id:4,
      progress:0,
      review:"Poor"
  },
  {
      id:5,
      progress:0,
      review:"Terrible"
  },
  
  
];


function Precart() {

  const [shuffledProducts, setShuffledProducts] = useState([]);

  useEffect(() => {
   
    const shuffledArray = shuffleArray(ProductItem);
    setShuffledProducts(shuffledArray);
  }, []);
  const starIconsFill = Array(5).fill(<i className="bi bi-star-fill"></i>);
  const starIcons = Array(5).fill(<i className="bi bi-star"></i>);
const {productId} = useParams();
const [product, setProduct] = useState(null);
const fileInputRef = useRef(null);

const handleUploadClick = () => {
  fileInputRef.current.click();
};

const handleFileChange = (e) => {
  const selectedFile = e.target.files[0];

};
const navigate = useNavigate()

const [quantity, setQuantity] = useState(1);


useEffect(() => {
  const selectedProduct = ProductItem.find((item) => item.id === parseInt(productId, 10));
  setProduct(selectedProduct);
}, [productId]);

const handleQuantityChange = (e) => {
  setQuantity(e.target.value);
};



if (!product) {
  return <div className='justify-content-center align-items-center text-center my-5'>
 <div class="spinner-border text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
      </div>; 
}


  return (
    <>
    <GuestNavbar/>
    <div> 
      <section style={{backgroundColor:'#CFCFCF'}} className='p-5 '>
        <div className=' d-block d-sm-flex gap-5 justify-content-center text-align-center align-content-center text-center'>
        <div className="card mb-3" style={{borderRadius: '25px', width:'20rem'}}>
                    <img src={product.productImage} alt={product.productTitle}className="card-img-top" style={{borderRadius:'none'}} />
                    <div className="card-body justify-content-center align-items-center" style={{borderRadius: '0px 0px 20px 20px',
        background:'#545454', height:'5rem',}}>
                  
                    <p className="p-small text-white" style={{fontWeight:'500'}}>{product.productTitle}</p>
                    
    </div>
        </div>
        <div className='card p-4 mb-3' style={{border:'none', borderRadius:'0', backgroundColor:'#FBFCFD', maxWidth:'25rem'}}>
        <div className="d-flex  flex-column justify-content-center align-items-center text-align-center gap-3">
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
         <p>₦{product.productAmount.toLocaleString()}</p>
         <h6 style={{fontWeight:'500'}}>Available</h6>
         <p className='text-center' style={{fontSize:'17px'}}>Your selection is available for immediate purchase</p>

         <Link to='/payment' className='btn btn-primary' style={{width:'100%'}}>Purchase</Link>
         <Link to='/cart' className='btn btn-outline-primary'  style={{width:'100%'}}>Reserve</Link>
        </div>

        </div>
        </div>
        <div class="my-5 justify-content-center align-content-center mx-lg-5 px-sm-5">
  <h6 for="exampleFormControlTextarea1" class="form-label">Give details</h6>
  <textarea class="form-control bg-white" id="exampleFormControlTextarea1" rows="8" placeholder='Type more details about your purchase'></textarea>
  <div className='mt-4'>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button className=" d-flex gap-2" style={{border:'none', backgroundColor:'#CFCFCF'}} onClick={handleUploadClick}>Upload Document
      <i class="bi bi-cloud-upload"></i>
      </button>
    </div>
</div>
           
      </section>
      <section className='py-3  py-sm-5 px-sm-5 px-4'>
        <div className='line my-5' style={{border:'1px solid #7E7E7F'}}></div>
        <div className='px-lg-5 mx-2 d-block d-sm-flex justify-content-between gap-4 '> 
        <div className="d-flex flex-column gap-1 mb-5">
         <h4>Reviews</h4>
         <div className='d-flex gap-2'>
          <h6>5.0</h6>
         <div>
      {starIconsFill.map((icon, index) => (
        <span key={index} className='me-1'>{icon}</span>
      ))}
    </div>
         </div>
         <h6>5 out of 5 stars (based on 1 review)</h6>
         {reviews.map((review) => (
  <div key={review.id} className="d-flex align-items-center pre-cart">
    <div className="" style={{ minWidth: '100px' }}>
      <p className="my-auto" >{review.review}</p>
    </div>

    <div className="flex-grow-1">
      <div className="progress">
        <div
          className="progress-bar bg-dark"
          role="progressbar"
          style={{ width: `${review.progress}%` }}
          aria-valuenow={review.progress}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </div>
))}


        </div >
        <div className="d-flex flex-column gap-2">
         <h4>Fantastic service</h4>
         <div className='d-flex gap-2'>
          
          <div>
      {starIconsFill.map((icon, index) => (
        <span key={index} className='me-1'>{icon}</span>
      ))}
    </div>
    <h6>10 July, 2023</h6>
         
         </div>
         <div>
          <h6>LegalMO’s service is really great</h6>
          <h6> S&S Ltd</h6>
         </div>
        </div>
        </div>
        <div className='row justify-content-center mt-5'>
        <div className='col-sm-6 col-12  d-flex flex-column'>
          <div className='text-center mb-3'>
          <h6>Your rating</h6>
          <div className=''>
      {starIcons.map((icon, index) => (
        <span key={index} className='me-1'>{icon}</span>
      ))}
    </div>
          </div>
          <div className='form-group mb-4'>
          <h6 for="exampleFormControlTextarea1" class="form-label">Title of your review</h6>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" ></textarea>
          </div>
          <div className='form-group mb-3'>
          <h6 for="exampleFormControlTextarea1" class="form-label">Your review</h6>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" ></textarea>
          </div>
          <div className='text-center mt-3'>
          <button type='submit' className='btn btn-primary w-50'>Submit</button>
        </div>
        </div>
        </div>
        
      </section>
      <section className='px-lg-2'>
        <h3 className='my-5 text-center'>You may also like</h3>
        <div className='px-sm-5 mb-5'>
         <ProductCarousel shuffledProducts={shuffledProducts}/>
        </div>
      </section>
      
    
    </div>
    <Footer/>
    </>
    
  )
}

export default Precart