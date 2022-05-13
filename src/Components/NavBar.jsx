import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

/**
 * Basic Toolbar displays page
 */
const ButtonAppBar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">
        Reviews
      </Typography>
    </Toolbar>
  </AppBar>
);

export default ButtonAppBar;
