import React from 'react'
import { ProductItem } from './ProductItem'

const SingleProducts = () => {
  return (
    <div className='card py-4' >
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 ' style={{bsGap: "5rem"}}>
      {
        ProductItem.map((product) => {
            const {id,productTitle, productImage, productAmount, year} = product;
            return(
                <div className='col mb-4 px-5' key={id}>
                     <div className="card "style={{borderRadius: '50px',
        border: '1px solid  #ABB7D0', background:'#D1D2D3'}} >
                    <img src={productImage} className="card-img-top img-fluid" style={{borderRadius:'none'}} alt="productImage"/>
                    <div className="card-body p-3" style={{ background:'#D1D2D3'}}>
                  
                    <p className="card-text">{productTitle}</p>
                    <h5 className="card-title">₦{productAmount.toLocaleString()}/<span className='card-text'>{year}</span></h5>
    </div>
    </div>
                  </div>
            )
        })
      }
      </div>
    </div>
  )
}

export default SingleProducts
