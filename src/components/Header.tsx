// src/components/Header.tsx
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Co-Working Space</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
