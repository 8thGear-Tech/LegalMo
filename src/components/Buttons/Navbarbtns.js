// NavLoginbtn

import React from 'react'
import '../../sassfiles/components/Buttons/_authentication.scss'

export const NavLoginbtn = () => {
  return (
    <div className='navBtn'>
    <button type="button" className="btn btn-outline-primary btnNewText">Log In</button>
    </div>
  )
}


// NavSignUpbtn
export const NavSignUpbtn = () => {
    return (
      <div className='navBtn'>
        <button type="button" className="btn btn-primary btnNewText">Sign Up</button>
        </div>
    )
  }

