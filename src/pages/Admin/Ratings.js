import React, { useEffect, useState } from 'react'
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import { ReviewContainer ,progressReviews, formatDateToWords } from '../Company/Precart';
import { useAppContext } from '../../AppContext';
import axios from 'axios';
import ratingsRoute from '../../services/ratingsRoute';



function Ratings() {
  const {reviews,totalReviews, averageRating, averageStarIconsFill,label, setReviews} = useAppContext();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [isSuccessful, setIsSuccessful] = useState(false);
 
  const [showModal, setShowModal] = useState(false);

const {getAllRatings}= ratingsRoute()


  useEffect(() => {
    getAllRatings(setMessage, setLoading, setIsSuccessful, reviews,setReviews, setShowModal);
  }, []);

  return (
    <AdminNavbar>
      <div className='py-5 my-3'>
      {loading ? (
          <div className="text-center"style={{paddingTop:'150px', paddingBottom:'100px'}}>
            <div className="spinner-border" role="status" >
              <span className="visually-hidden" >Loading...</span>
            </div>
            <p>Loading reviews...</p>
          </div>
        ) : (
          <div>
        <h4 style={{fontWeight:'600'}} className='text-center mb-5'>Ratings</h4>
        <div className='py-3'>
           <ReviewContainer  averageRating={averageRating}
      totalReviews={totalReviews}
      progressReviews={progressReviews}
      label={label}
      reviews={reviews} averageStarIconsFill={averageStarIconsFill}/>
      </div>
      </div>
        )}
      </div>
    </AdminNavbar>
  )
}

export default Ratings