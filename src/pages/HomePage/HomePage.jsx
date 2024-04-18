import React from 'react';
import { Home, NavLinkSign } from './HomePage.styled';

import { Typography } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const HomePage = () => {
  return (
    <Home>
      <Typography
        variant="body1"
        sx={{
          fontSize: '36px',
          textAlign: 'center',
          marginBottom: '20px',
          color: '#475467',
        }}
      >
        Зробіть свою подорож комфортною та незабутньою з нашими надійними
        кемперами{' '}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '24px',
          textAlign: 'center',
          marginBottom: '40px',
          color: '#475467',
        }}
      >
        Ігноруйте межі та відчуйте захоплюючу свободу
      </Typography>

      <NavLinkSign to="/catalog">
        <LibraryBooksIcon fontSize="large" />
        Catalog
      </NavLinkSign>
    </Home>
  );
};

export default HomePage;
