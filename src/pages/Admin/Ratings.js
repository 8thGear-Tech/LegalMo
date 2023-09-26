import React, { useEffect } from 'react'
import AdminNavbar from '../../components/Navbar/AdminNavbar'
import { ReviewContainer ,progressReviews } from '../Company/Precart';
import { useAppContext } from '../../AppContext';



function Ratings() {
  const {reviews,totalReviews, averageRating, averageStarIconsFill,label, setReviews} = useAppContext();
  useEffect(() => {
    const storedReviews = localStorage.getItem('reviews');
    if (storedReviews) {
      const parsedReviews = JSON.parse(storedReviews);
 
      setReviews(parsedReviews);
    }
  }, []);
  return (
    <AdminNavbar>
      <div className='py-5 my-3'>
        <h4 style={{fontWeight:'600'}} className='text-center mb-5'>Ratings</h4>
        <div className='py-3'>
           <ReviewContainer  averageRating={averageRating}
      totalReviews={totalReviews}
      progressReviews={progressReviews}
      label={label}
      reviews={reviews} averageStarIconsFill={averageStarIconsFill}/>
      </div>
      </div>
    </AdminNavbar>
  )
}

export default Ratings