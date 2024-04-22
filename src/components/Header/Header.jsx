import React from 'react';
import IconButton from '@mui/material/IconButton';
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
      marginBottom="60px"
      sx={{
        borderBottom: '2px solid darkblue',
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
        Rental of campers
      </Typography>
      <Link to="/favorite" style={{ textDecoration: 'none', color: 'inherit' }}>
        <FavoriteBorderIcon style={{ fontSize: '2rem', color: 'black' }} />
      </Link>
    </Stack>
  );
};

export default Header;
