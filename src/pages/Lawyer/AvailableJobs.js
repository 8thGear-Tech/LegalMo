import React, { useEffect, useState } from 'react'
import UserNavbar from '../../components/Navbar/UserNavbar'
import Footer from '../../components/Footer'
import { Link, useNavigate, useParams } from 'react-router-dom';
import lawyerImage from '../../assets/images/lawyer-image.svg'
import lawyerRoute from '../../services/lawyerRoute';

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
    const[statusFilter, setStatusFilter] = useState('Best fit');
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [details, setDetails] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const {getJobs, getLawyerProfile, getOneJob} = lawyerRoute()
    const {lawyerId} = useParams();


  console.log(lawyerId)

    useEffect(() => {
      getJobs(
        setJobs,
        statusFilter,
        setMessage,
        setLoading,
        setIsSuccessful,
       
      )

    }, [statusFilter]);

    useEffect(() => {
      getLawyerProfile(
        setMessage,
        setLoading,
        setIsSuccessful,
        setDetails,
        lawyerId
      )

    }, []);
  
    const handleStatusFilterChange = (newStatus) => {
      setStatusFilter(newStatus);
     
   
    };
      const handleJobClick = (jobId) => {
        console.log(`Getting product with ID ${jobId}`);
        getOneJob(
          setMessage, setLoading, setIsSuccessful, jobId, setSelectedJob
        )
        
       }
  return (
    <div>
        <UserNavbar/>
        <section className='py-5 px-3 px-sm-5'>
        {loading ? (
          <div className="text-center"style={{paddingTop:'150px', paddingBottom:'100px'}}>
            <div className="spinner-border" role="status" >
              <span className="visually-hidden" >Loading...</span>
            </div>
            <p>Loading available jobs...</p>
          </div>):(
            <div className='row'>
                <div className='col-12 col-lg-8'>
                    <div className='card'>
                        <div className='text-center py-4' style={{ borderBottom: '1px solid #CFCFCF' }}>
                            <h3>Available Jobs</h3>
                        </div>
                        <div className='d-flex gap-5 py-3 px-5'style={{ borderBottom: '1px solid #CFCFCF' }}>
                        <p className={statusFilter === 'Best fit' ? 'active-p-text' : 'p-text'} onClick={() => handleStatusFilterChange('Best fit')}>
          Best fit
        </p>
        <p className={statusFilter === 'Recent jobs' ? 'active-p-text' : 'p-text'} onClick={() => handleStatusFilterChange('Recent jobs')}>
          Recent jobs
        </p>
          
        </div>

        <div>
    {jobs?.map((job) => (
        <div key={job?._id} className='d-flex flex-column gap-3 p-4 ' style={{ borderBottom: '1px solid #CFCFCF' }}>
            <div className='action'>
            <h6 className='' onClick={() => handleJobClick(job?.productId)}>{job?.detail}
            </h6>
          
            </div>
            <div>
                <p style={{color:'#5F5F5F'}}>Amount: ₦{job?.jobPrice}</p>
                <p style={{color:'#5F5F5F'}}>
                {job?.detail.split(' ').slice(0, 17).join(' ')}
                {job?.detail.split(' ').length > 17 ? '...' : ''}
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
                                <img src={details?.profileImage?.url} alt='lawyer' style={{height:'120px'}}/>
                                <div className='mt-2'>
                                    <p style={{fontWeight:'500'}}>{details?.name}</p>
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
          )}
        </section>
      <Footer/>
    </div>
  )
}

export default AvailableJobs
