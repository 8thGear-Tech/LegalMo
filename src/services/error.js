import { useNavigate } from 'react-router-dom';

export default () => {
  const navigate = useNavigate();
  const error = (e, setMessage, setLoading, setIsSuccessful) => {
    console.log(e.response, "my error response")
    setLoading(false);
    if (e.toJSON().message === 'Network Error') {
      setMessage('Session timeout, please login again');
      setIsSuccessful(false);
      
    }
    const resMessage =
      (e.response &&
        e.response.data &&
        e.response.data.message) ||
      e.message ||
      e.toString();
    if (typeof resMessage == 'string') {
      setMessage(resMessage);

      setIsSuccessful(false);
      
    } else {
      Object?.values(resMessage)?.map((msg) => {
    
      });
    }
    if (e.response.status == 401 || e.response == 405) {
      setMessage(resMessage);
      setIsSuccessful(false);
      setTimeout(() => {
        setIsSuccessful(false);
        
       
      }, 2500);
    }
    if (e.response.status == 500) {
      setMessage(resMessage);
      setIsSuccessful(false);
      
    }if(e.response.status == 409) {
        setMessage(resMessage);
        setIsSuccessful(false);
        
    }
   setMessage(resMessage)
    setIsSuccessful(false);
    
  };

  return {
    error,
  };
};