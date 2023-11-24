import React, { useState } from 'react';
import http from './httpCommon';
import Error from './error';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
 



export default () => {
  const { error } = Error();
  const navigate = useNavigate();
 

 
  const getCompanies = (
    setMessage, setLoading, setIsSuccessful, setCompanies, setShowModal
   
  ) => {
   
    setLoading(true);
    http().then((axios) => {
      axios
        .get('/api/companys')
        .then(async (response) => {
      
            setLoading(false);
            const gotResponse = response?.data?.company;
           
            

 setMessage("You have successfully gotten all companies");

 setIsSuccessful(true);
 setCompanies(gotResponse);
    
        })
        .catch((e) => {
       
        setIsSuccessful(false);
        setLoading(false);
        setShowModal(true);
        error(e, setMessage, setLoading, setIsSuccessful, setShowModal);
        });
        
    });
  };
  
  const getVerifiedLawyers = (
    setMessage, setLoading, setIsSuccessful, setLawyers, setShowModal
   
  ) => {
   
   
    setLoading(true);
    http().then((axios) => {
      axios
        .get('/api/verifiedlawyers')
        .then(async (response) => {
      
            setLoading(false);
            const gotResponse = response?.data?.lawyers;
           
            

 setMessage("You have successfully gotten all verified lawyers");

 setIsSuccessful(true);
 setLawyers(gotResponse);
    
        })
        .catch((e) => {
       
        setIsSuccessful(false);
        setLoading(false);
        setShowModal(true);
        error(e, setMessage, setLoading, setIsSuccessful, setShowModal);
        });
        
    });
  };
  
  const getUnverifiedLawyers = (
    setMessage, setLoading, setIsSuccessful, setLawyers, setShowModal
   
  ) => {
   
   
    setLoading(true);
    http().then((axios) => {
      axios
        .get('/api/unverifiedlawyers')
        .then(async (response) => {
      
            setLoading(false);
            const gotResponse = response?.data?.lawyers;
           
            

 setMessage("You have successfully gotten all unverified lawyers");

 setIsSuccessful(true);
 setLawyers(gotResponse);
    
        })
        .catch((e) => {
       
        setIsSuccessful(false);
        setLoading(false);
        setShowModal(true);
        error(e, setMessage, setLoading, setIsSuccessful, setShowModal);
        });
        
    });
  };

  const verifyLawyer = (
    setMessage, setLoading, setIsSuccessful, lawyerId, setShowModal
   
  ) => {
   
   
    setLoading(true);
    http().then((axios) => {
      axios
        .patch(`/api/verifylawyer/${lawyerId}`, 
        {verified: true})
        .then(async (response) => {
      
            setLoading(false);
            console.log(response, 'verification response')
 setMessage("Verification Successful");

 setIsSuccessful(true);
 setShowModal(true);
 

        })
        .catch((e) => {
       
        setIsSuccessful(false);
        setLoading(false);
        setShowModal(true);
        error(e, setMessage, setLoading, setIsSuccessful, setShowModal);
        });
        
    });
  };
  
  const getPendingJobs = (
    setMessage, setLoading, setIsSuccessful, setJobs, setShowModal
   
  ) => {
   
   
    setLoading(true);
    http().then((axios) => {
      axios
        .get('api/pendingjobs')
        .then(async (response) => {
      
            setLoading(false);
            const gotResponse = response?.data;
           
            

 setMessage("You have successfully gotten all pending jobs ");

 setIsSuccessful(true);
 setJobs(gotResponse);
    
        })
        .catch((e) => {
       
        setIsSuccessful(false);
        setLoading(false);
        setShowModal(true);
        error(e, setMessage, setLoading, setIsSuccessful, setShowModal);
        });
        
    });
  };
  const getCompletedJobs = (
    setMessage, setLoading, setIsSuccessful, setJobs, setShowModal
   
  ) => {
   
   
    setLoading(true);
    http().then((axios) => {
      axios
        .get('api/completed')
        .then(async (response) => {
      
            setLoading(false);
            const gotResponse = response?.data;
           
            

 setMessage("You have successfully gotten all completed jobs ");

 setIsSuccessful(true);
 setJobs(gotResponse);
    
        })
        .catch((e) => {
       
        setIsSuccessful(false);
        setLoading(false);
        setShowModal(true);
        error(e, setMessage, setLoading, setIsSuccessful, setShowModal);
        });
        
    });
  };

  const getUnassignedJobs = (
    setMessage, setLoading, setIsSuccessful, setJobs, setShowModal
   
  ) => {
   
   
    setLoading(true);
    http().then((axios) => {
      axios
        .get('api/unassign')
        .then(async (response) => {
      
            setLoading(false);
            const gotResponse = response?.data;
           
            

 setMessage("You have successfully gotten all unassigned jobs ");

 setIsSuccessful(true);
 setJobs(gotResponse);
    
        })
        .catch((e) => {
       
        setIsSuccessful(false);
        setLoading(false);
        setShowModal(true);
        error(e, setMessage, setLoading, setIsSuccessful, setShowModal);
        });
        
    });
  };


  const getLawyer = (
    setMessage,
    setLoading,
    setIsSuccessful,
    lawyerId,
    setDetails
  ) => {
    // const userId = localStorage.getItem("userId");
  
    setLoading(true);
  
    http().then((axios) => {
      axios
        .get(`/api/lawyer/${lawyerId}`)
        .then(async (response) => {
          setLoading(false);
  
          console.log(response);
          const lawyer = response?.data?.lawyer;
         
          
            if (lawyer?._id === lawyerId) {
              setMessage("You have successfully gotten  profile details");
              setIsSuccessful(true);
              setDetails(lawyer);
              // setTimeout(() => {
              //   setIsSuccessful(false);
              
                
               
              //   navigate('/lawyer/profile')
              //   console.log('navigating....')
                
              // }, 2000);
             
            } else {
              setMessage("You do not have permission to view these profile details.");
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

 
  const getCompany = (
    setMessage,
    setLoading,
    setIsSuccessful,
    companyId,
    setDetails
  ) => {
    // const userId = localStorage.getItem("userId");
  
    setLoading(true);
  
    http().then((axios) => {
      axios
        .get(`/api/company/${companyId}`)
        .then(async (response) => {
          setLoading(false);
  
          console.log(response);
          const company = response?.data?.company;
         
          
            if (company?._id === companyId) {
              setMessage("You have successfully gotten  profile details");
              setIsSuccessful(true);
              setDetails(company);
              // setTimeout(() => {
              //   setIsSuccessful(false);
              
                
               
              //   navigate('/lawyer/profile')
              //   console.log('navigating....')
                
              // }, 2000);
             
            } else {
              setMessage("You do not have permission to view these profile details.");
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
  return {
   
getCompanies, getVerifiedLawyers, getUnverifiedLawyers, verifyLawyer, getPendingJobs, getUnassignedJobs, getCompletedJobs, getLawyer, getCompany
    };
};