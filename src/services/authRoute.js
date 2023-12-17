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
      .post('/api/login', body)
        .then(async (response) => {
          setLoading(false);
          setIsSuccessful(true);

          const gotResponse = response?.data;
          if (gotResponse?.status === 'success') {
            setUserData(gotResponse?.data?.user);
            localStorage.setItem('userToken', gotResponse?.token);
            localStorage.setItem('userType', gotResponse?.data?.user?.userType);
            localStorage.setItem('userId', gotResponse?.data?.user?._id);
          
            setMessage('Welcome back');
            setIsSuccessful(true);
            setShowModal(true);
            
            setTimeout(() => {
              const userType = gotResponse?.data?.user?.userType;
              const userId= gotResponse?.data?.user?._id;
              if (userType === 'admin') {
                navigate('/admin/dashboard');
              } else if (userType === 'company') {
                navigate('/products');
              } else if (userType === 'lawyer') {
                navigate(`/lawyer/available-jobs/${userId}`);
              } else {
               
                setMessage('Unknown user type');
              }
            }, 2500); 
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
                localStorage.setItem('userToken', gotResponse?.token);
                localStorage.setItem('userType', gotResponse?.data?.user?.userType);
                localStorage.setItem('userId', gotResponse?.data?.user?._id);
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
                localStorage.setItem('userToken', gotResponse?.token);
                localStorage.setItem('userType', gotResponse?.data?.user?.userType);
                localStorage.setItem('userId', gotResponse?.data?.user?._id);
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
                localStorage.setItem('userToken', gotResponse?.token);
                localStorage.setItem('userType', gotResponse?.data?.user?.userType);
                localStorage.setItem('userId', gotResponse?.data?.user?._id);
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
     
     localStorage.removeItem('userType');
     localStorage.removeItem('userId');

    http()
      .then((axios) => {
        axios
        .post('/api/logout')
          .then(async (response) => {  
                navigate('/home')
          })
         
          .catch((e) => {
           
            console.error('unable to log out')
          });
      });
  };

  const forgotPassword = (body, setLoading,setIsSuccessful, setMessage, setShowModal, setEmailSubmitted) => {
 
   
   setLoading(true);
    http().then((axios) => {
      axios
        .post('/api/forgot-password', body)
        .then(async (response) => {
          
          setLoading(false);
          
          localStorage.setItem('userType', response?.data?.userType);
          
         
        
          setIsSuccessful(true);
              setMessage('Password reset email sent');
              setShowModal(true);
              setTimeout(() => {
                setIsSuccessful(false);

                setShowModal(false);
                setEmailSubmitted(true);
               
                navigate(`/otp/${encodeURIComponent(body.officialEmail)}`)
                
            }, 2000);
                   
        
        })
        .catch((e) => {
          setIsSuccessful(false);
          setLoading(false);
          setShowModal(true);
      
          error(e, setMessage, setLoading, setIsSuccessful, setShowModal);
        })
        
    });
  };
 
  const confirmOTP = (body, setLoading,setIsSuccessful, setMessage, setShowModal, userEmail, setOtpVerified)=> {
 
    
    setLoading(true);
     http().then((axios) => {
       axios
         .post('/api/confirm-reset-token', body)
         .then(async (response) => {
          setLoading(false);
           setIsSuccessful(true);
               setMessage('OTP Confirmed!');

               setShowModal(true);
               
               setTimeout(() => {
                setIsSuccessful(false);
                 setShowModal(false);
                 setOtpVerified(true);
                 navigate(`/new-password/${encodeURIComponent(body.token)}/${encodeURIComponent(userEmail)}`);

;
                 
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
  


   const newPassword = (body, setLoading,setIsSuccessful, setMessage, setShowModal, token,userEmail)=> {
 
    
    setLoading(true);
    const userType =  localStorage.getItem('userType');
     http().then((axios) => {
      axios
      .patch(`/api/reset-password?userType=${userType}&userEmail=${encodeURIComponent(userEmail)}&token=${token}`, body)
         .then(async (response) => {
          setLoading(false);
           setIsSuccessful(true);
           setMessage('Password Reset Successfully');
               setShowModal(true);
               setTimeout(() => {
                 
                 setShowModal(false);
                 navigate('/login');

;
                 
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


   const resendConfirmationMail = (body, setLoading,setIsSuccessful, setMessage, setShowModal) => {
 
   
    setLoading(true);
     http().then((axios) => {
       axios
         .post('api/resendconfirmemail', body)
         .then(async (response) => {
           
           setLoading(false);
           
          
         
           setIsSuccessful(true);
               setMessage('Confirmation email sent successfully');
               setShowModal(true);
               setTimeout(() => {
                 setIsSuccessful(false);
 
                 setShowModal(false);
                
                
                 navigate('/login')
                 
             }, 2000);
                    
         
         })
         .catch((e) => {
           setIsSuccessful(false);
           setLoading(false);
           setShowModal(true);
       
           error(e, setMessage, setLoading, setIsSuccessful, setShowModal);
         })
         
     });
   };
  return {
   
    login, 
    signupAsAdmin,
    signupAsCompany,
    signupAsLawyer,
    logout, forgotPassword, 
    confirmOTP,newPassword, resendConfirmationMail
    };
};