import { useEffect, useState } from 'react';
import {
  BtnsWrap,
  ModalGallery,
  RatingWrap,
  ShowMoreModalBox,
} from './ShowMoreModal.styled';
import { useSelector } from 'react-redux';
import { getAdverts } from '../../redux/selectors';

import GradeIcon from '@mui/icons-material/Grade';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import FeaturesComponent from 'components/FeaturesComponent/FeaturesComponent';
import ReviewsComponent from 'components/ReviewsComponent/ReviewsComponent';

const ShowMoreModal = ({ id }) => {
  const [SelectedTab, setSelectedTab] = useState('');
  const [modalContent, setModalContent] = useState('');
  const { adverts } = useSelector(getAdverts);
  const advert = adverts.find(advert => advert.id === id);
  useEffect(() => {
    console.log(SelectedTab);
  });
  const handleTabChange = tab => {
    setSelectedTab(tab);
    if (tab === 'features') {
      setModalContent(<FeaturesComponent advert={advert} />);
    } else if (tab === 'reviews') {
      setModalContent(<ReviewsComponent advert={advert} />);
    }
  };

  return (
    <>
      <ShowMoreModalBox>
        <h3>{advert.name}</h3>

        <div>
          <RatingWrap>
            <GradeIcon />
            <p>{advert.rating}</p>
          </RatingWrap>
          <div>
            <FmdGoodOutlinedIcon />
            <p>{advert.location}</p>
          </div>
        </div>

        <p>$ {advert.price.toFixed(2)}</p>

        <ModalGallery>
          {advert.gallery.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`camper-${index}`} />
            </div>
          ))}
        </ModalGallery>
        <p>{advert.description}</p>

        <BtnsWrap>
          <button onClick={() => handleTabChange('features')}>Features</button>
          <button onClick={() => handleTabChange('reviews')}>Reviews</button>
        </BtnsWrap>

        {modalContent}
      </ShowMoreModalBox>
    </>
  );
};

export default ShowMoreModal;
