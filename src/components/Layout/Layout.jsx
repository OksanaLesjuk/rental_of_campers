import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';
import { Container } from './Layout.styled';

// import Header from 'components/Header/Header';
import { CircularProgress } from '@mui/material';
import Header from 'components/Header/Header';

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<CircularProgress disableShrink />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
