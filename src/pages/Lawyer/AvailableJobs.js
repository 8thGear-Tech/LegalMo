import React, { useState } from 'react'
import UserNavbar from '../../components/Navbar/UserNavbar'
import Footer from '../../components/Footer'
import { Link, useNavigate } from 'react-router-dom';
import lawyerImage from '../../assets/images/lawyer-image.svg'

export const jobRecommendations = [
    {
      id:1,
      jobName:'Contract Drafting and Review',
      jobPrice: 100000,
      recommendation: 'Best',
       jobDetails: 
       'We are looking for an employment law expert who will prepare and employment contract stating lorem ipsum dolor sit amet consectetur. Donec euismod eu praesent mi. Eu faucibus tincidunt molestie cras purus tortor ut sociis. Viverra viverra consectetur faucibus tellus.',
    },
    {
      id:2,
      jobName:'Draft of Term and Use',
      jobPrice: 100000,
       jobDetails: 'We are looking for an employment law expert who will prepare and employment contract stating lorem ipsum dolor sit amet consectetur. Donec euismod eu praesent mi. Eu faucibus tincidunt molestie cras purus tortor ut sociis. Viverra viverra consectetur faucibus tellus.',
    },
    {
      id:3,
      jobName:'Contract Drafting and Review',
      jobPrice: 100000,
      recommendation: 'Best',
       jobDetails: 'We are looking for an employment law expert who will prepare and employment contract stating lorem ipsum dolor sit amet consectetur. Donec euismod eu praesent mi. Eu faucibus tincidunt molestie cras purus tortor ut sociis. Viverra viverra consectetur faucibus tellus.',
    },
    {
      id:4,
      jobName:'Contract Drafting and Review',
      jobPrice: 100000,
       jobDetails: 'We are looking for an employment law expert who will prepare and employment contract stating lorem ipsum dolor sit amet consectetur. Donec euismod eu praesent mi. Eu faucibus tincidunt molestie cras purus tortor ut sociis. Viverra viverra consectetur faucibus tellus.',
    },
    {
      id:5,
      jobName:'Draft of Term and Use',
      jobPrice: 100000,
       jobDetails: 'We are looking for an employment law expert who will prepare and employment contract stating lorem ipsum dolor sit amet consectetur. Donec euismod eu praesent mi. Eu faucibus tincidunt molestie cras purus tortor ut sociis. Viverra viverra consectetur faucibus tellus.',
    },
    {
      id:6,
      jobName:'Contract Drafting and Review',
      jobPrice: 100000,
      recommendation: 'Best',
       jobDetails: 'We are looking for an employment law expert who will prepare and employment contract stating lorem ipsum dolor sit amet consectetur. Donec euismod eu praesent mi. Eu faucibus tincidunt molestie cras purus tortor ut sociis. Viverra viverra consectetur faucibus tellus.',
    },
    {
      id:7,
      jobName:'Contract Drafting and Review',
      jobPrice: 100000,
      recommendation: 'Best',
       jobDetails: 'We are looking for an employment law expert who will prepare and employment contract stating lorem ipsum dolor sit amet consectetur. Donec euismod eu praesent mi. Eu faucibus tincidunt molestie cras purus tortor ut sociis. Viverra viverra consectetur faucibus tellus.',
    },
    {
      id:8,
      jobName:'Contract Drafting and Review',
      jobPrice: 100000,
      recommendation: 'Best',
       jobDetails: 'We are looking for an employment law expert who will prepare and employment contract stating lorem ipsum dolor sit amet consectetur. Donec euismod eu praesent mi. Eu faucibus tincidunt molestie cras purus tortor ut sociis. Viverra viverra consectetur faucibus tellus.',
    },
    {
      id:9,
      jobName:'Contract Drafting and Review',
      jobPrice: 100000,
      recommendation: 'Best',
       jobDetails: 'We are looking for an employment law expert who will prepare and employment contract stating lorem ipsum dolor sit amet consectetur. Donec euismod eu praesent mi. Eu faucibus tincidunt molestie cras purus tortor ut sociis. Viverra viverra consectetur faucibus tellus.',
    },
    {
      id:10,
      jobName:'Contract Drafting and Review',
      jobPrice: 100000,
      recommendation: 'Best',
       jobDetails: 'We are looking for an employment law expert who will prepare and employment contract stating lorem ipsum dolor sit amet consectetur. Donec euismod eu praesent mi. Eu faucibus tincidunt molestie cras purus tortor ut sociis. Viverra viverra consectetur faucibus tellus.',
    },
    {
      id:11,
      jobName:'Contract Drafting and Review',
      jobPrice: 100000,
      recommendation: 'Best',
       jobDetails: 'We are looking for an employment law expert who will prepare and employment contract stating lorem ipsum dolor sit amet consectetur. Donec euismod eu praesent mi. Eu faucibus tincidunt molestie cras purus tortor ut sociis. Viverra viverra consectetur faucibus tellus.',
    },
    {
      id:12,
      jobName:'Draft of Term and Use',
      jobPrice: 100000,
       jobDetails: 'We are looking for an employment law expert who will prepare and employment contract stating lorem ipsum dolor sit amet consectetur. Donec euismod eu praesent mi. Eu faucibus tincidunt molestie cras purus tortor ut sociis. Viverra viverra consectetur faucibus tellus.',
    },
    {
      id:13,
      jobName:'Contract Drafting and Review',
      jobPrice: 100000,
      recommendation: 'Best',
       jobDetails: 'We are looking for an employment law expert who will prepare and employment contract stating lorem ipsum dolor sit amet consectetur. Donec euismod eu praesent mi. Eu faucibus tincidunt molestie cras purus tortor ut sociis. Viverra viverra consectetur faucibus tellus.',
    },
    {
      id:14,
      jobName:'Contract Drafting and Review',
      jobPrice: 100000,
       jobDetails: 'We are looking for an employment law expert who will prepare and employment contract stating lorem ipsum dolor sit amet consectetur. Donec euismod eu praesent mi. Eu faucibus tincidunt molestie cras purus tortor ut sociis. Viverra viverra consectetur faucibus tellus.',
    },
    {
      id:15,
      jobName:'Draft of Term and Use',
      jobPrice: 100000,
       jobDetails: 'We are looking for an employment law expert who will prepare and employment contract stating lorem ipsum dolor sit amet consectetur. Donec euismod eu praesent mi. Eu faucibus tincidunt molestie cras purus tortor ut sociis. Viverra viverra consectetur faucibus tellus.',
    },
    {
        id:16,
        jobName:'Contract Drafting and Review',
        jobPrice: 100000,
         jobDetails: 'We are looking for an employment law expert who will prepare and employment contract stating lorem ipsum dolor sit amet consectetur. Donec euismod eu praesent mi. Eu faucibus tincidunt molestie cras purus tortor ut sociis. Viverra viverra consectetur faucibus tellus.',
      },
      {
        id:17,
        jobName:'Contract Drafting and Review',
        jobPrice: 100000,
        recommendation: 'Best',
         jobDetails: 'We are looking for an employment law expert who will prepare and employment contract stating lorem ipsum dolor sit amet consectetur. Donec euismod eu praesent mi. Eu faucibus tincidunt molestie cras purus tortor ut sociis. Viverra viverra consectetur faucibus tellus.',
      },
      {
        id:18,
        jobName:'Contract Drafting and Review',
        jobPrice: 100000,
         jobDetails: 'We are looking for an employment law expert who will prepare and employment contract stating lorem ipsum dolor sit amet consectetur. Donec euismod eu praesent mi. Eu faucibus tincidunt molestie cras purus tortor ut sociis. Viverra viverra consectetur faucibus tellus.',
      },
      {
        id:19,
        jobName:'Contract Drafting and Review',
        jobPrice: 100000,
         jobDetails: 'We are looking for an employment law expert who will prepare and employment contract stating lorem ipsum dolor sit amet consectetur. Donec euismod eu praesent mi. Eu faucibus tincidunt molestie cras purus tortor ut sociis. Viverra viverra consectetur faucibus tellus.',
      },
      {
        id:20,
        jobName:'Contract Drafting and Review',
        jobPrice: 100000,
         jobDetails: 'We are looking for an employment law expert who will prepare and employment contract stating lorem ipsum dolor sit amet consectetur. Donec euismod eu praesent mi. Eu faucibus tincidunt molestie cras purus tortor ut sociis. Viverra viverra consectetur faucibus tellus.',
      },
  ]

