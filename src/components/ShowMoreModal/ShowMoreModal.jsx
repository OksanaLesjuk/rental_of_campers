import { useEffect } from 'react';
import { ShowMoreModalBox } from './ShowMoreModal.styled';

const ShowMoreModal = () => {
  useEffect(() => {
    console.log('modalca');
  });
  return (
    <>
      <ShowMoreModalBox />
    </>
  );
};

export default ShowMoreModal;
