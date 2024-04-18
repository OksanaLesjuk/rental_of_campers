import React from 'react';

import { Stack, Typography, useTheme } from '@mui/material';

const Header = () => {
  const theme = useTheme();

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
    </Stack>
  );
};

export default Header;
