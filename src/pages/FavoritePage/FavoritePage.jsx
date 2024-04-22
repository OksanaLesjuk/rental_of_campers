import Gallery from 'components/Gallery/Gallery';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAdverts } from '../../redux/selectors';

const FavoritePage = () => {
  const { favorites } = useSelector(getAdverts);
  useEffect(() => {
    console.log(favorites);
  }, [favorites]);
  return (
    <>
      <Gallery data={favorites} />
    </>
  );
};

export default FavoritePage;
