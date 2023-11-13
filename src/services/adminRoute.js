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
        .get('api/verifiedlawyers')
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
        .get('api/unverifiedlawyers')
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
  return {
   
getCompanies, getVerifiedLawyers, getUnverifiedLawyers, getPendingJobs, getUnassignedJobs, getCompletedJobs
    };
};