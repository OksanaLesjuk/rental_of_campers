import { useCallback, useEffect, useState } from 'react';
import {
  BtnModal,
  BtnsWrap,
  ModalDescription,
  ModalGallery,
  ModalLocation,
  ModalPrice,
  ModalRating,
  ModalSubtitle,
  ModalTitle,
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
  const [SelectedTab, setSelectedTab] = useState('features');
  const [modalContent, setModalContent] = useState('');
  const { adverts } = useSelector(getAdverts);
  const advert = adverts.find(advert => advert.id === id);

  // const handleTabChange = tab => {
  //   setSelectedTab(tab);
  //   if (tab === 'features') {
  //     setModalContent(<FeaturesComponent advert={advert} />);
  //   } else if (tab === 'reviews') {
  //     setModalContent(<ReviewsComponent advert={advert} />);
  //   }
  // };
  const handleTabChange = useCallback(
    tab => {
      setSelectedTab(tab);
      if (tab === 'features') {
        setModalContent(<FeaturesComponent advert={advert} />);
      } else if (tab === 'reviews') {
        setModalContent(<ReviewsComponent advert={advert} />);
      }
    },
    [advert]
  );

  useEffect(() => {
    handleTabChange('features'); // Вибір вкладки за замовчуванням при завантаженні
  }, [handleTabChange]);

  return (
    <>
      <ShowMoreModalBox>
        <ModalTitle>{advert.name}</ModalTitle>

        <ModalSubtitle>
          <RatingWrap>
            <GradeIcon />
            <ModalRating>
              {advert.rating}({advert.reviews.length} Reviews)
            </ModalRating>
          </RatingWrap>
          <ModalLocation>
            <FmdGoodOutlinedIcon />
            <p>{advert.location}</p>
          </ModalLocation>
        </ModalSubtitle>

        <ModalPrice> &euro;{advert.price.toFixed(2)}</ModalPrice>

        <ModalGallery>
          {advert.gallery.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`camper-${index}`} />
            </div>
          ))}
        </ModalGallery>
        <ModalDescription>{advert.description}</ModalDescription>

        <BtnsWrap>
          <BtnModal
            isactive={SelectedTab === 'features' ? 'true' : 'false'}
            onClick={() => handleTabChange('features')}
          >
            Features
          </BtnModal>
          <BtnModal
            isactive={SelectedTab === 'reviews' ? 'true' : 'false'}
            onClick={() => handleTabChange('reviews')}
          >
            Reviews
          </BtnModal>
        </BtnsWrap>

        {modalContent}
      </ShowMoreModalBox>
    </>
  );
};

export default ShowMoreModal;
