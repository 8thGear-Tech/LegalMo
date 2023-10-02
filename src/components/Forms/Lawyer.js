
import React from "react";

export const LawyerProfileForm=()=> {
    return (
      <div>
        <h1>Profile</h1>
        <h4>Update your details</h4>
        <button>Cancel</button>
        <button>Save</button>
        <form className='profile-form'>
            <label htmlFor='email'>Email Adress </label>
            <input name='email' placeholder='Enter your email address' type='text'/>

            <label htmlFor='scn'>SCN </label>
            <input name='scn' placeholder='Enter your Supreme Court Number' type='text'/>

            <label htmlFor='bio'>Your Bio </label>
            <input name='bio' placeholder='Write a short introduction ' type='text'/>

            <label htmlFor='call-year'>Year of Call </label>
            <input name='call-year' placeholder='Enter the year you were called to bar' type='text'/>

            <label htmlFor='phone-no'>Phone Number </label>
            <input name='phone-no' placeholder='Enter your phone number' type='text'/>

            <label htmlFor='alte-email'>Alternate Email </label>
            <input name='alte-email' placeholder='Enter an alternate email if you would like to be contacted via a different email' type='text'/>
        </form>
      </div>
    );
  }