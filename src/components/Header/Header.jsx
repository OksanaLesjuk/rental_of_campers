import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { Stack, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom/dist';

const Header = () => {
  const theme = useTheme();

  const handleFavoriteBtn = () => {};

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      flexWrap="wrap"
      marginBottom="26px"
      sx={{
        borderBottom: '2px solid #101828',
      }}
    >
      <Typography
        variant="h1"
        style={{
          fontWeight: '700',
          color: '#E44848',
          fontSize: theme.breakpoints.down('sm') ? '60px' : '70px',
        }}
      >
        <Link to="/">
          <HomeIcon fontSize="large" style={{ fill: '#E44848' }} />
        </Link>
      </Typography>
      <Link to="/favorite" style={{ textDecoration: 'none', color: 'inherit' }}>
        <FavoriteBorderIcon style={{ fontSize: '2rem', color: 'black' }} />
      </Link>
    </Stack>
  );
};

export default Header;
