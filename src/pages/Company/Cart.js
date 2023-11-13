import React, { useEffect, useState } from 'react'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import UserNavbar from '../../components/Navbar/UserNavbar'
import Footer from '../../components/Footer'
import { ProductCarousel, shuffleArray } from './Precart'
import { ProductItem } from './ProductItem'
import { useAppContext } from '../../AppContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, changeQuantity, selectedProduct } = useAppContext();
    const [shuffledProducts, setShuffledProducts] = useState([]);
    const [reservedItems, setReservedItems] = useState([]); 
    const [total, setTotal] = useState(0); 
 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {

    const userType = localStorage.getItem('userType');
    const token = localStorage.getItem('userToken');
    if (userType && token)  {
      
      setIsLoggedIn(true);
    } else {
 
      setIsLoggedIn(false);
    }

    setIsLoading(false);
  }, []); 

    useEffect(() => {
      const shuffledArray = shuffleArray(ProductItem);
      setShuffledProducts(shuffledArray);
    }, []);
  
   

    useEffect(() => {
   
        const shuffledArray = shuffleArray(ProductItem);
        setShuffledProducts(shuffledArray);
      }, []);


      useEffect(() => {
        const filteredItems = ProductItem.filter((product) => cartItems[product.id] > 0);
        setReservedItems(filteredItems);
        calculateTotal(filteredItems);
      }, [cartItems]);
    
      // const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
      
      const handleQuantityChange = (productId, newQuantity) => {
        changeQuantity(productId, newQuantity);
      };
      const handleRemove = (productId) => {
       
        removeFromCart(productId);
      };

     const taxAmount = 9375;
      const calculateTotal = (items) => {
        let totalAmount = 0;
    
        items.forEach((product) => {
          const quantity = cartItems[product.id];
          totalAmount += quantity * product.productAmount;
        });
    
        setTotal(totalAmount);
       
       
      };

    
      if (isLoading){
        return <div className='justify-content-center align-items-center text-center' style={{paddingTop:'300px'}}>
       <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
            </div>; 
      }
   
    
  return (
    
    <>
      {isLoggedIn ? <UserNavbar /> : <GuestNavbar />}
     
      <div className='d-block d-lg-flex py-5 px-3 px-md-5 gap-3 align-items-center' >
      <div >
       <p className='py-2' style={{color:'#373737', fontWeight:'500'}}>Your Selections</p>
       <div className='line ' style={{border:'1px solid #7E7E7F'}}></div>
       {reservedItems.length > 0 ? (
      <div className='cartItems'>
        {reservedItems.map((product) => {
          const quantityInCart = cartItems[product.id] || 0;

          if (quantityInCart > 0) {
            return (
              <div key={product.id}>
              
                <div className='d-block d-sm-flex gap-3 py-4 px-2 px-xxl-4 '>
                <div className="card " style={{borderRadius: '25px', width:'15rem', }}>
                    <img src={product.productImage} alt={product.productTitle}className="card-img-top" style={{borderRadius:'none'}} />
                    <div className="card-body justify-content-center align-items-center" style={{borderRadius: '0px 0px 20px 20px',
        background:'#D1D2D3'}}>
                  
                    <p className="p-small text-white" style={{fontWeight:'500'}}>{product.productTitle}</p>
                    
                  </div>
                </div>
                  <div className='d-block d-md-flex gap-4 mt-3 mt-md-0'>
                  <div className='d-flex flex-column'>
                    <p>Your selection is available for immediate purchase</p>
                    <div className='d-flex gap-5'>
                      <p>Edit</p>
                      <div style={{borderLeft: '2px solid black'}}></div>
                      <p onClick={() => handleRemove(product.id)}style={{cursor:'pointer'}}>Remove</p>
                    </div>
                  </div>
                  <div className='mt-3 mt-md-0'>
                      <p>QTY:</p>
                      <select
                          id={`quantitySelect-${product.id}`}
                          className='form-select'
                          value={quantityInCart}
                          onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value, 10))}
                        >
                          {Array.from({ length: 10 }, (_, i) => (
                            <option
                              key={i + 1}
                              value={i + 1}
                              className='justify-content-center align-items-center text-align-center'
                            >
                              {i + 1}
                            </option>
                          ))}
                        </select>
                    </div>
                
                  <div className='mt-3 mt-md-0'>
                    <p>₦{product.productAmount.toLocaleString()}{product.year}</p>
                  </div>
                  </div>
                
                 
                
                </div>
                <div className='line ' style={{border:'1px solid #7E7E7F'}}></div>

              </div>
            );
          }

          return null
        })}
      </div>
       ) : (
        <p className='mt-4'>Your cart is empty</p>
       )}
      </div>
      {reservedItems.length > 0 ? (
        <div className='card p-3 mt-xl-0 mt-lg-5 mt-5' style={{borderRadius:'none',width:'18rem', height:'auto', color:'#7E7E7F'}}>
          <div className=''>
        <h6  style={{color:'#7E7E7F'}}>Order Summary</h6>
        <div className='line my-3' style={{border:'1px solid #7E7E7F'}}></div>
        <div className='d-flex flex-column'  style={{color:'#7E7E7F'}}>
          
          <div className='d-flex justify-content-between'> <p  style={{color:'#7E7E7F'}}>Tax <span className='p-small'>(incl)</span></p> 
         
          </div>
          <div className='d-flex justify-content-between'> <p  style={{color:'#7E7E7F'}}>Total</p> 
          <p  style={{color:'#7E7E7F'}}>₦{total.toLocaleString()}</p>
          </div>
        
      </div>
      <Link to='/signup/asacompany' className='btn btn-primary w-100'>Purchase</Link>
        </div>
      </div>
      ): (
       <div></div>
      )}
      
      </div>
      <section className='px-lg-2'>
        <h3 className='my-5 text-center'>You may also like</h3>
        <div className='px-sm-5 mb-5'>
         <ProductCarousel shuffledProducts={shuffledProducts}/>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Cart
