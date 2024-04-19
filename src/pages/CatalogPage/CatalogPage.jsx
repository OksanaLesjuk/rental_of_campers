import Gallery from 'components/Gallery/Gallery';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAdverts } from '../../redux/operations';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdverts());
  }, [dispatch]);

  return (
    <>
      <section>
        <div>Location</div>
        <div>Filters</div>
      </section>
      <Gallery />
    </>
  );
};

export default CatalogPage;
