import React, { useEffect, useState } from "react";
import GuestNavbar from "../../components/Navbar/GuestNavbar";
import UserNavbar from "../../components/Navbar/UserNavbar";
import Footer from "../../components/Footer";
import { ProductCarousel, shuffleArray } from "./Precart";
// import { productData } from './ProductItem'
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
  const [isLoading, setIsLoading] = useState(true);

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
      console.log("show me cart", storedReservedItems);
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

  // const calculateTotalBill = () => {
  //   let total = 0;
  //   reservedItems.forEach((product) => {
  //     total += product.price * product.quantity;
  //   });
  //   return total;
  // };

  useEffect(() => {
    if (reservedItems.length > 0) {
      let total = reservedItems.reduce((acc, product) => {
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

  // const [paymentAmount, setPaymentAmount] = useState(0); // Set the initial value as needed

  // const handlePurchase = () => {
  //   if (userType === "company") {
  //     checkout(setMessage, setLoading, setIsSuccessful, setShowModal);
  //   } else {
  //     localStorage.removeItem("reservedItems");
  //     navigate("/signup/asacompany");
  //   }
  // };

  // const config = {
  //   public_key: "FLWPUBK_TEST-62a6e8f55dd4f5a0cfcaf74735d20aad-X",
  //   tx_ref: Date.now(),
  //   amount: bill, // Assuming bill is the total amount to be paid
  //   currency: "NGN",
  //   payment_options: "card,mobilemoney,ussd",
  //   isTestMode: true,
  //   customer: {
  //     email: "user@gmail.com",
  //     phone_number: "070********",
  //     name: "john doe",
  //   },
  //   customizations: {
  //     title: "my Payment Title",
  //     description: "Payment for items in cart",
  //     logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
  //   },
  // };

  // const handleFlutterPayment = useFlutterwave(config);
  // const [paymentLoading, setPaymentLoading] = useState(false);

  // const handlePurchase = async () => {
  //   if (userType === "company") {
  //     try {
  //       setPaymentLoading(true);
  //       // Trigger Flutterwave payment
  //       await handleFlutterPayment({
  //         callback: (response) => {
  //           console.log(response);
  //           // Handle the payment success response here
  //           setPaymentLoading(false);
  //           closePaymentModal();
  //           // Perform any additional actions based on the payment success
  //           setMessage("Payment successful!");
  //           setIsSuccessful(true);
  //           setShowModal(true);
  //           // Reset the cart or perform other actions as needed
  //           // ...
  //         },
  //         onClose: () => {
  //           // Handle modal closure here (optional)
  //           setPaymentLoading(false);
  //         },
  //       });
  //     } catch (error) {
  //       // Handle payment error here
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
  // };

  const config = {
    public_key: "FLWPUBK_TEST-62a6e8f55dd4f5a0cfcaf74735d20aad-X",
    tx_ref: Date.now(),
    amount: bill, // Assuming bill is the total amount to be paid
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    isTestMode: true,
    customer: {
      email: "user@gmail.com",
      phone_number: "070********",
      name: "john doe",
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const handlePurchase = async () => {
    if (userType === "company") {
      try {
        setPaymentLoading(true);
        // Trigger Flutterwave payment
        // Get the authentication token from local storage
        const authToken = localStorage.getItem("userToken");
        if (!authToken) {
          console.error("Authentication token is missing or invalid");
          // Handle accordingly, e.g., redirect to login
          return;
        }

        // Decode the authentication token to get user details
        const decodedToken = jwtDecode(authToken);
        console.log("decodedToken:", decodedToken);
        if (decodedToken.exp && decodedToken.exp * 1000 < Date.now()) {
          console.error("Authentication token has expired");
          // Handle accordingly, e.g., redirect to login
          return;
        }
        // Use user details in your Flutterwave configuration
        const configWithUserDetails = {
          ...config,
          customer: {
            email: decodedToken.officialEmail,
            phone_number: decodedToken.phoneNumber,
            name: decodedToken.name,
          },
          // You can also update other fields based on user details
        };

        await handleFlutterPayment({
          ...configWithUserDetails,
          callback: (response) => {
            console.log(response);
            // Handle the payment success response here
            setPaymentLoading(false);
            closePaymentModal();
            // Perform any additional actions based on the payment success
            setMessage("Payment successful!");
            setIsSuccessful(true);
            setShowModal(true);
            // Reset the cart or perform other actions as needed
            // ...
          },
          onClose: () => {
            // Handle modal closure here (optional)
            setPaymentLoading(false);
          },
        });
      } catch (error) {
        // Handle payment error here
        console.error("Payment Error:", error);
        setPaymentLoading(false);
        setMessage("Payment fasiled. Please try again.");
        setIsSuccessful(false);
        setShowModal(true);
      }
    } else {
      localStorage.removeItem("reservedItems");
      navigate("/signup/asacompany");
    }
  };

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
                      <div key={product?.productId}>
                        <div className="d-block d-sm-flex gap-3 py-4 px-2 px-xxl-4 ">
                          <div
                            className="card "
                            style={{ borderRadius: "25px", width: "15rem" }}
                          >
                            <img
                              src={product?.productImage}
                              alt={product?.productName}
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
                                {product?.productName}
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
                                  {product?.detail}
                                </p>
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
                              {/* <select
                          id={`quantitySelect-${product?._id}`}
                          className='form-select'
                          value={product.quantity}
                          onChange={(e) => handleQuantityChange(product?._id, parseInt(e.target.value, 10))}
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
                        </select> */}

                              <button
                                className="px-2"
                                style={{ backgroundColor: "white" }}
                              >
                                {product.quantity}
                              </button>
                            </div>

                            <div className="mt-3 mt-md-0">
                              <p>₦{product?.price.toLocaleString()}</p>
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
