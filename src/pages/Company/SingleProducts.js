import React from 'react'

import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from "react";







const SingleProducts = ({productData, handleDeleteClick, handleProductClick, handleEditClick}) => {

  const navigate = useNavigate();

 

  const userType = localStorage.getItem('userType');
  const userToken = localStorage.getItem('userToken');
 


  return (
    <div className=''>
    <div className='card py-4 px-3 my-5 ' >
    
      <div className='container'>
        <div className='row' >
      {
        productData?.map((product) => {
            const {_id,productName, productImage, productPrice} = product;
            return(
              <div className='col-lg-4 col-sm-6 col-12 mb-4 mb-sm-5 product-card' key={_id} style={{}}>
                     <div className="card" style={{borderRadius: '30px',
        border: '1px solid  #ABB7D0', width:"100%",height:'100%'}}>
                    <img src={productImage} className="card-img-top" onClick={() => handleProductClick(_id)} style={{borderTopRightRadius:'30px', borderTopLeftRadius:'30px',borderTop: '1px solid  #ABB7D0',height:'15rem', objectFit:'cover'}} alt="productImage"/>
                    <div className="card-body" style={{borderRadius: '0px 0px 30px 30px',
        background:'#D1D2D3'}}>
          <div className='d-flex justify-content-between'>
                  <div onClick={() => handleProductClick(_id)}>
                    <p className="p-small" style={{fontWeight:'500'}}>{productName}</p>
                    <p className="" style={{fontWeight:'700'}}>₦{productPrice?.toLocaleString()}</p>
                    </div>
                    <div>
                    {userType === 'admin' && userToken && (
                      <div className='d-flex gap-3'>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDeleteClick(_id)}
                        >
                           <i className='bi bi-trash' style={{ fill: 'red' }}></i>
                        </button>
                        <button
                        className="btn btn-primary"
                        onClick={() => handleEditClick(product)}
                      >
                         <i className="bi bi-pencil-square" style={{  }}></i>
                      </button>
                      </div>
                      )}
                      </div>
                </div>
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
