import React, { useEffect, useState } from "react";
import GuestNavbar from "../../components/Navbar/GuestNavbar";
import UserNavbar from "../../components/Navbar/UserNavbar";
import Footer from "../../components/Footer";
import { ProductCarousel, shuffleArray } from "./Precart";

import { useAppContext } from "../../AppContext";
import { Link, useNavigate } from "react-router-dom";
import productRoute from "../../services/productRoute";
import companyRoute from "../../services/companyRoute";
import { LoginModal } from "../../components/Forms/Authenticationforms";

//flutterwave
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import jwtDecode from "jwt-decode";

const Cart = () => {
  const { productData, setProductData } = useAppContext();
  const [shuffledProducts, setShuffledProducts] = useState([]);
  const [reservedItems, setReservedItems] = useState([]);

  const [bill, setBill] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const { getProducts, getOneProduct } = productRoute();
  const { getCart, deleteCartItem, clearCart, checkout } = companyRoute();
  const navigate = useNavigate();
  const companyId = localStorage.getItem("userId");
  const userType = localStorage.getItem("userType");
  const token = localStorage.getItem("userToken");
  useEffect(() => {
    if (userType && token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    if (userType === "company") {
      getCart(
        setMessage,
        setLoading,
        setIsSuccessful,
        setReservedItems,
        setBill,
        companyId
      );
    } else {
      const storedReservedItems =
        JSON.parse(localStorage.getItem("reservedItems")) || [];
      setReservedItems(storedReservedItems);
    }
  }, []);

  useEffect(() => {
    getProducts(
      setMessage,
      setLoading,
      setIsSuccessful,
      setProductData,
      setShowModal
    );
  }, []);

  useEffect(() => {
    if (productData.length > 1) {
      const shuffledArray = shuffleArray(productData);
      setShuffledProducts(shuffledArray);
    }
  }, [productData]);

  useEffect(() => {
    if (reservedItems?.length > 0) {
      let total = reservedItems?.reduce((acc, product) => {
        return acc + product.price * product.quantity;
      }, 0);
      setBill(total);
    } else {
      setBill(0);
    }
  }, [reservedItems]);

  const handleRemove = (productId) => {
    if (userType === "company") {
      deleteCartItem(
        reservedItems,
        setReservedItems,
        productId,
        setMessage,
        setLoading,
        setIsSuccessful
      );
    } else {
      const updatedReservedItems = reservedItems.filter(
        (item) => item.productId !== productId
      );

      setReservedItems(updatedReservedItems);

      localStorage.setItem(
        "reservedItems",
        JSON.stringify(updatedReservedItems)
      );
    }
  };

  const handleClearCart = () => {
    if (userType === "company") {
      clearCart(setReservedItems, setMessage, setLoading, setIsSuccessful);
    } else {
      setReservedItems([]);

      localStorage.removeItem("reservedItems");
    }
  };

  const handlePurchase = () => {
    if (userType === "company") {
      checkout(setMessage, setLoading, setIsSuccessful, setShowModal);
    } else {
      localStorage.removeItem("reservedItems");
      navigate("/signup/asacompany");
    }
    setReservedItems([]);
  };

  // const [customerDetails, setCustomerDetails] = useState({
  //   email: "",
  //   phone_number: "",
  //   name: "",
  // });

  // useEffect(() => {
  //   const authToken = localStorage.getItem("userToken");

  //   try {
  //     const decodedToken = jwtDecode(authToken);
  //     console.log("Decoded Token:", decodedToken);

  //     if (!decodedToken) {
  //       console.error("Failed to decode authentication token");
  //       // Handle accordingly, e.g., redirect to login
  //       return;
  //     }

  //     // Check if the token is expired
  //     if (decodedToken.exp && decodedToken.exp * 1000 < Date.now()) {
  //       console.error("Authentication token has expired");
  //       // Handle accordingly, e.g., redirect to login
  //       return;
  //     }

  //     setCustomerDetails({
  //       email: decodedToken.officialEmail,
  //       phone_number: decodedToken.phoneNumber,
  //       name: decodedToken.name,
  //     });
  //     // setCustomerDetails({
  //     //   email: decodedToken.email?.officialEmail || "", // Using optional chaining and fallback value
  //     //   phone_number: decodedToken.email?.phoneNumber || "",
  //     //   name: decodedToken.email?.name || "",
  //     // });
  //   } catch (error) {
  //     console.error("Error decoding authentication token:", error);
  //     // Handle accordingly, e.g., redirect to login
  //   }
  // }, []); // Empty dependency array ensures this effect runs only once

  // const config = {
  //   public_key: "FLWPUBK_TEST-62a6e8f55dd4f5a0cfcaf74735d20aad-X",
  //   tx_ref: Date.now(),
  //   amount: bill, // Assuming bill is the total amount to be paid
  //   currency: "NGN",
  //   payment_options: "card,mobilemoney,ussd",
  //   isTestMode: true,
  //   customer: {
  //     email: customerDetails.email,
  //     phone_number: customerDetails.phone_number,
  //     name: customerDetails.name,
  //   },
  //   // customizations: {
  //   //   title: "my Payment Title",
  //   //   // description: "Payment for items in cart",
  //   //   // logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
  //   // },
  // };

  // const handleFlutterPayment = useFlutterwave(config);
  // const [paymentLoading, setPaymentLoading] = useState(false);

  // const handlePurchase = async () => {
  //   if (userType === "company") {
  //     try {
  //       setPaymentLoading(true);

  //       //product name starts
  //       // Get the product name from the first item in reservedItems
  //       const productName =
  //         reservedItems[0]?.productName ||
  //         reservedItems[0]?.productId?.productName ||
  //         "Default Product Name"; // Set a default name if not available

  //       // // Get an array of product names from reservedItems
  //       // const productNames = reservedItems.map(
  //       //   (item) =>
  //       //     item?.productName ||
  //       //     item?.productId?.productName ||
  //       //     "Default Product"
  //       // );

  //       // // Create a comma-separated string of product names
  //       // const formattedProductNames = productNames.join(", ");

  //       const configWithUserDetails = {
  //         ...config,
  //         customer: {
  //           email: customerDetails.email,
  //           phone_number: customerDetails.phone_number,
  //           name: customerDetails.name,
  //         },
  //         customizations: {
  //           ...config.customizations,
  //           title: productName, // Set the product name as the title
  //           // title: formattedProductNames, // Set the product name as the title
  //         },
  //       };

  //       console.log("configWithUserDetails:", configWithUserDetails);
  //       //product name ends

  //       await handleFlutterPayment({
  //         // ...config,
  //         ...configWithUserDetails,
  //         callback: (response) => {
  //           console.log(response);
  //           setPaymentLoading(false);
  //           closePaymentModal();
  //           setMessage("Payment successful!");

  //           //checkout starts
  //           // Make the checkout API call
  //           try {
  //             checkout(setMessage, setLoading, setIsSuccessful, setShowModal);

  //             // Additional actions after successful checkout if needed
  //           } catch (checkoutError) {
  //             console.error("Checkout API Error:", checkoutError);
  //             setMessage("Checkout failed. Please try again.");
  //             setIsSuccessful(false);
  //             setShowModal(true);
  //           }
  //           // checkout ends
  //           setIsSuccessful(true);
  //           setShowModal(true);
  //         },
  //         onClose: () => {
  //           setPaymentLoading(false);
  //         },
  //       });
  //     } catch (error) {
  //       console.error("Payment Error:", error);
  //       setPaymentLoading(false);
  //       setMessage("Payment failed. Please try again.");
  //       setIsSuccessful(false);
  //       setShowModal(true);
  //     }
  //   } else {
  //     localStorage.removeItem("reservedItems");
  //     navigate("/signup/asacompany");
  //   }
  //   setReservedItems([]);
  // };

  const handleProductClick = (productId) => {
    getOneProduct(
      setMessage,
      setLoading,
      setIsSuccessful,
      productId,
      setProduct,
      setShowModal
    );
  };

  if (loading) {
    return (
      <div
        className="justify-content-center align-items-center text-center"
        style={{ paddingTop: "300px" }}
      >
        <div className="spinner-border text-secondary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoggedIn ? <UserNavbar /> : <GuestNavbar />}

      <div className="py-5 px-3 px-md-5 ">
        <div>
          <p className="py-2" style={{ color: "#373737", fontWeight: "500" }}>
            Your Selections
          </p>
          <div
            className="line mb-3"
            style={{ border: "1px solid #7E7E7F" }}
          ></div>
          {reservedItems?.length > 0 ? (
            <div>
              <div className="d-block d-lg-flex gap-4 align-items-center ">
                <div className=" cartItems">
                  {reservedItems?.map((product) => {
                    return (
                      <div key={product?._id}>
                        <div className="d-block d-sm-flex gap-3 py-4 px-2 px-xxl-4 ">
                          <div
                            className="card "
                            style={{ borderRadius: "25px", width: "15rem" }}
                          >
                            <img
                              src={
                                product?.productImage ||
                                product?.productId?.productImage
                              }
                              alt={
                                product?.productName ||
                                product?.productId?.productName
                              }
                              className="card-img-top"
                              style={{ borderRadius: "none" }}
                            />
                            <div
                              className="card-body justify-content-center align-items-center"
                              style={{
                                borderRadius: "0px 0px 20px 20px",
                                background: "#D1D2D3",
                              }}
                            >
                              <p
                                className="p-small text-white"
                                style={{ fontWeight: "500" }}
                              >
                                {product?.productName ||
                                  product?.productId?.productName}
                              </p>
                            </div>
                          </div>
                          <div className="d-block d-md-flex gap-4 mt-3 mt-md-0">
                            <div className="d-flex flex-column">
                              {product?.detail && (
                                <p>
                                  <span style={{ color: "#032773" }}>
                                    {" "}
                                    Details:
                                  </span>{" "}
                                  {product?.detail || product?.companyDetail}
                                </p>
                              )}
                              {product?.file && product?.fileName && (
                                <a
                                  href={product?.file}
                                  style={{ color: "#032773" }}
                                  className="mb-1"
                                >
                                  {" "}
                                  {product?.fileName}
                                </a>
                              )}
                              <p>
                                Your selection is available for immediate
                                purchase
                              </p>
                              <div className="d-flex gap-5">
                                <p
                                  onClick={() =>
                                    handleRemove(product?.productId)
                                  }
                                  style={{ cursor: "pointer" }}
                                >
                                  Remove
                                </p>
                              </div>
                            </div>
                            <div className="mt-3 mt-md-0 text-align-center text-center">
                              <p>QTY:</p>

                              <button
                                className="px-2"
                                style={{ backgroundColor: "white" }}
                              >
                                {product.quantity}
                              </button>
                            </div>

                            <div className="mt-3 mt-md-0">
                              <p>
                                ₦
                                {product?.productPrice?.toLocaleString() ||
                                  product?.productId?.productPrice.toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="line "
                          style={{ border: "1px solid #7E7E7F" }}
                        ></div>
                      </div>
                    );

                    return null;
                  })}
                </div>
                <div
                  className="card p-3 mt-xl-0 mt-lg-5 mt-5"
                  style={{
                    borderRadius: "none",
                    width: "18rem",
                    color: "#7E7E7F",
                  }}
                >
                  <div className="">
                    <h6 style={{ color: "#7E7E7F" }}>Order Summary</h6>
                    <div
                      className="line my-3"
                      style={{ border: "1px solid #7E7E7F" }}
                    ></div>
                    <div
                      className="d-flex flex-column"
                      style={{ color: "#7E7E7F" }}
                    >
                      <div className="d-flex justify-content-between">
                        {" "}
                        <p style={{ color: "#7E7E7F" }}>
                          Tax <span className="p-small">(incl)</span>
                        </p>
                      </div>
                      <div className="d-flex justify-content-between">
                        {" "}
                        <p style={{ color: "#7E7E7F" }}>Total</p>
                        <p style={{ color: "#7E7E7F" }}>
                          ₦{bill.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <a
                      onClick={handlePurchase}
                      className="btn btn-primary w-100"
                    >
                      Purchase
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center py-5">
                {" "}
                <a
                  onClick={handleClearCart}
                  className="btn btn-primary px-5 py-2"
                >
                  Clear Cart
                </a>
              </div>
            </div>
          ) : (
            <p className="mt-4">Your cart is empty</p>
          )}
        </div>
      </div>
      <section className="px-lg-2">
        <h3 className="my-5 text-center">You may also like</h3>
        <div className="px-sm-5 mb-5">
          <ProductCarousel
            shuffledProducts={shuffledProducts}
            handleProductClick={handleProductClick}
          />
        </div>
      </section>
      <Footer />
      <LoginModal
        showModal={showModal}
        isSuccess={isSuccessful}
        closeModal={() => setShowModal(false)}
        modalText={message}
      />
    </>
  );
};

export default Cart;
