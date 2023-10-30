import React from 'react'
import { ProductItem } from './ProductItem'
import { useNavigate } from 'react-router-dom'

const SingleProducts = () => {

  const navigate = useNavigate();

  const handleProductClick = (product) => {
   navigate(`/pre-cart/${product.id}`);
  }

  return (
    <div className=''>
    <div className='card py-4 px-3 my-5 ' >
      <div className='container'>
        <div className='row' >
      {
        ProductItem.map((product) => {
            const {id,productTitle, productImage, productAmount, year} = product;
            return(
              <div className='col-lg-4 col-sm-6 col-12 mb-4 mb-sm-5 product-card' key={id} onClick={() => handleProductClick(product)} style={{}}>
                     <div className="card" style={{borderRadius: '30px',
        border: '1px solid  #ABB7D0', width:"100%",height:'100%'}}>
                    <img src={productImage} className="card-img-top" style={{borderTopRightRadius:'30px', borderTopLeftRadius:'30px',borderTop: '1px solid  #ABB7D0',height:'15rem', objectFit:'cover'}} alt="productImage"/>
                    <div className="card-body" style={{borderRadius: '0px 0px 30px 30px',
        background:'#D1D2D3'}}>
                  
                    <p className="p-small" style={{fontWeight:'500'}}>{productTitle}</p>
                    <p className="" style={{fontWeight:'700'}}>₦{productAmount.toLocaleString()}<span className='p-small'>{year}</span></p>
                </div>
              </div>
            </div>
            )
        })
      }
      </div>
      </div>
    </div>
    </div>
  )
}

export default SingleProducts
