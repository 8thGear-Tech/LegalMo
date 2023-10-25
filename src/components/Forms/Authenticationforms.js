
import React from 'react'
import { Link , useNavigate} from 'react-router-dom';

import { Loginbtn, Nextbtn, ResetPasswordbtn } from '../Buttons/Authenticationbtns';
import { useState } from 'react';
import { useEffect } from 'react';
import check from '../../assets/images/check.svg'
import error from '../../assets/images/icon-error.png'



export const LoginModal = ({ showModal, closeModal, modalText,subText, isSuccess }) => {


  return (
    <div>
    <div
      className={`modal fade px-3 ${showModal ? 'show' : ''}`}
      style={{ display: showModal ? 'block' : 'none'}}
      tabIndex='-1'
      role='dialog'
      onClick={closeModal}
    >
     
      <div className='modal-dialog modal-dialog-centered' role='document'>
        <div className='modal-content p-sm-5 p-3' style={{backgroundColor:'#D9DAF9'}}>
          <div className='d-flex justify-content-end'>
          <button type='button' className='btn-close' onClick={closeModal}></button>
          </div>
          <div className='modal-body text-center'>
           
              <div className='' role='alert'>
              <img src={isSuccess ? check : error} alt='check' style={{ width: '130px' }} />
                <h4 className='mt-5'style={{ fontWeight: '700' }}>{modalText}</h4>
                {isSuccess && <p>{subText}</p>}
                
              </div>
           
          </div>
        </div>
      </div>
    </div>
     <div
     className={`modal-backdrop fade ${showModal ? 'show' : ''}`}
     style={{ display: showModal ? 'block' : 'none' }}
   ></div>
   </div>
  );
};




