import React from 'react'
import { Link } from 'react-router-dom';

const PackageItems= [
    {
        id:1,
        packageAmount:50000,
        packageType: 'Bronze',
        month:'1',
        review:'Review of 1 (one) non financial agreement',
        draftNo:'Draft of 2 (two) non financial agreements',
        legalOpinionNo:'1 (One) legal opinion specific to your industry',
        policyNo:'',
        percentOff:'',

    },
    {
        id:2,
        packageAmount:80000,
        packageType: 'Silver',
        month:'1',
        review:'Review of 2 (two) non financial agreement',
        draftNo:'Draft of 3 (three) non financial agreements',
        legalOpinionNo:'1 (One) legal opinion specific to your industry',
        policyNo:'Creation of 1 (one) policy document',
        percentOff:'10% off all single products',
    },
    {
        id:3,
        packageAmount:120000,
        packageType: 'Gold',
        month:'1',
        review:'Review of 3 (three) non financial agreement',
        draftNo:'Draft of r (four) non financial agreements',
        legalOpinionNo:'2 (two) legal opinion specific to your industry',
        policyNo:'Creation of 1 (one) policy document',
        percentOff:'20% off all single products',
    }
]

const Packages = () => {
    const idToBackgroundColorMap = {
        1: '#878787', 
        2: '#AFAFAF', 
        3: '#CFCFCF', 
        
      };


  return (
      <div className='py-5'>
        <div className='row pt-3 justify-content-center'>
          {PackageItems.map((packageItem) => {
            const {
              id,
              packageAmount,
              percentOff,
              month,
              packageType,
              review,
              draftNo,
              legalOpinionNo,
              policyNo,
            } = packageItem;
  
           
            const showIcon = policyNo !== '';
            const showPercentOff = percentOff !== '';
            const backgroundColor = idToBackgroundColorMap[id] || '#878787'; 
  
            return (
              <div className='col-12 col-md-6 col-lg-4 d-flex flex-column text-align-center px-4 mb-5' key={id}>
                <div className='justify-content-center text-center text-align-center'>
                  <button style={{ backgroundColor: backgroundColor, borderRadius: '50%', width: 'auto', border: 'none', fontWeight: '700', fontSize: '24px' }} className='py-3 px-2 mb-4'> ₦{packageAmount.toLocaleString()}</button>
                  <div className=''> <h3 style={{ color: "#032773" }}>{packageType}</h3>
                    <div className='line mx-5' style={{ color: "#032773", border: '1.3px solid #032773' }}></div></div>
                </div>
                <div className='d-flex flex-column mt-4' style={{ color: '#323233', flex: '1', height: '100%' }}>
                  <div className='d-flex gap-3'>
                    <i className="bi bi-check-circle"></i>
                    <p>{month} month</p>
                  </div>
                  <div className='d-flex gap-3'>
                    <i className="bi bi-check-circle"></i>
                    <p>{review}</p>
                  </div>
                  <div className='d-flex gap-3'>
                    <i className="bi bi-check-circle"></i>
                    <p>{draftNo}</p>
                  </div>
                  <div className='d-flex gap-3'>
                    <i className="bi bi-check-circle"></i>
                    <p>{legalOpinionNo}</p>
                  </div>
                  {showIcon && (
                    <div className='d-flex gap-3'>
                      <i className="bi bi-check-circle"></i>
                      <p>{policyNo}</p>
                    </div>
                  )}
                  {showPercentOff && (
                    <div className='d-flex gap-3'>
                      <i className="bi bi-check-circle"></i>
                      <p>{percentOff}</p>
                    </div>
                  )}
                </div>
                <div className='text-center mt-4 buy-btn'>
                  <Link to='/company-signup' className='btn btn-secondary' style={{width:'200px'}}>Buy</Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
  

export default Packages
