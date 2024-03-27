import React from "react";
import UserNavbar from "../../components/Navbar/UserNavbar";
import Footer from "../../components/Footer";
import { ResetPasswordbtn } from "../../components/Buttons/Authenticationbtns";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { LoginModal } from "../../components/Forms/Authenticationforms";
import lawyerRoute from "../../services/lawyerRoute";

function LawyerOTP({ otp = [], setOTP, handleOTPChange, handleOTPSubmit }) {
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const isComplete = otp.every((digit) => digit !== '');
    setFormValid(isComplete);
  }, [otp]);

  useEffect(() => {

    setFormValid(false);
   
    setOTP(["", "", "", "", "", ""]);
  }, []);

  return (
    <div>
   
      <div className="justify-content-center align-items-center text-align-center py-5 px-4 mb-5">
        <div className="login-card mt-lg-5">
          <div className="card py-5 px-3 px-sm-5 m-auto">
            <div className="text-center mb-5">
              <h5 className="mb-2" style={{ fontWeight: '600' }}>
                Enter the OTP sent to your registered email address
              </h5>
            </div>

            <form onSubmit={handleOTPSubmit}>
              <div className="d-flex px-lg-3 mb-2">
                {otp &&
                  otp.map((digit, index) => (
                    <input
                      type="text"
                      className="form-control py-2 me-sm-3 me-2 otp-input"
                      value={digit}
                      onChange={(e) => handleOTPChange(e, index)}
                      maxLength="1"
                      key={index}
                      required
                    />
                  ))}
              </div>

              <div className="text-center mb-4 mt-5">
                {/* Your ResetPasswordbtn component */}
                {/* Assuming it handles form submission */}
                {/* Pass 'formValid' as a prop */}
                <ResetPasswordbtn text="Send" formValid={formValid} />
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Other components */}
    </div>
  );
}


export default LawyerOTP;