export function SignUpForm({ formTitle, fields, onSubmit, submitButtonLabel, initialData }) {
  const [formData, setFormData] = useState(initialData || {});
  const [newFormData, setNewFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const hasPasswordFields = fields.some((field) => field.type === 'password'); 
  const hasPhoneNumberField = fields.some((field) => field.type === 'number');
  
  useEffect(() => {
    setFormData(initialData || {});
  }, [initialData]);

  useEffect(() => {
    const isComplete =
      fields.every((field) => !!formData[field.name]) &&
      (!hasPasswordFields ||
        (formData.password === formData.confirmPassword && checkPasswordStrength(formData.password))) &&
      (!hasPhoneNumberField || (!formData.phoneNumber || formData.phoneNumber.length === 11));

    setIsFormComplete(isComplete);
  }, [formData, fields, hasPasswordFields, hasPhoneNumberField]);

  
  const handleChange = (event) => {
    const { name, value } = event.target;

    
    if (name === 'phoneNumber') {
      if (!/^\d{0,11}$/.test(value)) {
        setErrors({
          ...errors,
          [name]: 'Please enter a valid 11-digit phone number',
        });
        return;
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
    
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const checkPasswordStrength = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
};

  
  const handleNext = (e) => {
    e.preventDefault();
    const validationErrors = {};

    fields.forEach((field) => {
      if (!formData[field.name]) {
        validationErrors[field.name] = `Please enter your ${field.label}`;
      }
    });

    if (hasPasswordFields) {
      if (!formData.confirmPassword) {
        validationErrors.confirmPassword = 'Please confirm password';
      } else if (formData.password !== formData.confirmPassword) {
        validationErrors.confirmPassword = 'Passwords do not match';
      }

      if (!checkPasswordStrength(formData.password)) {
        validationErrors.password = 'Password must have at least 8 characters with one uppercase, one lowercase, one number, and one special character';
      }
    }

    if (formData.phoneNumber && formData.phoneNumber.length !== 11) {
      validationErrors.phoneNumber = 'Please enter a valid 11-digit phone number';
    }

    setErrors(validationErrors);

    if (initialData) {
      // Merge new form data with existing form data
      const mergedFormData = { ...formData, ...newFormData };
      onSubmit(mergedFormData);
     
    } else {
      // If there are no steps, directly submit the form data
      onSubmit(formData);
    }
  };
  

  return (
    <div className='login-card mt-lg-3'>
      <div className='card p-5  m-auto'>
        <div className='text-center mb-5'>
          <h5 className='mb-2' style={{fontWeight:'700', color:'#323233'}}>{formTitle}</h5>
          <p className='text-center p-small mt-4' style={{color: ' #7E7E7F'}}>
            Already have an account?{' '}
            <span>
              <Link to='/login' className='text-decoration-none' style={{ color: '#032773' }}>
                Log in
              </Link>
            </span>
          </p>
        </div>

        <form onSubmit={(e)=> handleNext(e)}>
          {fields.map((field) => (
            <div className="mb-5" style={{ position: 'relative' }} key={field.name}>
              <label htmlFor={field.name} className="form-label">
                {field.label} {field.required && <sup className='' style={{ color: 'red' }}>*</sup>}
              </label>
              <div className="input-group">
                <input
                  type={field.type === 'password' ? (showPassword ? 'text' : 'password') : field.type}
                  className="form-control py-2"
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                />
                {field.type === 'password' && (
                  <span
                    className="input-group-text"
                    onClick={handleTogglePassword}
                    style={{ cursor: 'pointer', background: 'white' }}
                  >
                    {showPassword ? (
                      <i className="bi bi-eye-slash"></i> 
                    ) : (
                      <i className="bi bi-eye"></i>
                    )}
                  </span>
                )}
              </div>
              {errors[field.name] && <div className="text-danger">{errors[field.name]}</div>}
            </div>
          ))}

          <button
            type="submit"
            className={`btn ${isFormComplete ? 'btn-primary btn-newPrimary' : 'btn-secondary'}`}
            style={{ fontSize: '20px', width: '100%' }}
          >
            {submitButtonLabel}
          </button>
        </form>
      </div>
    </div>
  );
}




export const ResetPasswordForm=()=> {
  const [email, setEmail] = useState('');

  const [emailError, setEmailError] = useState('');
 
const navigate = useNavigate();
const [formValid, setFormValid] = useState(false); 

useEffect(() => {
  
  if (email.trim() !== '' ) {
    setFormValid(true);
  } else {
    setFormValid(false);
  }
}, [email]);


const handlePasswordReset = (e) => {
  e.preventDefault();

  setEmailError('');
  

  let hasError = false;

  
  if (!email) {
    setEmailError('Please enter your email address');
    hasError = true;
  }

  if (hasError) {
   
    return;
  }

  
  navigate('/otp');
};



  return (
    <div className='login-card '>
    <div className='card p-5  m-auto'>
      <div className='text-center mb-5'>
      <h5 className='mb-2' style={{fontWeight:'600'}}>Reset Password</h5>
      
      </div>
        
        <form onSubmit={handlePasswordReset}>
          
            <div className="mb-4" style={{position:'relative'}}>
  <label htmlFor="email" className="form-label" >Email</label>
  <input
type="email"
className="form-control py-2"
value={email}
onChange={(event) => setEmail(event.target.value)}
/>
{emailError && <div className="text-danger">{emailError}</div>}
 
</div>
       <div className='text-center mt-5'>
        <ResetPasswordbtn text='Send OTP' formValid={formValid}/>
        </div>
        </form>
       
    </div>
    </div>
  );
}



export const LoginForm = ({ setShowModal, setSuccessMessage, handleLogIn,
  formValid,
  password,
  email,
  setEmail,
  setPassword,
  passwordError,
  setPasswordError,
  emailError,
  setEmailError,
  showSignUpButtons,
  setShowSignUpButtons,
  toggleSignUpButtons}) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };
  return (
   
    <div className="login-card mt-lg-5" style={{backgroundColor: '#FEFEFF'}}>
      <div className='card p-5 m-auto'>
        <div className='text-center mb-5'>
        <h5 className='mb-2' style={{fontWeight:'600'}}>Log In</h5>
          <p className='p-small' style={{color:'#7E7E7F'}}>Welcome back!</p>
        </div>

        <form onSubmit={(e)=> handleLogIn(e)}>
          <div className='mb-5' style={{ position: 'relative' }}>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              className='form-control py-2'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {emailError && <div className='text-danger'>{emailError}</div>}
          </div>
          <div className='mb-2' style={{ position: 'relative' }}>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <div className="input-group">
            <input
             type={showPassword ? 'text' : 'password'}
              className='form-control py-2'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <span
                    className="input-group-text"
                    onClick={handleTogglePassword}
                    style={{ cursor: 'pointer', background: 'white' }}
                  >
                    {showPassword ? (
                      <i className="bi bi-eye-slash"></i> 
                    ) : (
                      <i className="bi bi-eye"></i>
                    )}
                  </span>
              </div>
            {passwordError && <div className='text-danger'>{passwordError}</div>}
          </div>

          <Link
            to='/password-reset'
            className='d-flex mb-4 justify-content-end text-decoration-none text-secondary'
          >
            Forgot password?
          </Link>

          <Loginbtn formValid={formValid} />
        </form>

        <p className='text-center mt-4 p-small' style={{color:'#7E7E7F'}}>
          Don't have an account?{' '}
          <span>
            <Link
              onClick={toggleSignUpButtons}
              className='text-decoration-none'
              style={{ color: '#032773' }}
            >
              Sign up
            </Link>
          </span>
        </p>
        {showSignUpButtons && (
          <div
            role='group'
            aria-label='Basic example'
            className='btn-group form-sign-btn position-absolute gap-1'
          >
            <Link to='/signup/asacompany' className='btn btn-primary'>
              As a Company
            </Link>
            <div className='my-2' style={{ borderLeft: '1px solid white' }}></div>
            <Link to='/signup/asalawyer' type='button' className='btn btn-primary'>
              As a Lawyer
            </Link>
          </div>
        )}
      </div>
    </div>
    
   
   
  );
};


