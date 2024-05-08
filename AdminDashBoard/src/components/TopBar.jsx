import { Box, IconButton, InputBase, Menu, MenuItem, Stack, Toolbar, Typography, alpha, styled } from '@mui/material';
import React, { useState } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon
import SearchIcon from '@mui/icons-material/Search';
import { Delete } from '@mui/icons-material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

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

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
        <Search sx={{color:"#e57373",border: '1px solid #e57373',borderRadius:3.5}}>
          <SearchIconWrapper >
            <SearchIcon sx={{color:"#e57373",}}/>
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      
        <Box flexGrow={1} />
        <Stack direction="row">
          <IconButton
           
            sx={{
              '&:focus': {
                outline: 'none', // Remove the focus ring
              },
              color: "#e57373",
            }}
          >
            <NotificationsNoneOutlinedIcon />
          </IconButton>
          <IconButton
           aria-controls="navigation-menu"
           aria-haspopup="true"
            color="inherit"
            sx={{
              '&:focus': {
                outline: 'none', // Remove the focus ring
              }, color: "#e57373",
            }}
          >
            <SettingsOutlinedIcon />
          </IconButton>
       
          <IconButton
            color="inherit"
            sx={{
                '&:focus': {
                  outline: 'none', // Remove the focus ring
                }, color: "#e57373",
              }}
          >
            <PersonOutlineOutlinedIcon />
          </IconButton>
        </Stack>
        {/* <Typography variant="h6" noWrap component="div">
                    Mini variant drawer
                </Typography> */}
      </Toolbar>
    </AppBar>
  );
}
export default TopBar;