import CardCamper from 'components/CardCamper/CardCamper';
import { GalleryBox } from './Gallery.styled';
import { useSelector } from 'react-redux';
import { getAdverts } from '../../redux/selectors';

const Gallery = () => {
  const { adverts } = useSelector(getAdverts);

  return (
    <GalleryBox>
      {adverts.map(advert => (
        <CardCamper advert={advert} key={advert.id} />
      ))}
    </GalleryBox>
  );
};

export default Gallery;
