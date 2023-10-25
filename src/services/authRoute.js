import React, { useState } from 'react';
import http from './httpCommon';
import Error from './error';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
 



export default () => {
  const { error } = Error();
  const navigate = useNavigate();
 
const login = (
  body,
  setMessage,
  setLoading,
  setIsSuccessful,
  setUserData,
  setShowModal,
  
) => {
  setLoading(true);
  http()
    .then((axios) => {
      axios
      .post(`/api/login/${body.userType}`, body)
        .then(async (response) => {
          setLoading(false);
          setIsSuccessful(true);

          const gotResponse = response?.data;
          if (gotResponse?.status === 'success') {
            setUserData(gotResponse?.data);
            localStorage.setItem('userToken', gotResponse?.data?.token);
            console.log('userToken', gotResponse?.data?.token);
            setMessage('Welcome back');
            setIsSuccessful(true);
            setShowModal(true);
            
            const storedToken = localStorage.getItem('userToken')
            const decodedToken = jwt_decode(storedToken);
            console.log('Decoded Token:', decodedToken);
            const userType = decodedToken.userType;
            console.log('Decoded usertype:', userType);

            if (userType === 'company') {
              navigate('/company/dashboard');
            } else if (userType === 'lawyer') {
              navigate('/lawyer/dashboard');
            } else if (userType === 'admin') {
              navigate('/admin/dashboard');
            } else {
              // Handle unknown userType, maybe show an error message
              setMessage('Unknown user type');
            }
          } else {
            setIsSuccessful(false);
            setMessage('There was a problem logging in');
          }
        })
       
        .catch((e) => {
          setIsSuccessful(false);
          setLoading(false);
          setShowModal(true);
          error(e, setMessage, setLoading, setIsSuccessful, setShowModal);
        });
    });
};

  
  // const login = (
  //   body, setMessage, setLoading, setIsSuccessful, setUserData, setShowModal
   
  // ) => {
 
  
  //   setLoading(true);
  //   http().then((axios) => {
  //     axios
  //       .post('/api/login/admin', body)
  //       .then(async (response) => {
  //           setLoading(false);
  //           setIsSuccessful(true);
        
  //           const gotResponse =  response?.data;
  //           if (gotResponse?.status === 'success'){
  //               setUserData(gotResponse?.data);
  //               localStorage.setItem("userToken", gotResponse?.data?.token)
  //              console.log("userToken", gotResponse?.data?.token)
  //               setMessage("Welcome back");
  //               setIsSuccessful(true);
  //            setShowModal(true);
  //               setTimeout(() => {
  //                   setIsSuccessful(false);
  //                   setShowModal(false);
                    
  //                   navigate('/admin/dashboard');
                    
  //               }, 2500);

                
  //           } else{
  //               setIsSuccessful(false);
                
  //               setMessage('There was a problem logging in')
  //           }
  //       })
  //       .catch((e) => {
        
  //         setIsSuccessful(false);
  //         setLoading(false);
  //         setShowModal(true);
  //         error(e, setMessage, setLoading, setIsSuccessful, setShowModal);
  //       });
  //   });
  // };

  const signupAsAdmin = (
    body, setMessage, setLoading, setIsSuccessful, setUserData, setShowModal
   
  ) => {
 
   
    setLoading(true);
    http().then((axios) => {
      axios
        .post('/api/admin/signup', body)
        .then(async (response) => {
            setLoading(false);
            setIsSuccessful(true);
            
            const gotResponse =  response?.data;
            if (gotResponse?.status === 'success'){
                setUserData(gotResponse?.data);
                setMessage("You have successfully created an account");
                setIsSuccessful(true);
                setShowModal(true);
               
                setTimeout(() => {
                    setIsSuccessful(false);
                    setShowModal(false);
                    navigate('/login');
                    
                }, 3000);

                
            } else{
                setIsSuccessful(false);
                setMessage('There was a problem signing up')
                setShowModal(true);
            }

        //   localStorage.setItem(
        //     'userData',
        //     JSON.stringify(userData),
        //   );
         

         

            // 
        })
        .catch((e) => {
       
        setIsSuccessful(false);
        setLoading(false);
        setShowModal(true);
        error(e, setMessage, setLoading, setIsSuccessful, setShowModal);
        });
        
    });
  };

  const signupAsCompany = (
    body, setMessage, setLoading, setIsSuccessful, setUserData, setShowModal
   
  ) => {
 
   
    setLoading(true);
    http().then((axios) => {
      axios
        .post('/api/company/signup', body)
        .then(async (response) => {
            setLoading(false);
            setIsSuccessful(true);
            
            const gotResponse =  response?.data;
            if (gotResponse?.status === 'success'){
                setUserData(gotResponse?.data);
                setMessage("You have successfully created an account");
                setIsSuccessful(true);
                setShowModal(true);
               
                setTimeout(() => {
                    setIsSuccessful(false);
                    setShowModal(false);
                    navigate('/login');
                    
                }, 3000);

                
            } else{
                setIsSuccessful(false);
                setMessage('There was a problem signing up')
                setShowModal(true);
            }

  
        })
        .catch((e) => {
       
        setIsSuccessful(false);
        setLoading(false);
        setShowModal(true);
        error(e, setMessage, setLoading, setIsSuccessful, setShowModal);
        });
        
    });
  };

  const signupAsLawyer = (
    body, setMessage, setLoading, setIsSuccessful, setUserData, setShowModal
   
  ) => {
 
   
    setLoading(true);
    http().then((axios) => {
      axios
        .post('/api/lawyer/signup', body)
        .then(async (response) => {
            setLoading(false);
            setIsSuccessful(true);
            
            const gotResponse =  response?.data;
            if (gotResponse?.status === 'success'){
                setUserData(gotResponse?.data);
                setMessage("You have successfully created an account");
                setIsSuccessful(true);
                setShowModal(true);
               
                setTimeout(() => {
                    setIsSuccessful(false);
                    setShowModal(false);
                    navigate('/login');
                    
                }, 3000);

                
            } else{
                setIsSuccessful(false);
                setMessage('There was a problem signing up')
                setShowModal(true);
            }

  
        })
        .catch((e) => {
       
        setIsSuccessful(false);
        setLoading(false);
        setShowModal(true);
        error(e, setMessage, setLoading, setIsSuccessful, setShowModal);
        });
        
    });
  };

  const logout = () => {
 
     localStorage.removeItem('userToken');
    //  localStorage.clear();

     navigate('/login');
     
  
  };
 
  return {
   
    login, 
    signupAsAdmin,
    signupAsCompany,
    signupAsLawyer,
    logout

    };
};