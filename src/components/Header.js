import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import useUserStore from '../stores/userStore';
import { Divider, List, ListItem, ListItemText, MenuList, Paper } from '@mui/material';
import { purple } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import Brightness7RoundedIcon from '@mui/icons-material/Brightness7Rounded';
import Brightness4RoundedIcon from '@mui/icons-material/Brightness4Rounded';
import { useTheme } from '@mui/system';

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

export default function Header() {
  const { logout, enableTimeout, isDarkTheme, toggleTheme } = useUserStore()
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [bellAnchorEl, setBellAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isBellMenuOpen = Boolean(bellAnchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleBellMenuOpen = (event) => {
    setBellAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleBellMenuClose = () => {
    setBellAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };



  const menuId = 'primary-search-account-menu';
  const bellMenuId = 'primary-search-bell-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={enableTimeout}>Timeout</MenuItem>
      <MenuItem onClick={logout}>Log out</MenuItem>
    </Menu>
  );

  const renderBellMenu = (
    <Menu
      sx={{ maxWidth: '20rem' }}
      anchorEl={bellAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      id={bellMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={isBellMenuOpen}
      onClose={handleBellMenuClose}
    >
      <MenuList dense>

        <MenuItem >
          <ListItemText >Security configuration changes applied</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText >Custom fixlet executed on Nebula23</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText >License violation detected on ...</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText >Restart postponed on AstroBookPro19</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to="/notifications" onClick={handleBellMenuClose}>
          <ListItemText sx={{ color: theme.palette.secondary.main }}>See all notifications</ListItemText>
        </MenuItem>
      </MenuList>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={toggleTheme}>
        <IconButton
          size="large"
          aria-label="dark theme"
          color="inherit"
        >
          {isDarkTheme ? <Brightness7RoundedIcon /> : <Brightness4RoundedIcon />}
        </IconButton>
        <p>Switch theme</p>
      </MenuItem>
      <MenuItem onClick={handleBellMenuOpen}>
        <IconButton
          size="large"
          aria-label="show 13 new notifications"
          color="inherit"
        >
          <Badge badgeContent={13} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, height: "100%", color: theme.palette.text.primary, ...(!isDarkTheme && { background: theme.palette.background.default }) }} >
      <AppBar position="static" color="transparent" sx={{ ...!isDarkTheme && { borderBottom: '1px solid lightgray' } }} >
        <Toolbar>
          <Typography
            color='text.primary'
            variant="body1"
            fontWeight={700}
            noWrap
            component="div"
            sx={{ fontSize: "28px", display: { xs: 'none', sm: 'block' } }}
          >
            BigFix Console
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
            <IconButton
              size="large"
              aria-label="dark theme"
              color="inherit"
              onClick={toggleTheme}
            >
              {isDarkTheme ? <Brightness7RoundedIcon /> : <Brightness4RoundedIcon />}
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleBellMenuOpen}
            >
              <Badge badgeContent={13} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle fontSize='large' />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreVertIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderBellMenu}
    </Box>
  );
}
