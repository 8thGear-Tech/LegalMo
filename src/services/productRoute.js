import React, { useState } from 'react';
import http from './httpCommon';
import Error from './error';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
 



export default () => {
  const { error } = Error();
  const navigate = useNavigate();
 

 
  const getProducts = (
    setMessage, setLoading, setIsSuccessful, setProductData, setShowModal
   
  ) => {
 
   
    setLoading(true);
    http().then((axios) => {
      axios
        .get('/product-api/products')
        .then(async (response) => {
      
            setLoading(false);
            const gotResponse =  response?.data?.products;
 console.log(gotResponse);

 setMessage("You have successfully gotten all products");

 setIsSuccessful(true);
 setProductData(gotResponse);
    
        })
        .catch((e) => {
       
        setIsSuccessful(false);
        setLoading(false);
       
        error(e, setMessage, setLoading, setIsSuccessful, setShowModal);
        });
        
    });
  };
  
 
  const createProduct = (
    body, setMessage, setLoading, setIsSuccessful, setProductData, setShowModal
   
  ) => {
    
   console.log(body, 'my product body')
    setLoading(true);
    const form = new FormData();
    form.append('productName', body.productName)
    form.append('productPrice', body.productPrice)
    form.append('productDescription', body.productDescription)
    form.append('productImage', body.productImage)
  const token= localStorage.getItem('userToken')
console.log(token)
    console.log(form, 'my form');
    http().then((axios) => {
      axios
        .post('/api/create', form,{
        headers: {
          Accept: 'application/json',
          ...(token && {
            Authorization: `Bearer ${token}`,
          }),
          "Content-Type": "multipart/form-data", // Override for FormData
        },
      })
        .then(async (response) => {
      
            setLoading(false);
            const gotResponse =  response?.data;
 console.log(response,"my product response");

 setMessage("New Product Created");

 setIsSuccessful(true);
 setShowModal(true);
 setProductData(gotResponse);
 setTimeout(() => {
  setIsSuccessful(false);

  setShowModal(false);
 
  navigate('/products')
  
}, 2000);
    
        })
        .catch((e) => {
       
        setIsSuccessful(false);
        setLoading(false);
        setShowModal(true);
        error(e, setMessage, setLoading, setIsSuccessful, setShowModal);
        });
        
    });
  };
 

  const deleteProduct = (
    setMessage, setLoading, setIsSuccessful, productId, updatedProductData, setProductData, setShowModal
  ) => {
 
   
    setLoading(true);
    http().then((axios) => {
      axios
        .delete(`/api/delete/${productId}`)
        .then(async (response) => {
      
            setLoading(false);
            

 setMessage("Product deleted successfully");

 setIsSuccessful(true);
 setShowModal(true)
 setProductData(updatedProductData);
    
        })
        .catch((e) => {
       
        setIsSuccessful(false);
        setLoading(false);
        setShowModal(true);
        error(e, setMessage, setLoading, setIsSuccessful, setShowModal);
        });
        
    });
  };


  const getOneProduct = (
    setMessage, setLoading, setIsSuccessful, productId, setProduct, setShowModal
  ) => {
 
   
    setLoading(true);
    http().then((axios) => {
      axios
        .get(`/product-api/product/${productId}`)
        .then(async (response) => {
      
            setLoading(false);
            const product= response.data
            console.log(product)
           
 setMessage("Product gotten successfully");

 setIsSuccessful(true);

 setProduct(product)
  navigate(`/pre-cart/${productId}`
  )
  


    
        })
        .catch((e) => {
       
        setIsSuccessful(false);
        setLoading(false);
        
        error(e, setMessage, setLoading, setIsSuccessful, setShowModal);
        });
        
    });
  };
  return {
   
getProducts, createProduct, deleteProduct, getOneProduct
    };
};