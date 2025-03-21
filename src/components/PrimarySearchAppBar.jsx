import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, MenuItem, Select, InputLabel, FormControl, MenuItem as MuiMenuItem } from '@mui/material';
import { Menu as MenuIcon, ShoppingCart, AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const PrimarySearchAppBar = ({ isAuthenticated, onSignOut }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const open = Boolean(anchorEl);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen); // Toggle the sidebar open/close on icon click
  };

  const handleMouseEnterSidebar = () => {
    setSidebarOpen(true); // Open sidebar when mouse enters
  };

  const handleMouseLeaveSidebar = () => {
    setSidebarOpen(false); // Close sidebar when mouse leaves
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#2c3e50',
        height: '90px',
        justifyContent: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 1100,
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Menu Icon */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleSidebarToggle} // Toggle sidebar on click
          sx={{
            marginRight: '20px',
            transition: 'transform 0.3s ease', // Add transition for smooth hover effect
            transform: sidebarOpen ? 'rotate(90deg)' : 'rotate(0deg)', // Rotate on sidebar open
          }}
        >
          <MenuIcon sx={{ fontSize: '36px' }} />
        </IconButton>

        {/* Sidebar (Drawer) */}
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0,
            width: '250px',
            backgroundColor: '#34495e',
            color: 'white',
            paddingTop: '20px',
            transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease-out', // Add transition for smooth sliding
            zIndex: 1099,
            overflowY: 'auto', // Prevents content from overflowing
          }}
          onMouseEnter={handleMouseEnterSidebar} // Open sidebar on mouse enter
          onMouseLeave={handleMouseLeaveSidebar} // Close sidebar on mouse leave
        >
          <MenuItem onClick={() => handleNavigation('/')}>{t('Home')}</MenuItem>
          <MenuItem onClick={() => handleNavigation('/products')}>{t('Products')}</MenuItem>
          <MenuItem onClick={() => handleNavigation('/customers')}>{t('Customers')}</MenuItem>
          <MenuItem onClick={() => handleNavigation('/orders')}>{t('Orders')}</MenuItem>
          {isAuthenticated && (
            <MenuItem onClick={onSignOut} sx={{ color: '#e74c3c', fontWeight: 'bold' }}>
              {t('signOut')}
            </MenuItem>
          )}
        </div>

        {/* Clickable Logo to Go to Profile */}
        <Typography
          variant="h4"
          onClick={() => navigate('/profile')}
          sx={{
            flexGrow: 1,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#ecf0f1',
            cursor: 'pointer',
            '&:hover': { color: '#1abc9c' },
          }}
        >
          Agribzar
        </Typography>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Language Selector */}
          <FormControl sx={{ minWidth: 120, marginRight: '20px' }}>
            <InputLabel id="language-select-label" sx={{ color: 'white' }}>
              {t('language')}
            </InputLabel>
            <Select
              labelId="language-select-label"
              value={i18n.language}
              onChange={handleLanguageChange}
              label={t('language')}
              sx={{
                color: 'white', // Text color
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white', // Border color
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#1abc9c', // Border color on hover
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#1abc9c', // Border color when focused
                },
              }}
            >
              <MuiMenuItem value="en">{t('English')}</MuiMenuItem>
              <MuiMenuItem value="te">{t('Telugu')}</MuiMenuItem>
              <MuiMenuItem value="hi">{t('Hindi')}</MuiMenuItem>
            </Select>
          </FormControl>

          {/* Authentication Buttons */}
          {!isAuthenticated ? (
            <>
              <Button
                variant="outlined"
                onClick={() => navigate('/signin')}
                sx={{
                  marginRight: '10px',
                  color: '#1abc9c',
                  borderColor: '#1abc9c',
                  '&:hover': {
                    backgroundColor: '#16a085',
                    color: '#fff',
                  },
                }}
              >
                {t('signIn')}
              </Button>
              <Button
                variant="contained"
                onClick={() => navigate('/signup')}
                sx={{
                  backgroundColor: '#3498db',
                  '&:hover': { backgroundColor: '#2980b9' },
                  color: '#fff',
                }}
              >
                {t('signUp')}
              </Button>
            </>
          ) : (
            <>
              <IconButton
                color="inherit"
                onClick={() => navigate('/cart')}
                sx={{
                  backgroundColor: '#16a085',
                  '&:hover': { backgroundColor: '#1abc9c' },
                  color: '#fff',
                  borderRadius: '8px',
                  marginRight: '10px',
                }}
              >
                <ShoppingCart sx={{ fontSize: '30px' }} />
              </IconButton>
              <IconButton
                color="inherit"
                onClick={() => navigate('/profile')}
                sx={{
                  backgroundColor: '#2980b9',
                  '&:hover': { backgroundColor: '#3498db' },
                  color: '#fff',
                  borderRadius: '8px',
                }}
              >
                <AccountCircle sx={{ fontSize: '30px' }} />
              </IconButton>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default PrimarySearchAppBar;
