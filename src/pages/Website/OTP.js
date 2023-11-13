import React from "react";
import GuestNavbar from "../../components/Navbar/GuestNavbar";
import Footer from "../../components/Footer";
import { ResetPasswordbtn } from "../../components/Buttons/Authenticationbtns";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import authRoute from "../../services/authRoute";
import { LoginModal } from "../../components/Forms/Authenticationforms";

function OTP({setOtpVerified}) {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const {userEmail} = useParams();
 
  const navigate = useNavigate();
  const {confirmOTP} = authRoute();
  const [formValid, setFormValid] = useState(false); 
  const [loading, setLoading] = useState(false);
const [message, setMessage] = useState('');
const [isSuccessful, setIsSuccessful] = useState(false);
const [showModal, setShowModal] = useState(false);
  
 

  const handleOTPChange = (e, index) => {
    
    const newDigit = e.target.value.replace(/[^0-9]/g, '');

    const newOTP = [...otp];
    newOTP[index] = newDigit;
    setOTP(newOTP);
  };

  useEffect(() => {
    
    const isComplete = otp.every((digit) => digit !== '');
    setFormValid(isComplete);
  }, [otp]);

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
  
    const body = {
      token: otp.join(''),
    };
    confirmOTP(body, setLoading,setIsSuccessful, setMessage, setShowModal, userEmail, setOtpVerified);
   
  };
  

  return (
    <div>
      <GuestNavbar />
      <div className="justify-content-center align-items-center text-align-center py-5 px-4 mb-5">
        <div className="login-card mt-lg-5">
          <div className="card py-5 px-3 px-sm-5  m-auto">
            <div className="text-center mb-5">
              <h5 className="mb-2" style={{fontWeight:'600'}}>Enter the OTP sent to your email address</h5>
            </div>

            <form onSubmit={handleOTPSubmit}>
              <div className="d-flex px-lg-3 mb-2">
                {otp.map((digit, index) => (
                  <input
                    type="text"
                    className="form-control  py-2 me-sm-3 me-2 otp-input"
                    value={digit}
                    onChange={(e) => handleOTPChange(e, index)}
                    maxLength="1"
                    key={index}
                    required
                  />
                ))}
              </div>

              <div className='text-center mb-4 mt-5'>
                <ResetPasswordbtn text='Enter' formValid={formValid} />
              </div>
            </form>

            <div className='d-flex justify-content-center text-center'>
              <Link to='/password-reset' className='d-flex mb-2  text-decoration-none text-secondary'>
               Resend OTP?
              </Link>
            </div>
          </div>
        </div>
      </div>
      <LoginModal 
        showModal={showModal}
        isSuccess={isSuccessful}
        closeModal={()=> setShowModal(false)}
        modalText={message}
      />
    </div>
  );
}

export default OTP;
