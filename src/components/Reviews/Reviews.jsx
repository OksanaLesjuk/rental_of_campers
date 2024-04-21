import React, { useEffect } from 'react';
import { ReviewBox } from './Reviews.styled';

const Reviews = ({ advert }) => {
  const reviews = advert.reviews;
  useEffect(() => {
    console.log('Reviews', advert);
  });
  return (
    <ReviewBox>
      {reviews.length > 1 &&
        reviews.map(review => {
          const reviewerName = review.reviewer_name;

          const avatarText = reviewerName.charAt(0).toUpperCase();
          return (
            <div key={reviewerName}>
              <div>{avatarText}</div>
              <div>
                <p>{reviewerName}</p>
              </div>
              <p>{review.comment}</p>
            </div>
          );
        })}
    </ReviewBox>
  );
};

export default Reviews;
