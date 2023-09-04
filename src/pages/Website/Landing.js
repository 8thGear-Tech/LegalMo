import React, { useState } from 'react'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import HeroImage from '../../assets/images/landingheroimage.png'
import Footer from '../../components/Footer';
import '../../sassfiles/pages/Website/_landing.scss'
import Intellectual from '../../assets/images/intellectualpptyimage.svg'
import Contract from '../../assets/images/contractlawimage.svg'
import Employment from '../../assets/images/emoloymentlawimage.svg'
import Choose from '../../assets/images/chooseusimage.svg'
import Touch from '../../assets/images/intouchimage.png'


const WorkSelect = () => {
  return(
    <div>
    <div className='row gap-sm-4 gap-3 px-sm-4 px-2 py-4 py-sm-4'>
      <div className='col-sm-7 col-4  d-flex align-items-center'>
      <h4> 01 / Sign up</h4>
      </div>
      <div className='col'>
      <p>Join us by signing up and giving us access to a few details</p>
      </div>
    </div>
    <div className='line'></div>
    <div className='row gap-sm-4 gap-3 px-sm-4 px-2 py-4 py-sm-4'>
      <div className='col-sm-7 col-4 d-flex align-items-center'>
      <h4> 02 / Verification</h4>
      </div>
      <div className='col'>
      <p>Wait for an hour for your account to be verified</p>
      </div>
    </div>
    <div className='line'></div>
    <div className='row gap-sm-4 gap-3 px-sm-4 px-2 py-4 py-sm-4'>
      <div className='col-sm-7 col-4 d-flex align-items-center'>
      <h4 className='d-sm-flex d-none'> 03 / Log in</h4>
      <div className='d-block d-sm-none'> 
      <h4>03 /</h4> <h4>Log in</h4></div>
      </div>
      <div className='col'>
      <p>Log in after verification with your username and password to get started</p>
      </div>
    </div>
    <div className='line'></div>
  </div>
  )
}

