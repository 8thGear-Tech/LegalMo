
import React, { createContext, useContext, useState } from 'react';


import { ProductItem } from "./pages/Company/ProductItem";



// Create a context
export const AppContext = createContext();

// Create a provider component
export const AppContextProvider = (props) => {
  // Initialize cart state
  const [cartItems, setCartItems] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to add items to the cart
//   const addToCart = (itemId) => {
//     setCartItems((prevCart) => {
  
//       const newCart = { ...prevCart };
  
//       if (newCart[itemId]) {
       
//         newCart[itemId]++;
//       } else {
        
//         newCart[itemId] = 1;
//       }
  
//       return newCart;
//     });
//   };
  
const addToCart = (itemId, quantity) => {
    setCartItems((prevCart) => {
      const newCart = { ...prevCart };
  
      if (newCart[itemId]) {
        newCart[itemId] += quantity; // Increment by the selected quantity
      } else {
        newCart[itemId] = quantity; // Set to the selected quantity
      }
  
      return newCart;
    });
  };
  
  // Function to remove items from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prevCart) => {
      // Clone the previous cart state to avoid mutation
      const newCart = { ...prevCart };

      // Check if the item is in the cart
      if (newCart[itemId]) {
        // If it is, decrement the quantity by 1
        newCart[itemId]--;
        // If the quantity becomes 0, remove the item from the cart
        if (newCart[itemId] === 0) {
          delete newCart[itemId];
        }
      }

      return newCart;
    });
  };

  // Function to change the quantity of items in the cart
  const changeQuantity = (itemId, newQuantity) => {
    setCartItems((prevCart) => {
      // Clone the previous cart state to avoid mutation
      const newCart = { ...prevCart };

      // Check if the item is in the cart
      if (newCart[itemId]) {
        // Set the quantity to the new value
        newCart[itemId] = newQuantity;

        // If the new quantity is 0 or negative, remove the item from the cart
        if (newQuantity <= 0) {
          delete newCart[itemId];
        }
      }

      return newCart;
    });
  };

  // Function to calculate the total amount in the cart
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    // Iterate through items in the cart and calculate the total amount
    for (const itemId in cartItems) {
      const itemQuantity = cartItems[itemId];
      const itemInfo = ProductItem.find((product) => product.id === Number(itemId));

      if (itemInfo) {
        totalAmount += itemQuantity * itemInfo.productAmount;
      }
    }

    return totalAmount;
  };

  // Create a context value object
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    changeQuantity,
    getTotalCartAmount,selectedProduct,setSelectedProduct
  };

  return (
    <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};



// export const AppContext = createContext(null);

// const getDefaultCart = () => {
//     let cart= {};
//     for (let i = 1; i < ProductItem.length + 1; i++) {
//         cart[i] = 0;
//     }
//     return cart;
// };

// export const AppContextProvider = (props) => {

//     const [cartItems, setCartItems] = useState(getDefaultCart());

//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItems){
//             if(cartItems[item] > 0){
//                 let itemInfo = ProductItem.find((product) => product.id === Number(item));
//                 totalAmount += cartItems[item] * itemInfo.productAmount
//             }
//         }
//         return totalAmount;
//     }

//     const addToCart = (itemId) => {
//         setCartItems((prev) => ({
//             ...prev, [itemId] : prev[itemId] + 1
//         }))
//     }
//    const contextValue= {cartItems, getTotalCartAmount, addToCart}


//    return(
//     <AppContextProvider value={contextValue} >{props.children}</AppContextProvider>
//    )
//   }

