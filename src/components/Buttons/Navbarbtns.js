import React from 'react'
import { Link } from 'react-router-dom'

export const NavLoginbtn=()=> {
    return (
      <>
          <Link to='/login'>
              <button>Login</button>
          </Link>
      </>
    )
  }
  
  export const NavSignUpbtn=()=> {
      return (
        <>
            <Link to='/admin-sign-up'>
                <button>Sign Up</button>
            </Link>
        </>
      )
  }