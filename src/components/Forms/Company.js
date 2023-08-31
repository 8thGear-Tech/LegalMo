//productdetails
import React from "react";

export const CompanyDetailsForm=()=> {
    return (
      <div>
        <form>
        <label htmlFor="details">Give details </label>
        <input name='details' placeholder='Type more details about your purchase' type='text'/>
        </form>
      </div>
    );
  }

export const CompanyProfileForm=()=> {
    return (
      <div>
        <h1>Profile</h1>
        <h4>Update your details</h4>
        <button>Cancel</button>
        <button>Save</button>
        <form className='profile-form'>
            <label htmlFor='email'>Email Adress </label>
            <input name='email' placeholder='Enter your email address' type='text'/>

            <label htmlFor='website'>Website</label>
            <input name='website' placeholder='Enter the link to your website' type='text'/>

            <label htmlFor='bio'>Your Bio </label>
            <input name='bio' placeholder='Write a short introduction ' type='text'/>

            <label htmlFor='phone-no'>Phone Number </label>
            <input name='phone-no' placeholder='Enter your phone number' type='text'/>

            <label htmlFor='address'>Physical Address</label>
            <input name='address' placeholder='Enter your physical address' type='text'/>

            <label htmlFor='alte-email'>Alternate Email </label>
            <input name='alte-email' placeholder='Enter an alternate email if you would like to be contacted via a different email' type='text'/>
        </form>
      </div>
    );
}