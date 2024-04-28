import RatingStars from './RaitingStars';
import { AvatarModal, ReviewBox, ReviewHeader } from './Reviews.styled';

const Reviews = ({ advert }) => {
  const reviews = advert.reviews;

  return (
    <ReviewBox>
      {reviews.length > 1 &&
        reviews.map(review => {
          console.log(review);
          const reviewerName = review.reviewer_name;

          const avatarText = reviewerName.charAt(0).toUpperCase();
          const revieverRating = review.reviewer_rating;
          return (
            <div key={reviewerName}>
              <ReviewHeader>
                <AvatarModal>
                  <p>{avatarText}</p>
                </AvatarModal>
                <div>
                  <p>{reviewerName}</p>
                  <RatingStars rating={revieverRating} />
                </div>
              </ReviewHeader>

              <p>{review.comment}</p>
            </div>
          );
        })}
    </ReviewBox>
  );
};

export default Reviews;
