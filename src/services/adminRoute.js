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
    setMessage, setLoading, setIsSuccessful, setJobs, setFileName
   
  ) => {
   
   
    setLoading(true);
    http().then((axios) => {
      axios
        .get('job-api/pendingjobs')
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
      
        error(e, setMessage, setLoading, setIsSuccessful);
        });
        
    });
  };
  const getCompletedJobs = (
    setMessage, setLoading, setIsSuccessful, setJobs, setFileName
   
  ) => {
   
   
    setLoading(true);
    http().then((axios) => {
      axios
        .get('job-api/completedjobs')
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
        
        error(e, setMessage, setLoading, setIsSuccessful);
        });
        
    });
  };


  const getUnassignedJobs = (
    setMessage, setLoading, setIsSuccessful, setJobs
   
  ) => {
   
   
    setLoading(true);
    http().then((axios) => {
      axios
        .get('job-api/unassign')
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
     
        error(e, setMessage, setLoading, setIsSuccessful);
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
   
  
    setLoading(true);
  
    http().then((axios) => {
      axios
        .get(`/api/lawyer/${lawyerId}`)
        .then(async (response) => {
          setLoading(false);
  
          const lawyer = response?.data?.lawyer;
         
          
            if (lawyer?._id === lawyerId) {
              setMessage("You have successfully gotten  profile details");
              setIsSuccessful(true);
              setDetails(lawyer);
              
             
            } else {
              setMessage("You do not have permission to view these profile details.");
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

 
  const getCompany = (
    setMessage,
    setLoading,
    setIsSuccessful,
    companyId,
    setDetails
  ) => {
   
  
    setLoading(true);
  
    http().then((axios) => {
      axios
        .get(`/api/company/${companyId}`)
        .then(async (response) => {
          setLoading(false);
  
          const company = response?.data?.company;
         
          
            if (company?._id === companyId) {
              setMessage("You have successfully gotten  profile details");
              setIsSuccessful(true);
              setDetails(company);
              
             
            } else {
              setMessage("You do not have permission to view these profile details.");
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

  const editJobDetail = (
    body, setMessage, setLoading, setIsSuccessful, jobId, setJobs, setSelectedFile,job
   )=> {
    
   
     setLoading(true);
   
     http().then((axios) => {
       axios
         .put(`/job-api/editjobdetails/${jobId}`, body)
         .then(async (response) => {
           setLoading(false);
   
         
             setMessage("Edited successfully");
 
             setIsSuccessful(true);
           
             setJobs((prevJobs) =>
            prevJobs.map((job) =>
              job._id === jobId ? { ...job, detail: body.detail, uploadedFile: body.file } : job
            )
          );

          if(job._id == jobId){  setSelectedFile(body.file);
          }

         
         })
         .catch((e) => {
           setIsSuccessful(false);
           setLoading(false);
         
           error(e, setMessage, setLoading, setIsSuccessful);
         });
     });
   };


   const completeJob = (
     setMessage, setLoading, setIsSuccessful, jobId, setJobs,jobs
   )=> {
    
   
     setLoading(true);
   
     http().then((axios) => {
       axios
         .put(`/job-api/completejob/${jobId}`)
         .then(async (response) => {
           setLoading(false);
   
       
 
           
         
             setMessage("Job completed successfully");
 
             setIsSuccessful(true);
           
             const updatedJobs = jobs.filter(job => job._id !== jobId);
             setJobs(updatedJobs);

        
        
         })
         .catch((e) => {
           setIsSuccessful(false);
           setLoading(false);
         
           error(e, setMessage, setLoading, setIsSuccessful);
         });
     });
   };

   const getOneJob = (
    setMessage, setLoading, setIsSuccessful, jobId,setSelectedJob
  )=> {
   
  
    setLoading(true);
  
    http().then((axios) => {
      axios
        .get(`/job-api/job/${jobId}`)
        .then(async (response) => {
          setLoading(false);
  

          const job= response.data
      
        
          
            setIsSuccessful(true);
           
            setSelectedJob(job)
            
        })
        .catch((e) => {
          setIsSuccessful(false);
          setLoading(false);
      
          error(e, setMessage, setLoading, setIsSuccessful);
        });
    });
  };


  const assignJob = (
    body,setMessage, setLoading, setIsSuccessful
  )=> {
   
  
    setLoading(true);
  
    http().then((axios) => {
      axios
        .post('/job-api/assign', body)
        .then(async (response) => {
          setLoading(false);
         
  
            setMessage("Job assigned successfully");

            setIsSuccessful(true);
          
            navigate('/admin/jobs')
           
       
       
        })
        .catch((e) => {
          setIsSuccessful(false);
          setLoading(false);
        
          error(e, setMessage, setLoading, setIsSuccessful);
        });
    });
  };

  return {
   
getCompanies, getVerifiedLawyers, getUnverifiedLawyers, verifyLawyer, getPendingJobs, getUnassignedJobs, getCompletedJobs, getLawyer, getCompany,editJobDetail, completeJob, getOneJob, assignJob
    };
};