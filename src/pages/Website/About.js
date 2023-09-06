import React from 'react'
import GuestNavbar from '../../components/Navbar/GuestNavbar'
import Footer from '../../components/Footer'
import '../../sassfiles/pages/Website/_about.scss'
import HeroImage from '../../assets/images/aboutHeroImage.png'
import Touch from '../../assets/images/intouchimage.png'
import LegalMo from '../../assets/images/LegalMoblue.svg'
import team1 from '../../assets/images/team1.svg'
import team2 from '../../assets/images/team2.svg'
import team3 from '../../assets/images/team3.svg'
import team4 from '../../assets/images/team4.svg'
import team5 from '../../assets/images/team5.svg'
import team6 from '../../assets/images/team6.svg'
import { Link } from 'react-router-dom'


const teams = [
  {
    id:1,
    teamImage: team1,
  },
  {
    id:2,
    teamImage: team2,
  },
  {
    id:3,
    teamImage: team3,
  },
  {
    id:4,
    teamImage: team4,
  },
  {
    id:5,
    teamImage: team5,
  },
  {
    id:6,
    teamImage: team6,
  },
]

function About() {
  return (<>
    <GuestNavbar/>
    <div className=''>
    <div className="card about-hero-card"  style={{border:'none', borderRadius:'0'}}>
  <div className="card-body p-sm-5 p-4 mx-lg-5">
    <h5 className="card-title mb-4">We Build Bridges
    <br/>Between <span style={{color:'#5F5F5F'}}>Companies and Legal Services</span></h5>
    <p className="card-text" style={{maxWidth:'37rem'}}>We are on a mission to ensuring Small and Medium Enterprises (SMEs) and Startups, which contribute about 40% of the country’s GDP, are legally healthy and compliant.</p>
   
  </div>
  <img src={HeroImage} alt="Hero" className="card-img-bottom" style={{maxHeight:'550px'}}/>
    </div>
    <div className='p-md-5 p-4 about-hero-card'>
      <div className='line my-5'></div>
      <div className='row px-xl-5 pt-md-3 pt-1 mb-3'>
        <div className='col-12 col-lg-6 '>
        <h5 className="card-title mb-4">We Ensure that SMEs and Starups Get <br/><span style={{color:'#5F5F5F'}}>Affordable Legal Services</span></h5>
        </div>
        <div className='col-12 col-lg-6  '>
          <p className='card-text'>SMEs and startups are the backbone of the economy, but they often don't have the resources to afford expensive legal services. This can put them at a disadvantage, as they may be unable to protect themselves from legal risks or resolve disputes.</p>
        
          <p className='card-text'>We are committed to ensuring that SMEs and startups have access to affordable quality legal services. We offer a variety of services that are tailored to the needs of small businesses.</p>
          <p className='card-text'>Our partners are lawyers experienced in the legal issues that affect small businesses, and they are passionate about helping entrepreneurs succeed.</p>
          <p className='card-text'>We are here to help you protect your business and achieve your goals.</p>
        </div>
      </div>

    </div>
    <div className='py-5 px-4 px-md-5 team-section'>
      <div className='card p-lg-5 p-2' style={{border:'none', background:'#CFCFCF'}}>
        <div className='px-lg-5 px-3 mx-xl-5 mt-2 mt-md-0'>
          <h2>Meet our team</h2>
          <div className='line my-md-5 my-4'></div>
          <div className='row '>
            {
              teams.map((team)=> {
                const {id, teamImage} = team;
                return(
                  <div className='col-6 col-sm-4 mb-4' key={id}>
                     <div className="card " style={{border:'none', background:'none'}}>
                    <img src={teamImage} className="card-img-top" alt="teamImage"/>
                    <div className="mx-auto">
                  
                    <p className="">Lorem Ipsum</p>
                    <p className="">Executive Director</p>
    </div>
    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
    <div className='question-section p-3 p-md-5 mb-5 mb-lg-0'>
      <section className='p-lg-5'>
        <div className='d-flex justify-content-between align-items-center'>
          <div style={{maxWidth:'32rem'}}>
            <h2>Have a question?</h2>
            <h2 className='pb-lg-5'>Our team is happy to assist you</h2>
            <div className='text-center mt-5'>
              <button type="button" className="btn btn-outline-primary">Contact Us</button>
            </div>
          </div>
         <img src={LegalMo} className='legal-image' alt='logo'/>
        </div>
      </section>

    </div>
    <div className="card in-touch-card" style={{border:'none', borderRadius:'0'}}>
          <img src={Touch} className="card-img" alt="heroImage" style={{minHeight:'350px'}}/>
          <div className="card-img-overlay text-align-center text-center justify-content-center py-5" >
            <h5 className="card-title mb-4 mt-xxl-5 mt-xl-3 pt-xl-5 pt-lg-3">Ready to protect your business?</h5>
            <p className="card-text mb-5">Get in touch with us today</p>
            <Link to='/company-signup' className="btn btn-outline-light mt-sm-5 mt-4">Get started</Link>
           
          </div>
        </div>
      
    </div>
    <Footer/>
    </>
  )
}

export default About