import React, { createContext, useContext, useEffect, useState } from "react";
import companyImage from "./assets/images/adminprofile-lg.svg";
import lawyerImage from "./assets/images/lawyer-image.svg";

// import { ProductItem } from "./pages/Company/ProductItem";
import { jobLists } from "./pages/Admin/JobLists";
import productRoute from "./services/productRoute";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [companyUserProfilePicture, setCompanyUserProfilePicture] =
    useState(companyImage);
  const [lawyerUserProfilePicture, setLawyerUserProfilePicture] =
    useState(lawyerImage);
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedRating, setSelectedRating] = useState(0);
  const [companyName, setCompanyName] = useState("");
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [submittedInfo, setSubmittedInfo] = useState(null);
  const [productData, setProductData] = useState([]);
  const [jobList, setJobList] = useState(jobLists);
  const [authenticated, setAuthenticated] = useState(false);
  const [userData, setUserData] = useState([]);
  // useEffect(() => {
  //   // Check local storage for authentication status when the component mounts
  //   const storedAuthStatus = localStorage.getItem('authenticated');
  //   if (storedAuthStatus === 'true') {
  //     setAuthenticated(true);
  //   }
  // }, []); // Run this effect only once during component mount

  const [reviews, setReviews] = useState([
    {
      id: 1,
      reviewTitle: "Fantastic Service",
      rating: 5,
      companyName: "S&S Ltd",
      date: "10th July, 2023",
      reviewText: "LegalMO’s service is really great",
    },
  ]);

  const [newReview, setNewReview] = useState({
    reviewTitle: "",
    companyName: "",
    reviewText: "",
  });

  const totalReviews = reviews.length;
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = parseFloat((totalRating / totalReviews).toFixed(1));

  const filledStarsCount = Math.floor(averageRating);
  const fractionalPart = averageRating - filledStarsCount;
  const averageStarIconsFill = Array(5)
    .fill(0)
    .map((_, index) => {
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
      { label: "Terrible", minRating: 0, maxRating: 1.9 },
      { label: "Poor", minRating: 2, maxRating: 2.9 },
      { label: "Average", minRating: 3, maxRating: 3.9 },
      { label: "Very Good", minRating: 4, maxRating: 4.4 },
      { label: "Excellent", minRating: 4.5, maxRating: 5 },
    ];

    let selectedRange = null;
    for (const range of ratingRanges) {
      if (
        averageRating >= range.minRating &&
        averageRating <= range.maxRating
      ) {
        selectedRange = range;
        break;
      }
    }

    return selectedRange;
  }
  const selectedRange = calculateProgress(averageRating);
  const { label, minRating, maxRating } = selectedRange || {};

  // const addToCart = (productId, quantity, details) => {
  //   const existingProductIndex = cartItems.findIndex(
  //     (item) => item.productId === productId
  //   );

  //   if (existingProductIndex !== -1) {
  //     // If product already exists, update the quantity
  //     const updatedCart = [...cartItems];
  //     updatedCart[existingProductIndex].quantity += quantity;
  //     updatedCart[existingProductIndex].details = details;
  //     setCartItems(updatedCart);
  //   } else {
  //     // If the product is not in the list, add it as a new item in the cart
  //     const newCartItem = {
  //       productId: productId,
  //       quantity: quantity,
  //       details: details,
  //       // Add other details as needed (e.g., product details)
  //     };
  //     setCartItems([...cartItems, newCartItem]);
  //   }
  // };

  // const updateCartItem = (productId, newQuantity) => {
  //   setCartItems((prevCartItems) =>
  //     prevCartItems.map((item) =>
  //       item.productId === productId ? { ...item, quantity: newQuantity } : item
  //     )
  //   );
  // };

  const addToCart = (productId, quantity) => {
    setCartItems((prevCart) => {
      const newCart = { ...prevCart };

      if (newCart[productId]) {
        newCart[productId] = quantity;
      } else {
        newCart[productId] = quantity;
      }

      return newCart;
    });
  };

  // const addToCart = (productId, quantity) => {
  //   setCartItems((prevCart) => {
  //     const existingProductIndex = prevCart.findIndex((item) => item.productId === productId);

  //     if (existingProductIndex !== -1) {
  //       // If the product already exists in the cart, update the quantity
  //       const updatedCart = [...prevCart];
  //       updatedCart[existingProductIndex].quantity += quantity;
  //       return updatedCart;
  //     } else {
  //       // If the product is not in the cart, add it as a new item
  //       const newCartItem = {
  //         productId: productId,
  //         quantity: quantity,

  //       };
  //       return [...prevCart, newCartItem];
  //     }
  //   });
  // };

  const removeFromCart = (productId) => {
    setCartItems((prevCart) => {
      const newCart = { ...prevCart };

      if (newCart[productId]) {
        newCart[productId]--;

        if (newCart[productId] === 0) {
          delete newCart[productId];
        }
      }

      return newCart;
    });
  };

  const changeQuantity = (productId, newQuantity) => {
    setCartItems((prevCart) => {
      const newCart = { ...prevCart };

      if (newCart[productId]) {
        newCart[productId] = newQuantity;

        if (newQuantity <= 0) {
          delete newCart[productId];
        }
      }

      return newCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const productId in cartItems) {
      const itemQuantity = cartItems[productId];
      const itemInfo = productData?.find(
        (product) => product.id === Number(productId)
      );

      if (itemInfo) {
        totalAmount += itemQuantity * itemInfo.productPrice;
      }
    }

    return totalAmount;
  };

  // const updateCompanyUserProfilePicture = (newProfilePictureUrl) => {
  //   setCompanyUserProfilePicture(newProfilePictureUrl);
  // };

  // const updateLawyerUserProfilePicture = (newProfilePictureUrl) => {
  //   setLawyerUserProfilePicture(newProfilePictureUrl);
  // };

  const contextValue = {
    jobList,
    setJobList,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    changeQuantity,
    getTotalCartAmount,
    selectedProduct,
    setSelectedProduct,
    selectedRating,
    setSelectedRating,
    companyName,
    setCompanyName,
    reviewTitle,
    setReviewTitle,
    reviewText,
    setReviewText,
    submittedInfo,
    setSubmittedInfo,
    reviews,
    setReviews,
    newReview,
    setNewReview,
    totalRating,
    totalReviews,
    averageRating,
    averageStarIconsFill,
    calculateProgress,
    selectedRange,
    label,
    setCompanyUserProfilePicture,
    setLawyerUserProfilePicture,
    companyUserProfilePicture,
    lawyerUserProfilePicture,
    authenticated,
    setAuthenticated,
    userData,
    setUserData,
    productData,
    setProductData,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
