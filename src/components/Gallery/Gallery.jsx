import CardCamper from 'components/CardCamper/CardCamper';
import { GalleryBox } from './Gallery.styled';

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
