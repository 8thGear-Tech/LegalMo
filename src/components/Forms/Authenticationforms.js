//restpassword
//login
//signup
import React from 'react'
import { Link } from 'react-router-dom';
import { Loginbtn, SignUpbtn, ResetPasswordbtn } from '../Buttons/Authenticationbtns';

export const SignUpForm=()=> {
  return (
    <div>
      <h1>Sign Up</h1>
      <h6>
        Already have an account?
        <span>
          <Link to='/login'>
            Log in
          </Link>
        </span>
      </h6>
      <form id='login-form' method='POST'>
        <label htmlFor='email'>Email</label>
        <input name='email' placeholder='Enter your email address' type='text' />
        <label htmlFor='password'>Password</label>
        <input name='password' placeholder='Enter your password' type='text' />
      </form><SignUpbtn />
    </div>
  );
}

  export const ResetPasswordForm=()=> {
    return (
      <div>
        <h1>Reset Password</h1>
        <form id='reset-password-form' method='POST'>
            <label htmlFor='email'>Email</label>
            <input name='email' placeholder='Enter your email address' type='text'/>
        </form>
        <Link to='/otp'>
          <ResetPasswordbtn/>
        </Link>
      </div>
    );
  }

  export const LoginForm=()=> {
    return (
      <div>
          <h1>Login</h1>
          <form id='login-form' method='POST'>
              <label htmlFor='email'>Email</label>
              <input name='email' placeholder='Enter your email address' type='text'/>
              <label htmlFor='password'>Password</label>
              <input name='password' placeholder='Enter your password' type='text'/>
          </form>
          <Link to='/password-reset'>
            <h6>Forgot password?</h6>
          </Link>
          <Loginbtn/>
          <p>
            Don't have an account? 
          <span>
            <Link to='/admin-sign-up'>Sign up</Link>
          </span>
          </p>
      </div>
    );
  }

