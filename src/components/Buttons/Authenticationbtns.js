import React from 'react'
import { Link } from 'react-router-dom'

export const Loginbtn=()=> {
  return (
    <>
        <Link to='/home'>
            <button>Login</button>
        </Link>
    </>
  )
}

export const SignUpbtn=()=> {
    return (
      <>
          <Link to='/login'>
              <button>Sign Up</button>
          </Link>
      </>
    )
}

export const ResetPasswordbtn=()=> {
    return (
      <>
        <button>Reset password</button>
      </>
    )
  }

export const Nextbtn=()=> {
    return (
      <button>Next</button> 
    )
}

export const AsACompanybtn=()=> {
  return (
    <button>as company</button> 
  )
}

export const AsALawyerbtn=()=> {
  return (
    <button>as lawyer</button> 
  )
}

export const AsAnAdminbtn=()=> {
  return (
    <button>as admin</button> 
  )
}