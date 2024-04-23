import Gallery from 'components/Gallery/Gallery';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdverts } from '../../redux/operations';
import { getAdverts as advertsArr } from '../../redux/selectors';
const CatalogPage = () => {
  const { adverts, favorites } = useSelector(advertsArr);
  localStorage.removeItem('favorites');
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.clear();
    dispatch(getAdverts());
  }, [dispatch]);

  return (
    <>
      <section>
        <div>Location</div>
        <div>Filters</div>
      </section>
      <Gallery data={adverts} />
    </>
  );
};

export default CatalogPage;