const Landing =()=> {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };
  return (
    <>
      <GuestNavbar />
      <div>
        <div className="card" style={{border:'none', borderRadius:'0'}}>
          <img src={HeroImage} className="card-img" alt="heroImage" style={{minHeight:'400px'}}/>
          <div className="card-img-overlay landing-hero-card my-lg-5 my-md-0 my-3 py-xl-5 px-3 ps-lg-5 ms-md-2" >
            <h5 className="card-title mb-lg-4 mb-3 mt-xxl-5 pt-xl-5 pt-lg-0 pt-sm-3">Give Your Business 
            <br/>Adequate Legal Health Cover</h5>
            <h4 className="card-text mb-lg-4 mb-3" style={{maxWidth:'37rem'}}>We provide easy access to legal services tailored for your business needs.</h4>
            <a href="#" className="btn btn-primary mb-lg-4 mb-3">Learn More</a>
            <h6 className="card-text-small">Start protecting your business today</h6>
          </div>
        </div>
        <div className='container-fluid p-md-5 p-2 my-5'>
          <section className='services-section'>
            <div className='text-center mb-5'>
              <h3 className='mb-4'>Our Services</h3>
              <h5 className='pb-4'>Explore our wide range of legal services</h5>
            </div>
            <div className="row  mb-5 px-xl-5 px-lg-0 p-md-0 px-4">
            <div className="col-lg-4 col-md-6 col-sm-12 ">
                <div className="card mx-xl-2 mb-4">
                  <div className="row g-2 py-3 px-3">
                    <div className="col-xxl-5 col-md-12">
                      <img src={Contract} className="img-fluid rounded-start my-auto" alt="contract" style={{width:'100%', height:'100%'}}/>
                    </div>
                    <div className="col">
                      <div className="card-body" >
                        <h5 className="mb-3" style={{fontWeight:'600', color:'#5F5F5F'}}>Contract Law</h5>
                        <p className="card-text"> Protect your business</p>
       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4  col-md-6 col-sm-12">
                <div className="card mx-xl-2 mb-4" >
                  <div className="row g-2 py-3 px-3">
                    <div className="col-xxl-5 col-md-12">
                      <img src={Intellectual} className="img-fluid rounded-start my-auto" alt="contract" style={{width:'100%', height:'100%'}}/>
                    </div>
                    <div className="col">
                      <div className="card-body">
                        <h5 className="mb-3" style={{fontWeight:'600', color:'#5F5F5F'}}>Intellectual Property</h5>
                        <p className="card-text">Secure all your ideas</p>
       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12">
                <div className="card mx-xl-2 mb-3">
                  <div className="row g-2 py-3 px-3">
                    <div className="col-xxl-5 col-md-12">
                      <img src={Employment} className="img-fluid rounded-start my-auto" alt="contract" style={{width:'100%', height:'100%'}}/>
                    </div>
                    <div className="col">
                      <div className="card-body">
                        <h5 className="mb-3" style={{fontWeight:'600', color:'#5F5F5F'}}>Employment Law</h5>
                        <p className="card-text">Ensure fair practices</p>
       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <button type='button' className='btn btn-outline-primary'>View all services</button>
            </div>
          </section>

        </div>
        <div className='container-fluid p-md-5 p-2 ' style={{backgroundColor:'#EEF1F6'}}>
          <section className='choose-us-section my-3'>
            <div className='text-center  mb-5 mb-xxl-5 mb-md-2'>
              <h3 className='mb-4'>Why Choose Us</h3>
              <h5 className='pb-xxl-4'>We are committed to providing access to quality legal services</h5>
            </div>
            <div className=" ">
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-inner ">
    <div className="carousel-item active">
      <div className='px-xxl-5 mx-xxl-5 px-4 px-md-0'>
    <div className="card px-lg-5 mx-lg-5 mb-3 "style={{border:'none', borderRadius:'0', background:'none', boxShadow:'none'}} >
  <div className="row gap-xxl-4 gap-0 px-xl-5 d-none d-md-flex">
    
    <div className="col">
      <div className="card-body my-md-5 py-xl-5">
        <h3 className="text-center mb-3 mb-md-4" >Affordable Rates</h3>
        <h5 className="">Our rates are designed to be affordable while providing the quality services you need. You can rest assured that you're getting the best value for your investment.</h5>
        <div className='pt-xxl-5 mt-4 mt-md-5 text-center'>
              <button type='button' className='btn btn-primary'>Join us</button>
            </div>
      </div>
    </div>
    <div className="col-12 col-md-6">
      <img src={Choose} className="img-fluid rounded-start" alt="choose" style={{height:'100%', width:'100%'}}/>
    </div>
  </div>
  <div className="row gap-xxl-4 gap-0 px-xl-5 d-md-none d-flex">
  <div className="col-12 col-md-6 text-center">
      <img src={Choose} className="img-fluid rounded-start" alt="choose" style={{height:'300px', width:'300px'}}/>
    </div>
    <div className="col-12 col-md-6">
      <div className="card-body my-md-5 py-xl-5">
        <h3 className="text-center mb-3 mb-md-4" >Affordable Rates</h3>
        <h5 className="">Our rates are designed to be affordable while providing the quality services you need. You can rest assured that you're getting the best value for your investment.</h5>
        <div className='pt-xxl-5 mt-4 mt-md-5 text-center'>
              <button type='button' className='btn btn-primary'>Join us</button>
            </div>
      </div>
    </div>
    
  </div>
      </div>
    </div>
    </div>
    <div className="carousel-item">
      <div className='px-xxl-5 mx-xxl-5 px-4 px-md-0'>
    <div className="card px-lg-5 mx-lg-5 mb-3 "style={{border:'none', borderRadius:'0', background:'none', boxShadow:'none'}} >
  <div className="row gap-xxl-4 gap-0 px-xl-5 d-none d-md-flex">
    
    <div className="col">
      <div className="card-body my-md-5 py-xl-5">
        <h3 className="text-center mb-3 mb-md-4" >Good Rates</h3>
        <h5 className="">Our rates are designed to be affordable while providing the quality services you need. You can rest assured that you're getting the best value for your investment.</h5>
        <div className='pt-xxl-5 mt-4 mt-md-5 text-center'>
              <button type='button' className='btn btn-primary'>Join us</button>
            </div>
      </div>
    </div>
    <div className="col-12 col-md-6">
      <img src={Choose} className="img-fluid rounded-start" alt="choose" style={{height:'100%', width:'100%'}}/>
    </div>
  </div>
  <div className="row gap-xxl-4 gap-0 px-xl-5 d-md-none d-flex">
  <div className="col-12 col-md-6 text-center">
      <img src={Choose} className="img-fluid rounded-start" alt="choose" style={{height:'300px', width:'300px'}}/>
    </div>
    <div className="col-12 col-md-6">
      <div className="card-body my-md-5 py-xl-5">
        <h3 className="text-center mb-3 mb-md-4" >Good Rates</h3>
        <h5 className="">Our rates are designed to be affordable while providing the quality services you need. You can rest assured that you're getting the best value for your investment.</h5>
        <div className='pt-xxl-5 mt-4 mt-md-5 text-center'>
              <button type='button' className='btn btn-primary'>Join us</button>
            </div>
      </div>
    </div>
    
  </div>
      </div>
    </div>
    </div>
    <div className="carousel-item ">
      <div className='px-xxl-5 mx-xxl-5 px-4 px-md-0'>
    <div className="card px-lg-5 mx-lg-5 mb-3 "style={{border:'none', borderRadius:'0', background:'none', boxShadow:'none'}} >
  <div className="row gap-xxl-4 gap-0 px-xl-5 d-none d-md-flex">
    
    <div className="col">
      <div className="card-body my-md-5 py-xl-5">
        <h3 className="text-center mb-3 mb-md-4" >Best Rates</h3>
        <h5 className="">Our rates are designed to be affordable while providing the quality services you need. You can rest assured that you're getting the best value for your investment.</h5>
        <div className='pt-xxl-5 mt-4 mt-md-5 text-center'>
              <button type='button' className='btn btn-primary'>Join us</button>
            </div>
      </div>
    </div>
    <div className="col-12 col-md-6">
      <img src={Choose} className="img-fluid rounded-start" alt="choose" style={{height:'100%', width:'100%'}}/>
    </div>
  </div>
  <div className="row gap-xxl-4 gap-0 px-xl-5 d-md-none d-flex">
  <div className="col-12 col-md-6 text-center">
      <img src={Choose} className="img-fluid rounded-start" alt="choose" style={{height:'300px', width:'300px'}}/>
    </div>
    <div className="col-12 col-md-6">
      <div className="card-body my-md-5 py-xl-5">
        <h3 className="text-center mb-3 mb-md-4" >Affordable Rates</h3>
        <h5 className="">Our rates are designed to be affordable while providing the quality services you need. You can rest assured that you're getting the best value for your investment.</h5>
        <div className='pt-xxl-5 mt-4 mt-md-5 text-center'>
              <button type='button' className='btn btn-primary'>Join us</button>
            </div>
      </div>
    </div>
    
  </div>
      </div>
    </div>
    </div>
  </div>
  <div className="carousel-controls-container">
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"  data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
</div>
            </div>
            
           
          </section>

        </div>
        <div className='container-fluid p-md-5 p-2 my-md-5 my-2'>
          <section className='py-5 px-xxl-5 px-md-0 px-4 works-section'>
            <div className='row gap-4'>
              <div className='col-12 col-lg-4'>
                <h2 className='mb-4'>How it Works</h2>
                <h5>Understand how to easily navigate through our site in order to get the best service.</h5>
              </div>
              <div className='col-12 col-xl-7 col-lg-7 mt-4 mt-lg-0'>
              <div className="btn-group" role="group" aria-label="Basic outlined example" style={{width:'100%'}}>
  <button type="button" className={selectedButton === 0 ? 'active-btn-outline btn btn-outline-primary' : ' btn btn-outline-primary'} onClick={() => handleButtonClick(0)}>Join us</button>
  <button type="button" className={selectedButton === 1 ? 'active-btn-outline btn btn-outline-primary' : ' btn btn-outline-primary'} onClick={() => handleButtonClick(1)}>Choose a product</button>
  <button type="button" className={selectedButton === 2 ? 'active-btn-outline btn btn-outline-primary' : ' btn btn-outline-primary'} onClick={() => handleButtonClick(2)}>Purchase or reserve</button>
              </div>
              <div className='mt-xxl-5 mt-3'>
                {selectedButton === 0 &&(
                  <WorkSelect/>
                )}
                {selectedButton === 1 &&(
                  <WorkSelect/>
                )}
                {selectedButton === 2 &&(
                  <WorkSelect/>
                )}
              </div>
              </div>
            </div>
          </section>
        </div>
        <div className="card in-touch-card" style={{border:'none', borderRadius:'0'}}>
          <img src={Touch} className="card-img" alt="heroImage" style={{minHeight:'350px'}}/>
          <div className="card-img-overlay text-align-center text-center justify-content-center py-5" >
            <h5 className="card-title mb-4 mt-xxl-5 mt-xl-3 pt-xl-5 pt-lg-3">Ready to protect your business?</h5>
            <p className="card-text mb-5">Get in touch with us today</p>
            <a href="#" className="btn btn-outline-light mt-sm-5 mt-4">Contact us</a>
           
          </div>
        </div>
      </div>
      <Footer/> 
    </>
  );
}

export default Landing

