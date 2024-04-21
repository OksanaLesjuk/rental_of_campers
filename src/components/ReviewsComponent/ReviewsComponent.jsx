import ModalForm from 'components/ModalForm/ModalForm';
import Reviews from 'components/Reviews/Reviews';
import React from 'react';
import { ReviewsBox } from './ReviewsComponent.styled';

const ReviewsComponent = ({ advert }) => {
  return (
    <ReviewsBox>
      <Reviews advert={advert} />
      <ModalForm />
    </ReviewsBox>
  );
};

export default ReviewsComponent;
