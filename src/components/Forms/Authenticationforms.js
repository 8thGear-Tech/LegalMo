
import React from 'react'
import { Link , useNavigate} from 'react-router-dom';

import { Loginbtn, Nextbtn, ResetPasswordbtn } from '../Buttons/Authenticationbtns';
import { useState } from 'react';
import { useEffect } from 'react';



export function SignUpForm({ formTitle, fields, onSubmit, submitButtonLabel }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const hasPasswordFields = fields.some((field) => field.type === 'password'); 
  const hasPhoneNumberField = fields.some((field) => field.type === 'number');

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
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;
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

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    onSubmit(formData);
  };
  

  return (
    <div className='login-card mt-lg-3'>
      <div className='card p-5  m-auto'>
        <div className='text-center mb-5'>
          <h2 className='mb-2'>{formTitle}</h2>
          <p className='text-center mt-4'>
            Already have an account?{' '}
            <span>
              <Link to='/login' className='text-decoration-none' style={{ color: '#032773' }}>
                Log in
              </Link>
            </span>
          </p>
        </div>

        <form onSubmit={handleNext}>
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
      <h2 className='mb-2'>Log in</h2>
      
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



export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
   
    if (email.trim() !== '' && password.trim() !== '') {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [email, password]);

  const navigate = useNavigate();
  const [showSignUpButtons, setShowSignUpButtons] = useState(false);

  const toggleSignUpButtons = () => {
    setShowSignUpButtons(!showSignUpButtons);
  };

  const handleLogIn = (e) => {
    e.preventDefault();

    setEmailError('');
    setPasswordError('');

    let hasError = false;

    if (!email) {
      setEmailError('Please enter your email address');
      hasError = true;
    }

    if (!password) {
      setPasswordError('Please enter your password');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    navigate('/dashboard');
  };

  return (
    <div className='login-card mt-lg-5'>
      <div className='card p-5 m-auto'>
        <div className='text-center mb-5'>
          <h2 className='mb-2'>Log in</h2>
          <p>Welcome back!</p>
        </div>

        <form onSubmit={handleLogIn}>
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
            <input
              type='password'
              className='form-control py-2'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {passwordError && <div className='text-danger'>{passwordError}</div>}
          </div>

          <Link
            to='/password-reset'
            className='d-flex mb-4 justify-content-end text-decoration-none text-secondary'
          >
            <h6>Forgot password?</h6>
          </Link>

          <Loginbtn formValid={formValid} />
        </form>

        <p className='text-center mt-4'>
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
            <Link to='/company-signup' className='btn btn-primary'>
              As a Company
            </Link>
            <div className='my-2' style={{ borderLeft: '1px solid white' }}></div>
            <Link to='/lawyer-signup' type='button' className='btn btn-primary'>
              As a Lawyer
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};


