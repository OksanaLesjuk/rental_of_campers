import ModalForm from '../ModalForm/ModalForm';
import React from 'react';
import Features from './Features';
import { FeaturesBox } from './FeaturesComponent.styled';

const FeaturesComponent = ({ advert }) => {
  return (
    <FeaturesBox>
      <Features advert={advert} />
      <ModalForm />
    </FeaturesBox>
  );
};

export default FeaturesComponent;
