
import React, { createContext, useContext, useState } from 'react';


import { ProductItem } from "./pages/Company/ProductItem";
import { jobLists } from './pages/Admin/JobLists';




export const AppContext = createContext();


export const AppContextProvider = (props) => {

  const [cartItems, setCartItems] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedRating, setSelectedRating] = useState(0);
  const [companyName, setCompanyName] = useState('');
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [submittedInfo, setSubmittedInfo] = useState(null);

  const [jobList, setJobList] = useState(jobLists)

  const [reviews, setReviews] = useState([
    {
      id: 1,
      reviewTitle: 'Fantastic Service',
      rating: 5,
      companyName: 'S&S Ltd',
      date: '10th July, 2023',
      reviewText: 'LegalMO’s service is really great',
    },
  ]);

  const [newReview, setNewReview] = useState({
    reviewTitle: '',
    companyName: '',
    reviewText: '',
  });



  

  const totalReviews = reviews.length;
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = parseFloat((totalRating / totalReviews).toFixed(1));

  const filledStarsCount = Math.floor(averageRating); 
  const fractionalPart = averageRating - filledStarsCount; 
  const averageStarIconsFill = Array(5).fill(0).map((_, index) => {
    if (index < filledStarsCount) {
      return <i key={index} className="bi bi-star-fill"></i>; 
    } else if (index === filledStarsCount && fractionalPart > 0) {
      return <i key={index} className="bi bi-star-half"></i>; 
    } else {
      return <i key={index} className="bi bi-star"></i>; 
    }
  });
  
  
  
  
  function calculateProgress(averageRating) {
    
    
    const ratingRanges = [
      { label: 'Terrible', minRating: 0, maxRating: 1.9 },
      { label: 'Poor', minRating: 2, maxRating: 2.9 },
      { label: 'Average', minRating: 3, maxRating: 3.9 },
      { label: 'Very Good', minRating: 4, maxRating: 4.4 },
      { label: 'Excellent', minRating: 4.5, maxRating: 5 },
    ];
  
    let selectedRange = null;
    for (const range of ratingRanges) {
      if (averageRating >= range.minRating && averageRating <= range.maxRating) {
        selectedRange = range;
        break;
      }
    }
  
    return selectedRange;
  }
  const selectedRange = calculateProgress(averageRating);
  const { label, minRating, maxRating } = selectedRange || {};
  
const addToCart = (itemId, quantity) => {
    setCartItems((prevCart) => {
      const newCart = { ...prevCart };
  
      if (newCart[itemId]) {
        newCart[itemId] += quantity; 
      } else {
        newCart[itemId] = quantity; 
      }
  
      return newCart;
    });
  };
 
  const removeFromCart = (itemId) => {
    setCartItems((prevCart) => {
 
      const newCart = { ...prevCart };

      if (newCart[itemId]) {
       
        newCart[itemId]--;
        
        if (newCart[itemId] === 0) {
          delete newCart[itemId];
        }
      }

      return newCart;
    });
  };

 
  const changeQuantity = (itemId, newQuantity) => {
    setCartItems((prevCart) => {
      
      const newCart = { ...prevCart };

     
      if (newCart[itemId]) {
        
        newCart[itemId] = newQuantity;

        if (newQuantity <= 0) {
          delete newCart[itemId];
        }
      }

      return newCart;
    });
  };


  const getTotalCartAmount = () => {
    let totalAmount = 0;

    
    for (const itemId in cartItems) {
      const itemQuantity = cartItems[itemId];
      const itemInfo = ProductItem.find((product) => product.id === Number(itemId));

      if (itemInfo) {
        totalAmount += itemQuantity * itemInfo.productAmount;
      }
    }

    return totalAmount;
  };

  const contextValue = {
    jobList, setJobList,
    cartItems,
    addToCart,
    removeFromCart,
    changeQuantity,
    getTotalCartAmount,selectedProduct,setSelectedProduct, selectedRating, setSelectedRating, companyName,setCompanyName, reviewTitle,setReviewTitle, reviewText,setReviewText, submittedInfo,setSubmittedInfo, reviews,setReviews,newReview, setNewReview,totalRating,totalReviews, averageRating, averageStarIconsFill, calculateProgress,selectedRange, label
  };

  return (
    <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>
  );
};


export const useAppContext = () => {
  return useContext(AppContext);
};




