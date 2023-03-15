import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack'
// import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';  
// import AdbIcon from '@mui/icons-material/Adb';
import { useAuth0 } from "@auth0/auth0-react";
import Logo from '../assets/AIMETRIC.jpeg';

// const pages = ['Home', 'About'];
const settings = ['Profile', 'Dashboard'];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'blueviolet' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'flex', lg: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', lg: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            AIMETRIC
          </Typography> */}

          <Box sx={{ flexGrow: .3, display: { xs: 'flex', lg: 'none', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Button color='inherit' component={Link} to='/calender' sx={{ fontSize: '15px', flexGrow: .5, display: 'flex', flexDirection: 'column' }}>
              Calendar
            </Button>
              <Button color='inherit' component={Link} to='/' sx={{ fontSize: '15px', flexGrow: .5, display: 'flex', flexDirection: 'column' }}>
              Home
            </Button>
            <Button color='inherit' component={Link} to='/about' sx={{ fontSize: '15px', flexGrow: .5, display: 'flex', flexDirection: 'column' }}>
              About
            </Button>
            {
              isAuthenticated ? (
                <Button variant='outlined' color='inherit' sx={{flexGrow: .1, mr: '10px'}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Log Out </Button>
              ) : (
                <Button variant='outlined' color='inherit' sx={{flexGrow: .2, mr: '10px'}} onClick={() => loginWithRedirect()}>Log In</Button>
              )
            }
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ flexGrow: .5 ,display: { xs: 'flex', lg: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              fontSize: '30px',
              mr: 2,
              display: { xs: 'flex', lg: 'flex', md: 'flex' },
              flexGrow: 10,
              fontFamily: '-moz-initial',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={Logo} alt="Logo" width='155px' height='55px' style={{marginLeft: '30px' }} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
            <Button color='inherit' component={Link} to='/calender' sx={{ fontSize: '18px', flexGrow: .5 }}>
              Calendar
            </Button>
            <Button color='inherit' component={Link} to='/' sx={{ fontSize: '18px', flexGrow: .5 }}>
             Home
            </Button>
            <Button color='inherit' component={Link} to='/about' sx={{ fontSize: '18px', flexGrow: .5 }}>
              About
            </Button>
            {
              isAuthenticated ? (
                <Button variant='outlined' color='inherit' sx={{flexGrow: .1, mr: '10px'}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> Log Out </Button>
              ) : (
                <Button variant='outlined' color='inherit' sx={{flexGrow: .2, mr: '10px'}} onClick={() => loginWithRedirect()}>Log In</Button>
              )
            }
          </Box>

          <Box sx={{ flexGrow: .3 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            <Stack direction="column">
            <Button component={Link} to='/profile' >Profile</Button>
            <Button >Dashboard</Button>
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
              </Stack>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;