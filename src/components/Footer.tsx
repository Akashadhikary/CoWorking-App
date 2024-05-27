import React from 'react';
import "./Footer.css"
import { Typography } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Typography >&copy; Copyright {currentYear} Bhive Private Limited. All rights reserved.</Typography>
    </footer>
  );
}

export default Footer;
