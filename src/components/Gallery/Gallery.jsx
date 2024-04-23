import CardCamper from 'components/CardCamper/CardCamper';
import { GalleryBox } from './Gallery.styled';
import { useEffect } from 'react';

const Gallery = ({ data }) => {
  return (
    <GalleryBox>
      {data.map(advert => (
        <CardCamper advert={advert} key={advert.id} />
      ))}
    </GalleryBox>
  );
};

export default Gallery;
