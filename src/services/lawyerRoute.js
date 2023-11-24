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
              
              const firstAccount = accountDetails[0]; 
              setAccountNumber(firstAccount?.accountNumber);
              setAccountName(firstAccount?.accountName);
              setBank(firstAccount?.bank);
              setIsSuccessful(true);
            } else {
             
              setIsSuccessful(false);
            }
          } else {
            
            if (lawyer?._id === userId) {
              setNoPaymentDetails(true);
              setIsSuccessful(true);
            } else {
             
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

  const updatePaymentDetails = (
    body,
    setMessage,
    setLoading,
    setIsSuccessful,
    setAccountNumber,
    setAccountName,
    setBank,setStep, setShowModal
  ) => {
   
  
    setLoading(true);
  
    http().then((axios) => {
      axios
        .patch('/api/edit-payment-details', body)  
        .then(async (response) => {
          setLoading(false);
  
          console.log(response, 'update response');
         
const accountDetails = response?.data?.lawyerUpdate?.accountDetails;

if (accountDetails && accountDetails.length > 0) {
  const firstAccount = accountDetails[0];
  const accountNumber = firstAccount.accountNumber;
  const accountName = firstAccount.accountName;
  const bank = firstAccount.bank;

  
  setAccountNumber(accountNumber);
  setAccountName(accountName);
  setBank(bank);

  setIsSuccessful(true)
  setMessage('You have successfully updated your payment details')
  setShowModal(true)
  setTimeout(() => {
    setIsSuccessful(false)
    setShowModal(false)
    setStep(1)
  }, 2000);
  
} else {
  setIsSuccessful(false)
}

        })
        .catch((e) => {
          setIsSuccessful(false);
          setLoading(false);
        
          error(e, setMessage, setLoading, setIsSuccessful);
        });
    });
  };

  const getOTP = (
    
    setMessage,
    setLoading,
    setIsSuccessful, setStep,
    setShowModal
   
  ) => {
   
  
    setLoading(true);
  
  http().then((axios) => {
      axios
        .post('/api/send-otp')
        .then(async (response) => {
          setLoading(false);
          setIsSuccessful(true)
          setMessage('OTP sent successfully')
          setShowModal(true);
          setTimeout(() => {
            setShowModal(false)
            setStep(2)
          
          }, 2000);
        
        })
        .catch((e) => {
          setIsSuccessful(false);
          setLoading(false);
          // Handle API request error
          error(e, setMessage, setLoading, setIsSuccessful);
        });
    });
  };
  
  const confirmOTP = (
    body,
    setMessage,
    setLoading,
    setIsSuccessful, setStep,
    setShowModal
   
  ) => {
   
  
    setLoading(true);
  
  http().then((axios) => {
      axios
        .post('/api/confirm-otp', body)
        .then(async (response) => {
          setLoading(false);
          setIsSuccessful(true)
          setMessage('OTP confirmed')
          setShowModal(true);
          setTimeout(() => {
            setShowModal(false)
            setStep(3)
          }, 2000);
         
        })
        .catch((e) => {
          setIsSuccessful(false);
          setLoading(false);
          // Handle API request error
          error(e, setMessage, setLoading, setIsSuccessful);
        });
    });
  };


  const getLawyerProfile = (
    setMessage,
    setLoading,
    setIsSuccessful,
    setDetails, lawyerId
  ) => {
 
    setLoading(true);
  
    http().then((axios) => {
      axios
        .get(`/api/userprofile?_id=${lawyerId}`)
        .then(async (response) => {
          setLoading(false);
  
          console.log(response);
          const lawyer = response?.data;
         
          
            if (lawyer?._id === lawyerId) {
            
              setIsSuccessful(true);
              setDetails(lawyer);
            } else {
             
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
    body, setMessage, setLoading, setIsSuccessful, setDetails, lawyerId, setShowModal
   
  ) => {
    
   console.log(body, 'my product body')
    setLoading(true);
    const form = new FormData();

    form.append('officialEmail', body.officialEmail)
    form.append('scn', body.scn)
    form.append('yourBio', body.yourBio)
    form.append('yearOfCall', body.yearOfCall)
    form.append('phoneNumber', body.phoneNumber)
    form.append('alternativeEmailAddress', body.alternativeEmailAddress)
    body.areasOfPractise.forEach((area) => {
     
      form.append('areasOfPractise[]', area);
    });
    // form.append('areasOfPractise', JSON.stringify(body.areasOfPractise));

    // form.append('areasOfPractise', body.areasOfPractise)
    form.append('profileImage', body.profileImage)
  const token= localStorage.getItem('userToken')
console.log(token)
    console.log(form, 'my form');
    http().then((axios) => {
      axios
        .patch(`/api/updateprofile?_id=${lawyerId}`, form,{
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
            const gotResponse =  response?.data?.lawyer;
 console.log(response,"my product response");

 setMessage("Profile Updated Successfully");

 setIsSuccessful(true);
 setShowModal(true);
 setDetails(gotResponse);
 setTimeout(() => {
  setIsSuccessful(false);

  setShowModal(false);
 
  navigate(`/lawyer/profile/${lawyerId} `)
  
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
  

  const getJobs = (
    setJobs,
    statusFilter,
    setMessage,
    setLoading,
    setIsSuccessful,
   
  ) => {
   
  
    setLoading(true);
  
    http().then((axios) => {
      axios
        .get('/job-api/jobs')
        .then(async (response) => {
          setLoading(false);
  
          console.log(response);
          const jobsData= response?.data
          const availableJobs = jobsData.filter(job => job.assignedTo.length === 0);

      if (statusFilter === 'Best fit') {
        setJobs(availableJobs);
      } else if (statusFilter === 'Recent jobs') {
        
        const sortedByRecent = availableJobs.sort((a, b) => {
          return new Date(b.createdAt) - new Date(a.createdAt);
        });
        setJobs(sortedByRecent); 
      }
      else{
        setJobs(availableJobs)
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

  const getOneJob = (
    setMessage, setLoading, setIsSuccessful, jobId, setSelectedJob
  )=> {
   
  
    setLoading(true);
  
    http().then((axios) => {
      axios
        .get(`/job-api/jobs/${jobId}`)
        .then(async (response) => {
          setLoading(false);
  
          console.log(response);

          const product= response.data
            console.log(product)
        
            setMessage("Job gotten successfully");

            setIsSuccessful(true);
           
            setSelectedJob(product)
             navigate(`/lawyer/available-job-item/${jobId}`)
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
   
getPaymentDetails, addPaymentDetails, getOTP, confirmOTP, getLawyerProfile, updateProfile,updatePaymentDetails, getJobs, getOneJob
    };
};