const AvailableJobs = () => {
    const navigate = useNavigate()
    const [selectedButton, setSelectedButton] = useState('Best fit');
    const [filteredJobs, setFilteredJobs] = useState(
        jobRecommendations.filter(job => job.recommendation === 'Best')
      );
    
      const handleButtonClick = (buttonType) => {
        if (buttonType === 'Best fit') {
          setFilteredJobs(jobRecommendations.filter(job => job.recommendation === 'Best'));
        } else if (buttonType === 'Recent jobs') {
          setFilteredJobs(jobRecommendations);
        }
    
        setSelectedButton(buttonType);
      };

      const handleJobClick = (jobId) => {
        navigate(`/lawyer/available-job-item/${jobId}`);
       }
  return (
    <div>
        <UserNavbar/>
        <section className='py-5 px-3 px-sm-5'>
            <div className='row'>
                <div className='col-12 col-lg-8'>
                    <div className='card'>
                        <div className='text-center py-4' style={{ borderBottom: '1px solid #CFCFCF' }}>
                            <h3>Available Jobs</h3>
                        </div>
                        <div className='d-flex gap-5 py-3 px-5'style={{ borderBottom: '1px solid #CFCFCF' }}>
                        <p className={selectedButton === 'Best fit' ? 'active-p-text' : 'p-text'} onClick={() => handleButtonClick('Best fit')}>
          Best fit
        </p>
        <p className={selectedButton === 'Recent jobs' ? 'active-p-text' : 'p-text'} onClick={() => handleButtonClick('Recent jobs')}>
          Recent jobs
        </p>
          
        </div>

        <div>
    {filteredJobs.map((job) => (
        <div key={job.id} className='d-flex flex-column gap-3 p-4 ' style={{ borderBottom: '1px solid #CFCFCF' }}>
            <div className='action'>
            <h6 className='' onClick={() => handleJobClick(job.id)}>{job.jobName}</h6>
            </div>
            <div>
                <p style={{color:'#5F5F5F'}}>Amount: ₦{job.jobPrice.toLocaleString()}</p>
                <p style={{color:'#5F5F5F'}}>
                {job.jobDetails.split(' ').slice(0, 17).join(' ')}
                {job.jobDetails.split(' ').length > 17 ? '...' : ''}
                </p>
            </div>
        </div>
    ))}
</div>

                    </div>

                </div>
                <div className='col-12 col-lg-4'>
                    <div className='d-block gap-4 mt-4 mt-lg-0'>
                        <div className='card p-3' style={{borderRadius:'20px', width:'100%'}}>
                            <div className='d-flex flex-column text-center '>
                                <img src={lawyerImage} alt='lawyer' style={{height:'120px'}}/>
                                <div className='mt-2'>
                                    <p style={{fontWeight:'500'}}>Amber Daniel</p>
                                    <p style={{ color:'#545454'}}>Legal Practitioner</p>
                                </div>

                            </div>

                            <div className='d-flex flex-column gap-2'>
                            <p style={{fontWeight:'500', color:'#545454'}}>Profile Status</p>
                            <div className='d-flex gap-2'>
    <div className="progress flex-grow-1" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar bg-secondary" style={{ width: "60%" }}></div>
    </div>
    <span style={{color:'#545454'}}>60%</span>
</div>


                            <Link to='/lawyer/profile' className='text-decoration-none action ' style={{ color:'#545454'}}>
                                <p>Complete Profile</p></Link>
                            </div>
                        </div>
                        <div className='card py-2 mt-3' style={{borderRadius:'20px', width:'100%'}}>
           
           <Link to='/lawyer/get-paid' className='text-decoration-none text-secondary text-center py-3 action'> <p>Get Paid</p></Link>
           <div className='' style={{border:'1px solid #CFCFCF'}}></div>
           <Link to='/lawyer/dashboard' className='text-decoration-none text-secondary text-center py-3 action'> <p>Dashboard</p></Link>
          
        </div>
                    </div>
                </div>
            </div>

        </section>
      <Footer/>
    </div>
  )
}

export default AvailableJobs
