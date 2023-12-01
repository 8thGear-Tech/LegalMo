import React, { useEffect, useState } from 'react'
import UserNavbar from '../../components/Navbar/UserNavbar'
import Footer from '../../components/Footer'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { jobRecommendations } from './AvailableJobs';
import lawyerImage from '../../assets/images/lawyer-image.svg'
import { shuffleArray } from '../Company/Precart';
import { LoginModal } from '../../components/Forms/Authenticationforms';
import lawyerRoute from '../../services/lawyerRoute';

const AvailableJobItem = () => {
    const { jobId } = useParams();
    const [moreDetails, setMoreDetails] = useState('')

const navigate = useNavigate()
const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [isSuccessful, setIsSuccessful] = useState(false);
    const [details, setDetails] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState({});
    const [showModal, setShowModal] = useState(false);
    const {getLawyerProfile, getOneJob, getJobs, requestDetail,applyJob}=lawyerRoute()
    const[statusFilter, setStatusFilter] = useState('Best fit');
    const location = useLocation();
    const lawyerId = new URLSearchParams(location.search).get('lawyerId');
    const [displayedJobs, setDisplayedJobs] = useState([]);
    const [showRequestDetailsModal, setShowRequestDetailsModal] = useState(false);

  useEffect(() => {
    getOneJob(
      setMessage, setLoading, setIsSuccessful, jobId, lawyerId, setSelectedJob
    )

    }, []);

    useEffect(() => {
      getLawyerProfile(
        setMessage,
        setLoading,
        setIsSuccessful,
        setDetails,
        lawyerId
      )

    }, []);

    useEffect(() => {
      getJobs(
        setJobs,
        statusFilter,
        setMessage,
        setLoading,
        setIsSuccessful,
       
      )

    }, []);

    useEffect(() => {
      // Assuming 'jobs' is fetched somehow and stored in allJobs
      const shuffledJobs = shuffleArray(jobs);
     
      setDisplayedJobs(shuffledJobs.slice(0, 2));
    }, [jobs]);
  const closeModal = () => {
    setShowModal(false);
  };
 



  const shuffledSimilarJobs = shuffleArray(jobs);
  const displayedSimilarJobs = shuffledSimilarJobs.slice(0, 2);



  const handleRequestDetailsClose = () => {
   
    setShowRequestDetailsModal(false);
  };
  
  const handleRequestDetailsShow = () => {
   
    setShowRequestDetailsModal(true);
    
    
  };

  const handleRequestDetailsSend = () => {

    
    const body = {
      detail: moreDetails,
    };
  console.log(moreDetails, 'detail')
    
    requestDetail(body, setMessage, setLoading, setIsSuccessful, jobId, setShowModal);
    
    setShowRequestDetailsModal(false);
    setMoreDetails('')
  };
  
  const handleApplyClick =() => {
   applyJob(
    setMessage, setLoading, setIsSuccessful, jobId,setShowModal
   )
  }
  const handleJobClick = (jobId) => {
    getOneJob(
      setMessage, setLoading, setIsSuccessful, jobId, lawyerId, setSelectedJob
    )
    const shuffledJobs = shuffleArray(jobs);
    setDisplayedJobs(shuffledJobs.slice(0, 2));
   
  };

  if (loading) {
    return <div className='justify-content-center align-items-center text-center my-5' style={{paddingTop:'150px', paddingBottom:'100px'}}>
 <div className="spinner-border text-secondary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
      </div>; 
  }



  return (
    <div>
        <UserNavbar/>
        <section className='py-5 px-sm-5 px-3'>
        <div className='row'>
                <div className='col-12 col-lg-8'>
                    <div className='card py-5 px-3 gap-2'>
                       <h5 style={{fontWeight:'500'}}>{selectedJob?.productId?.productName}</h5>
                       <p style={{color:'#5F5F5F'}}>{selectedJob?.productId?.productDescription}</p>
                       <p style={{color:'#5F5F5F'}}>{selectedJob?.detail}</p>
                       <p>Amount: ₦{selectedJob.productId?.productPrice.toLocaleString()}</p>
                       
                        <button type='submit' className='btn btn-outline-primary py-2' style={{width:'300px'}}  onClick={handleRequestDetailsShow}>Request more details</button>
                        <button type='submit' className='btn btn-primary py-2' style={{width:'300px'}} onClick={handleApplyClick}>Apply now</button>
                       
                    </div>
                    <div className='mt-3'>
                        <div className='text-center py-4' style={{ borderBottom: '1px solid #CFCFCF' }}>
                            <h3>Similar Jobs</h3>
                        </div>
                       

        <div>
        {displayedSimilarJobs.map((job) => (
        <div key={job._id} className='d-flex flex-column gap-3 p-4 '>
            <div className='action'>
            <h6 className='' onClick={() => handleJobClick(job?._id)}>{job?.productId?.productName}
            </h6>
            </div>
            <div>
                <p style={{color:'#5F5F5F'}}>Amount: ₦{job?.productId?.productPrice.toLocaleString()}</p>
                <p style={{color:'#5F5F5F'}}>
                {job?.productId?.productDescription.split(' ').slice(0, 17).join(' ')}
                {job?.productId?.productDescription.split(' ').length > 17 ? '...' : ''}
                </p>
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

        </section>
        <LoginModal 
        showModal={showModal}
        isSuccess={isSuccessful}
        closeModal={()=> setShowModal(false)}
        modalText={message}
      />
       
        <div>
 <div
   className={`modal fade px-2 px-md-0 ${showRequestDetailsModal ? 'show' : ''}`}
   style={{ display: showRequestDetailsModal ? 'block' : 'none' }}
   tabIndex='-1'
   role='dialog'
   aria-labelledby=''
   aria-hidden='true'
 >
   <div className='modal-dialog modal-lg modal-dialog-centered' role='document'>
     <div className='modal-content gap-3 p-3 p-sm-5'>
       <div className='modal-header'>
         <h5 className='modal-title' id='editPaymentModal' style={{ fontWeight: '600' }}>
         {selectedJob?.productId?.productName}
         </h5>

         <button type='button' className='btn-close' onClick={handleRequestDetailsClose}></button>
       </div>
       <div className='modal-body '>
         <h6 className='mb-2' style={{ color: '#5F5F5F' }}>
       
                {selectedJob?.productId?.productDescription}
               
               
         </h6>
         <p style={{color:'#5F5F5F'}}>
                {selectedJob?.detail}
                </p>
         <div className='form-group gap-2 mt-5'>
           <h6 name='exampleFormControlTextarea1' className='form-label'>
             Request more details
           </h6>
           <textarea className="form-control bg-white" id="exampleFormControlTextarea1" rows="8" placeholder='Start typing....' value={moreDetails} onChange={(event) => setMoreDetails(event.target.value)}></textarea>
          
         </div>
         <div className='d-flex flex-column mt-5'>
           <button type='button' style={{ width: '250px' }} className='btn btn-primary mt-3 px-5' onClick={handleRequestDetailsSend}>
             Send
           </button>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div className={`modal-backdrop fade ${showRequestDetailsModal ? 'show' : ''}`} style={{ display: showRequestDetailsModal ? 'block' : 'none' }}></div>
        </div>
        <Footer/>
      
    </div>
  )
}

export default AvailableJobItem
