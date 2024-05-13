import { Box, IconButton, InputBase, Menu, MenuItem, Stack, Toolbar, Typography, alpha, styled } from '@mui/material';
import React, { useState } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon
import SearchIcon from '@mui/icons-material/Search';
import { Delete } from '@mui/icons-material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import mainLogo from '../assets/main-logo.png'; // Import the logo image
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
  // @ts-ignore
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#ffebee',
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const TopBar = ({ open, handleDrawerOpen }) => {
  return (
    <AppBar
      position="fixed"
      // @ts-ignore
      open={open}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            '&:focus': {
                outline: 'none', // Remove the focus ring
              },
              color:"#e57373",
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon /> {/* Provide MenuIcon inside the IconButton */}
        </IconButton>
        <img src={mainLogo} alt="Main Logo" style={{ marginRight: '10px' }} /> {/* Logo */}
        
        <Box flexGrow={1} />
        <Stack direction="row">
       
        </Stack>
        {/* <Typography variant="h6" noWrap component="div">
                    Mini variant drawer
                </Typography> */}
      </Toolbar>
    </AppBar>
  );
}
export default TopBar;