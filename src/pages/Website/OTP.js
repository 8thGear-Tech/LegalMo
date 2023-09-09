import React from 'react'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import Footer from '../../components/Footer'
import { ResetPasswordbtn } from '../../components/Buttons/Authenticationbtns'
import { useNavigate , Link} from 'react-router-dom';
import { useState } from 'react';
import '../../sassfiles/pages/Website/_otp.scss'
import { useEffect } from 'react';




function OTP() {
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const navigate = useNavigate();
  const [formValid, setFormValid] = useState(false); 
 

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
    
    navigate('/new-password');
  };

  return (
    <div>
      <GuestNavbar />
      <div className='justify-content-center align-items-center text-align-center py-5 px-4 mb-5'>
        <div className='login-card mt-lg-5'>
          <div className='card py-5 px-3 px-sm-5  m-auto'>
            <div className='text-center mb-5'>
              <h2 className='mb-2'>Enter the OTP sent to your email address</h2>
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
                <h6>Resend OTP?</h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default OTP