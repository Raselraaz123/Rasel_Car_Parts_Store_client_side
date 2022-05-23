import React from 'react';
import useReview from '../../hooks/useReview';
import ReviewInfo from './ReviewInfo';

const Review = () => {
  const [reviews,setReviews]=useReview()
  return (
    <div className="mt-10">
      <h1 className=" text-3xl font-bold text-pink-400 text-center">
        Our happy client{" "}
      </h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {reviews.map((review) => (
          <ReviewInfo key={review._id} review={review}></ReviewInfo>
        ))}
      </div>
    </div>
  );
};

export default Review;