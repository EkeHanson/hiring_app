import React, { useState } from 'react';
import Logo from "../../../assets/Gold Logo Mockup.jpg"
import { Link, useNavigate } from 'react-router-dom';
import { 
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Avatar,
  useTheme,
  useMediaQuery,
  Badge
} from '@mui/material';
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountIcon,
  Dashboard as DashboardIcon,
  ExitToApp as LogoutIcon,
  ListAlt as ListingsIcon,
  PostAdd as PostListingIcon
} from '@mui/icons-material';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  
  // State for mobile menu
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  
  // Mock user data - replace with actual auth state
  const [user, setUser] = useState(null); // Change to your auth state
  
  const isMobileMenuOpen = Boolean(mobileAnchorEl);
  const isProfileMenuOpen = Boolean(profileAnchorEl);

  const handleMobileMenuOpen = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMobileAnchorEl(null);
    setProfileAnchorEl(null);
  };

  const handleLogin = () => {
    navigate('/login');
    handleMenuClose();
  };

  const handleSignup = () => {
    navigate('/signup');
    handleMenuClose();
  };

  const handleLogout = () => {
    // Add your logout logic here
    setUser(null);
    handleMenuClose();
    navigate('/');
  };

  // Mobile menu
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => navigate('/listings')}>
        <ListingsIcon sx={{ mr: 1 }} />
        Browse Listings
      </MenuItem>
      {user && (
        <MenuItem onClick={() => navigate('/dashboard')}>
          <DashboardIcon sx={{ mr: 1 }} />
          Dashboard
        </MenuItem>
      )}
      {user && (
        <MenuItem onClick={() => navigate('/listings/new')}>
          <PostListingIcon sx={{ mr: 1 }} />
          Post a Listing
        </MenuItem>
      )}
      <Divider />
      {!user ? (
        [
          <MenuItem key="login" onClick={handleLogin}>
            <AccountIcon sx={{ mr: 1 }} />
            Login
          </MenuItem>,
          <MenuItem key="signup" onClick={handleSignup}>
            <AccountIcon sx={{ mr: 1 }} />
            Sign Up
          </MenuItem>
        ]
      ) : (
        <MenuItem onClick={handleLogout}>
          <LogoutIcon sx={{ mr: 1 }} />
          Logout
        </MenuItem>
      )}
    </Menu>
  );

  // Profile menu
  const renderProfileMenu = (
    <Menu
      anchorEl={profileAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isProfileMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => navigate('/profile')}>
        <AccountIcon sx={{ mr: 1 }} />
        My Profile
      </MenuItem>
      <MenuItem onClick={() => navigate('/dashboard')}>
        <DashboardIcon sx={{ mr: 1 }} />
        Dashboard
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleLogout}>
        <LogoutIcon sx={{ mr: 1 }} />
        Logout
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar 
      position="sticky"
      elevation={1}
      sx={{ 
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderBottom: `1px solid ${theme.palette.divider}`
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo/Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: theme.palette.primary.main,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Box 
              component="img"
              src={Logo} // Replace with your logo
              alt="Logo"
              sx={{ 
                height: 30,
                mr: 1
              }}
            />
            HireSpot
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', ml: 4 }}>
              <Button
                component={Link}
                to="/listings"
                sx={{ 
                  mx: 1,
                  color: theme.palette.text.primary,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover
                  }
                }}
              >
                Browse
              </Button>
              {user && (
                <Button
                  component={Link}
                  to="/listings/new"
                  sx={{ 
                    mx: 1,
                    color: theme.palette.text.primary,
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover
                    }
                  }}
                >
                  Post Listing
                </Button>
              )}
            </Box>
          )}
        </Box>

        {/* Right side - Search and User */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Search Button */}
          <IconButton 
            size="large"
            color="inherit"
            sx={{ mr: 1 }}
            onClick={() => navigate('/search')}
          >
            <SearchIcon />
          </IconButton>

          {/* Notifications */}
          {user && (
            <IconButton 
              size="large"
              color="inherit"
              sx={{ mr: 1 }}
            >
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Desktop User Menu */}
          {!isMobile && (
            <>
              {user ? (
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls="profile-menu"
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <Avatar 
                    alt={user.name} 
                    src={user.avatar} 
                    sx={{ width: 32, height: 32 }}
                  />
                </IconButton>
              ) : (
                <Box sx={{ display: 'flex' }}>
                  <Button
                    variant="outlined"
                    onClick={handleLogin}
                    sx={{ 
                      mx: 1,
                      color: theme.palette.primary.main,
                      borderColor: theme.palette.primary.main
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleSignup}
                    sx={{ 
                      mx: 1,
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                      '&:hover': {
                        backgroundColor: theme.palette.primary.dark
                      }
                    }}
                  >
                    Sign Up
                  </Button>
                </Box>
              )}
            </>
          )}
        </Box>
      </Toolbar>

      {/* Render the mobile menu */}
      {renderMobileMenu}
      {renderProfileMenu}
    </AppBar>
  );
};

export default Navbar;