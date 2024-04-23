import Gallery from 'components/Gallery/Gallery';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAdverts } from '../../redux/selectors';
import { Link } from 'react-router-dom';

const FavoritePage = () => {
  const { favorites } = useSelector(getAdverts);

  return (
    <>
      <Link to="/catalog">Back to catalog</Link>
      <Gallery data={favorites} />
    </>
  );
};

export default FavoritePage;
