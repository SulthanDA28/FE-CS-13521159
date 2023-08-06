import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          Course Scheduler
        </Typography>
        <Button component={Link} to="/" color="inherit" style={{ marginLeft: 'auto' }}>
          Add-Matkul
        </Button>
        <Button component={Link} to="/addjur" color="inherit">
          Add-Jurusan/Fakultas
        </Button>
        <Button component={Link} to="/hitung" color="inherit">
          Calculate
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;