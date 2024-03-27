import React, { useState } from 'react';
import http from './httpCommon';
import Error from './error';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { formatDateToWords } from '../pages/Company/Precart';
 



export default () => {
  const { error } = Error();
  const navigate = useNavigate();
 

 
  const getAllRatings = (
    setMessage, setLoading, setIsSuccessful, reviews,setReviews, setShowModal
   
  ) => {
 
   
    setLoading(true);
    http().then((axios) => {
      axios
        .get('/ratings-api/rating')
        .then(async (response) => {
              
              
            setLoading(false);
            const apiReviews = response.data.map((review) => ({
                id: review._id,
                date: formatDateToWords(new Date(review.date)),
                reviewTitle: review.reviewTitle,
                companyName: review.companyId.companyName,
                companyId:  review.companyId._id,
                reviewText: review.review,
                rating: review.status,

               
              }
              
              ));
             
          
              const filteredApiReviews = apiReviews.filter((apiReview) => (
                !reviews.some((existingReview) => existingReview.id === apiReview.id)
              ));
          
              const mergedReviews = [
                ...reviews,
                ...filteredApiReviews,
              ];
          
              setReviews(mergedReviews);


 setMessage("You have successfully gotten all reviews");

 setIsSuccessful(true);

    
        })
        .catch((e) => {
       
        setIsSuccessful(false);
        setLoading(false);
        
        error(e, setMessage, setLoading, setIsSuccessful, setShowModal);
        });
        
    });
  };
  
 
  const createRating = (
    body, setMessage, setLoading, setIsSuccessful, reviews, setReviews, setShowModal
   
  ) => {
    
  
  const token= localStorage.getItem('userToken')

    
    http().then((axios) => {
      axios
        .post('/api/rating', body)
        .then(async (response) => {
      
            setLoading(false);
            const gotResponse =  response?.data;
            const newReviewId = response.data._id;


 setMessage(" Review Submitted Successfully");

 setIsSuccessful(true);
 const updatedReviews = [
    ...reviews,
  
    {
      id: newReviewId,
      date: formatDateToWords(new Date(response.data.date)),
      reviewTitle: response.data.reviewTitle,
      companyName: response.data.companyId.companyName,
      companyId:  response.data.companyId._id,
      reviewText: response.data.review,
      rating: response.data.status,
    }
  ];

  setReviews(updatedReviews);
    
        })
        .catch((e) => {
       
        setIsSuccessful(false);
        setLoading(false);
     
        error(e, setMessage, setLoading, setIsSuccessful, setShowModal);
        });
        
    });
  };
 

  const deleteRating= (
    setMessage, setLoading, setIsSuccessful, reviewId, reviews, setReviews, setShowModal
  ) => {
 
   const userID = localStorage.getItem('userId');
    setLoading(true);
    http().then((axios) => {
      axios
        .delete(`/api/rating/${reviewId}`)
        .then(async (response) => {
      
            setLoading(false);
            

 setMessage("Review deleted successfully");

 setIsSuccessful(true);
 const updatedReviews = reviews.filter(review => review.id !== reviewId);
 setReviews(updatedReviews);
    
        })
        .catch((e) => {
       
        setIsSuccessful(false);
        setLoading(false);
      
        error(e, setMessage, setLoading, setIsSuccessful, setShowModal);
        });
        
    });
  };

  const editRating = (
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
  ) => {
    const token = localStorage.getItem('userToken');
  
    http().then((axios) => {
      axios
        .patch(`/api/rating/${editReviewId}`, body)
        .then(async (response) => {
          setLoading(false);
  
          const updatedReviewId = response.data._id;
       setMessage('Review Updated Successfully');
          setIsSuccessful(true);
  
        
          const updatedReviews = [...reviews];
  
         
          const index = updatedReviews.findIndex((review) => review.id === updatedReviewId);
  
          if (index !== -1) {
           
            updatedReviews[index] = {
              ...updatedReviews[index],
              reviewTitle:response.data.reviewTitle,
              reviewText: response.data.review,
              companyName: response.data.companyId.companyName,
      companyId:  response.data.companyId._id,
              rating: response.data.status,
            };
  
           
            setReviews(updatedReviews);

            setEditReviewId(null);
            setNewReview({
              reviewTitle: '',
              reviewText: '',
            });
  
           
          }
        })
        .catch((e) => {
          setIsSuccessful(false);
          setLoading(false);
        
          error(e, setMessage, setLoading, setIsSuccessful, setShowModal);
        });
    });
  };
  

  return {
   
getAllRatings, createRating, editRating, deleteRating
    };
};