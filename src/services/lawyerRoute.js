import React, { useState } from 'react';
import http from './httpCommon';
import Error from './error';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
 



export default () => {
  const { error } = Error();
  const navigate = useNavigate();
 
  const getPaymentDetails = (
    setMessage,
    setLoading,
    setIsSuccessful,
    setAccountNumber,
    setAccountName,
    setBank,
    setNoPaymentDetails
  ) => {
    const userId = localStorage.getItem("userId");
  
    setLoading(true);
  
    http().then((axios) => {
      axios
        .get('/api/get-payment-details')
        .then(async (response) => {
          setLoading(false);
  
          console.log(response);
          const lawyer = response?.data?.lawyer;
          const accountDetails = lawyer?.accountDetails;
  
          if (accountDetails && accountDetails.length > 0) {
          
            if (lawyer?._id === userId) {
              setMessage("You have successfully gotten  payment details");
              const firstAccount = accountDetails[0]; 
              setAccountNumber(firstAccount?.accountNumber);
              setAccountName(firstAccount?.accountName);
              setBank(firstAccount?.bank);
              setIsSuccessful(true);
            } else {
              setMessage("You do not have permission to view these payment details.");
              setIsSuccessful(false);
            }
          } else {
            
            if (lawyer?._id === userId) {
              setNoPaymentDetails(true);
              setIsSuccessful(true);
            } else {
              setMessage("No payment details found for the user.");
              setIsSuccessful(false);
            }
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
  
  
 

  const addPaymentDetails = (
    body,
    setMessage,
    setLoading,
    setIsSuccessful,
    setAccountNumber,
    setAccountName,
    setBank
  ) => {
    const userId = localStorage.getItem("userId");
  
    setLoading(true);
  
    http().then((axios) => {
      axios
        .post('/api/add-payment-details', body)  // Use POST instead of GET for adding details
        .then(async (response) => {
          setLoading(false);
  
          console.log(response);
          const gotResponse = response?.data?.lawyer?.accountDetails;
          console.log(gotResponse);
  
          if (response) {
            if (response?.data?.lawyer?._id === userId) {
              setMessage("You have successfully added payment details");
              setAccountNumber(gotResponse?.accountNumber);
              setAccountName(gotResponse?.accountName);
              setBank(gotResponse?.bank);
  
              setIsSuccessful(true);
            } else {
              setMessage("Payment addition is unsuccessful.");
              setIsSuccessful(false);
            }
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
  
  
  return {
   
getPaymentDetails, addPaymentDetails
    };
};