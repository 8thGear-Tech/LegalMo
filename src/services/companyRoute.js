import React, { useState } from "react";
import http from "./httpCommon";
import Error from "./error";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default () => {
  const { error } = Error();
  const navigate = useNavigate();

  const getCompanyProfile = (
    setMessage,
    setLoading,
    setIsSuccessful,
    setDetails,
    companyId
  ) => {
    // const userId = localStorage.getItem("userId");
    console.log(companyId, "Company ID");
    setLoading(true);

    http().then((axios) => {
      axios
        .get(`/api/userprofile?_id=${companyId}`)
        .then(async (response) => {
          setLoading(false);

          console.log(response);
          const company = response?.data;

          if (company?._id === companyId) {
            setMessage("You have successfully gotten  profile details");
            setIsSuccessful(true);
            setDetails(company);
          } else {
            setMessage(
              "You do not have permission to view these profile details."
            );
            setIsSuccessful(false);
          }
        })
        .catch((e) => {
          setIsSuccessful(false);
          setLoading(false);
          // Handle API request error
          error(e, setMessage, setLoading, setIsSuccessful);
        });
    });
  };

  const updateProfile = (
    body,
    setMessage,
    setLoading,
    setIsSuccessful,
    setDetails,
    companyId,
    setShowModal
  ) => {
    console.log(body, "my profile body");
    setLoading(true);
    const form = new FormData();

    // form.append('officialEmail', body.officialEmail)
    // form.append('website', body.website)
    // form.append('yourBio', body.yourBio)

    // form.append('phoneNumber', body.phoneNumber)
    // form.append('officeAddress', body.officeAddress)
    // form.append('alternativeEmailAddress', body.alternativeEmailAddress)

    // form.append('profileImage', body.profileImage)

    if (body.officialEmail !== undefined && body.officialEmail !== null) {
      form.append("officialEmail", body.officialEmail);
    }
    if (body.website !== undefined && body.website !== null) {
      form.append("website", body.website);
    }
    if (body.yourBio !== undefined && body.yourBio !== null) {
      form.append("yourBio", body.yourBio);
    }
    if (body.phoneNumber !== undefined && body.phoneNumber !== null) {
      form.append("phoneNumber", body.phoneNumber);
    }
    if (body.officeAddress !== undefined && body.officeAddress !== null) {
      form.append("officeAddress", body.officeAddress);
    }
    if (
      body.alternativeEmailAddress !== undefined &&
      body.alternativeEmailAddress !== null
    ) {
      form.append("alternativeEmailAddress", body.alternativeEmailAddress);
    }

    // Check if the imageFile exists before appending it
    if (body.profileImage) {
      form.append("profileImage", body.profileImage);
    }

    const token = localStorage.getItem("userToken");
    console.log(token);
    console.log(form, "my form");
    http().then((axios) => {
      axios
        .patch(`/api/updateprofile?_id=${companyId}`, form, {
          headers: {
            Accept: "application/json",
            ...(token && {
              Authorization: `Bearer ${token}`,
            }),
            "Content-Type": "multipart/form-data", // Override for FormData
          },
        })
        .then(async (response) => {
          setLoading(false);
          const gotResponse = response?.data?.company;
          console.log(response, "my product response");

          setMessage("Profile Updated Successfully");

          setIsSuccessful(true);
          setShowModal(true);
          setDetails(gotResponse);
          setTimeout(() => {
            setIsSuccessful(false);

            setShowModal(false);

            navigate(`/company/profile/${companyId} `);
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

  const createCart = (body, setMessage, setLoading, setIsSuccessful) => {
    setLoading(true);

    http().then((axios) => {
      axios
        .post("/api/cart", body)
        .then(async (response) => {
          setLoading(false);

          console.log(response, "my response");
          const cart = response?.data?.products;
          console.log(cart, "mycart");

          setMessage("You have successfully added to cart");
          setIsSuccessful(true);
          navigate("/cart");
        })
        .catch((e) => {
          setIsSuccessful(false);
          setLoading(false);
          // Handle API request error
          error(e, setMessage, setLoading, setIsSuccessful);
        });
    });
  };

  const getCart = (
    setMessage,
    setLoading,
    setIsSuccessful,
    setReservedItems,
    setBill,
    companyId
  ) => {
    setLoading(true);

    http().then((axios) => {
      axios
        .get("/api/cart")
        .then(async (response) => {
          setLoading(false);

          console.log(response.data, "getCart response");

          if (Array.isArray(response.data) && response.data.length > 0) {
            const cart = response.data[0].products;
            const bill = response.data[0].bill;

            setReservedItems(cart);
            setBill(bill);
            setMessage("Cart retrieved successfully");
            setIsSuccessful(true);
          } else {
            setIsSuccessful(false);
          }
        })
        .catch((e) => {
          setLoading(false);
          setIsSuccessful(false);
          error(e, setMessage, setLoading, setIsSuccessful);
        });
    });
  };

  const deleteCartItem = (
    reservedItems,
    setReservedItems,
    productId,
    setMessage,
    setLoading,
    setIsSuccessful
  ) => {
    setLoading(true);

    http().then((axios) => {
      axios
        .delete(`/api/cart/${productId}`)
        .then(async (response) => {
          setLoading(false);

          console.log(response, "deleteCartItem response");

          // Filter out the deleted product from the cart
          const updatedProducts = reservedItems.products.filter(
            (product) => product.productId !== productId
          );

          // Update the reservedItems with the updated products array after removal
          const updatedReservedItems = {
            ...reservedItems,
            products: updatedProducts,
          };

          setReservedItems(updatedReservedItems);
          setMessage("Product removed from the cart");
          setIsSuccessful(true);

          console.log(updatedReservedItems, "updated cart");
        })
        .catch((e) => {
          setLoading(false);
          setIsSuccessful(false);
          error(e, setMessage, setLoading, setIsSuccessful);
        });
    });
  };

  // const checkout = (setMessage, setLoading, setIsSuccessful, setShowModal) => {
  //   setLoading(true);

  //   http().then((axios) => {
  //     axios
  //       .post("/api/checkout")
  //       .then(async (response) => {
  //         setLoading(false);

  //         setMessage("Checkout successful!");
  //         setIsSuccessful(true);
  //         setShowModal(true);
  //         setTimeout(() => {
  //           setIsSuccessful(false);
  //           setShowModal(false);
  //           navigate("/products");
  //         }, 2000);
  //       })
  //       .catch((e) => {
  //         setLoading(false);
  //         setIsSuccessful(false);
  //         error(e, setMessage, setLoading, setIsSuccessful);
  //       });
  //   });
  // };

  const checkout = async (
    setMessage,
    setLoading,
    setIsSuccessful,
    setShowModal
  ) => {
    try {
      setLoading(true);

      const axios = await http();
      const response = await axios.post("/api/checkout");

      setLoading(false);
      setMessage("Checkout successful!");
      setIsSuccessful(true);
      setShowModal(true);

      setTimeout(() => {
        setIsSuccessful(false);
        setShowModal(false);
        navigate("/products");
      }, 2000);

      // Return the response for external use
      return response;
    } catch (error) {
      setLoading(false);
      setIsSuccessful(false);
      error(error, setMessage, setLoading, setIsSuccessful);
      // Re-throw the error to be caught by the caller
      throw error;
    }
  };

  const clearCart = (
    setReservedItems,
    setMessage,
    setLoading,
    setIsSuccessful
  ) => {
    setLoading(true);

    http().then((axios) => {
      axios
        .post("/api/clear-cart")
        .then(async (response) => {
          setLoading(false);

          console.log(response, "clearCart response");

          setMessage("Cart cleared successfully");
          setIsSuccessful(true);
          setReservedItems({ products: [] });
          console.log("Cart cleared");
        })
        .catch((e) => {
          setLoading(false);
          setIsSuccessful(false);
          error(e, setMessage, setLoading, setIsSuccessful);
        });
    });
  };

  const getPendingJobs = (setJobs, setMessage, setLoading, setIsSuccessful) => {
    setLoading(true);

    http().then((axios) => {
      axios
        .get("/job-api/company/pendingjobs")
        .then(async (response) => {
          setLoading(false);

          console.log(response);

          const job = response.data;
          console.log(job, "the jobs");

          setIsSuccessful(true);

          setJobs(job);
        })
        .catch((e) => {
          setIsSuccessful(false);
          setLoading(false);
          // Handle API request error
          error(e, setMessage, setLoading, setIsSuccessful);
        });
    });
  };

  const getCompletedJobs = (
    setJobs,
    setMessage,
    setLoading,
    setIsSuccessful
  ) => {
    setLoading(true);

    http().then((axios) => {
      axios
        .get("/job-api/company/completedjobs")
        .then(async (response) => {
          setLoading(false);

          console.log(response);

          const job = response.data;
          console.log(job, "the jobs");

          setIsSuccessful(true);

          setJobs(job);
        })
        .catch((e) => {
          setIsSuccessful(false);
          setLoading(false);
          // Handle API request error
          error(e, setMessage, setLoading, setIsSuccessful);
        });
    });
  };
  return {
    getCompanyProfile,
    createCart,
    updateProfile,
    getCart,
    deleteCartItem,
    clearCart,
    checkout,
    getPendingJobs,
    getCompletedJobs,
  };
};
