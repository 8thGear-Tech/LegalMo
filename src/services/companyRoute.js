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
    setLoading(true);

    http().then((axios) => {
      axios
        .get(`/api/userprofile?_id=${companyId}`)
        .then(async (response) => {
          setLoading(false);

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
    setLoading(true);
    const form = new FormData();

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

    if (body.profileImage) {
      form.append("profileImage", body.profileImage);
    }

    const token = localStorage.getItem("userToken");

    http().then((axios) => {
      axios
        .patch(`/api/updateprofile?_id=${companyId}`, form, {
          headers: {
            Accept: "application/json",
            ...(token && {
              Authorization: `Bearer ${token}`,
            }),
            "Content-Type": "multipart/form-data",
          },
        })
        .then(async (response) => {
          setLoading(false);
          const gotResponse = response?.data?.company;

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

          const cart = response?.data?.products;

          setMessage("You have successfully added to cart");
          setIsSuccessful(true);
          navigate("/cart");
        })
        .catch((e) => {
          setIsSuccessful(false);
          setLoading(false);

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

          const updatedProducts = reservedItems.products.filter(
            (product) => product.productId !== productId
          );

          const updatedReservedItems = {
            ...reservedItems,
            products: updatedProducts,
          };

          setReservedItems(updatedReservedItems);
          setMessage("Product removed from the cart");
          setIsSuccessful(true);
        })
        .catch((e) => {
          setLoading(false);
          setIsSuccessful(false);
          error(e, setMessage, setLoading, setIsSuccessful);
        });
    });
  };

  const checkout = (setMessage, setLoading, setIsSuccessful, setShowModal) => {
    setLoading(true);

    http().then((axios) => {
      axios
        .post("/api/checkout")
        .then(async (response) => {
          setLoading(false);

          setMessage("Checkout successful!");
          setIsSuccessful(true);
          setShowModal(true);
          setTimeout(() => {
            setIsSuccessful(false);
            setShowModal(false);
            navigate("/products");
          }, 2000);
        })
        .catch((e) => {
          setLoading(false);
          setIsSuccessful(false);
          error(e, setMessage, setLoading, setIsSuccessful);
        });
    });
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

          setMessage("Cart cleared successfully");
          setIsSuccessful(true);
          setReservedItems({ products: [] });
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

          const job = response.data;

          setIsSuccessful(true);

          setJobs(job);
        })
        .catch((e) => {
          setIsSuccessful(false);
          setLoading(false);

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

          const job = response.data;

          setIsSuccessful(true);

          setJobs(job);
        })
        .catch((e) => {
          setIsSuccessful(false);
          setLoading(false);

          error(e, setMessage, setLoading, setIsSuccessful);
        });
    });
  };

  const editJobDetail = (
    body,
    setMessage,
    setLoading,
    setIsSuccessful,
    jobId,
    setJobs
  ) => {
    setLoading(true);

    http().then((axios) => {
      axios
        .put(`/job-api/company/editjobdetails/${jobId}`, body)
        .then(async (response) => {
          setLoading(false);

          setMessage("Edited successfully");

          setIsSuccessful(true);

          setJobs((prevJobs) =>
            prevJobs.map((job) =>
              job._id === jobId
                ? {
                    ...job,
                    companyDetail: body.detail,
                    companyFile: body.file,
                    companyFileName: body.fileName,
                  }
                : job
            )
          );
        })
        .catch((e) => {
          setIsSuccessful(false);
          setLoading(false);

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
    editJobDetail,
  };
};
