import React from "react";
import UserNavbar from "../../components/Navbar/UserNavbar";
import Footer from "../../components/Footer";
import { ResetPasswordbtn } from "../../components/Buttons/Authenticationbtns";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { LoginModal } from "../../components/Forms/Authenticationforms";

function LawyerOTP() {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
  const navigate = useNavigate();
  const [formValid, setFormValid] = useState(false); 
  const location = useLocation();
 

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

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setSuccessMessage(true);
    setTimeout(() => {
        navigate('/lawyer/get-paid', {
            state: {
              updatedDetails: location.state.updatedDetails,
            },
          });
    }, 3000);

   
    
  };

  return (
    <div>
      <UserNavbar />
      <div className="justify-content-center align-items-center text-align-center py-5 px-4 mb-5">
        <div className="login-card mt-lg-5">
          <div className="card py-5 px-3 px-sm-5  m-auto">
            <div className="text-center mb-5">
              <h5 className="mb-2" style={{fontWeight:'600'}}>Enter the OTP sent to your registered phone number</h5>
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
                <ResetPasswordbtn text='Send' formValid={formValid} />
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
        successMessage={successMessage}
        closeModal={closeModal}
        modalText='You have successfully updated your payment details'
      />
    </div>
  );
}

export default LawyerOTP;
