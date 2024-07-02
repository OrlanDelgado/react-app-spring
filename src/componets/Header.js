// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ReactLogo from '../assets/logo192.png';

const Header = ({ onMenuClick }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onMenuClick}
          sx={{ marginRight: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          component="img"
          sx={{
            height: 40,
            marginRight: 2,
          }}
          alt="React Logo"
          src={ReactLogo}
        />
        <Typography variant="h6" component="div">
          Tareas App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
