import React from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

function SideNav() {
    const location = useLocation();
  return (
    <List sx={{
      backdropFilter: 'blur(1px)',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRight: '1px solid rgba(255, 255, 255, 0.3)',
      height: '98%'
    }}>
      <ListItemButton component={Link} to="/" selected={location.pathname === '/'}>
      <ListItemIcon sx={{ minWidth: 'unset', marginRight: '10px' }} >
          <HomeRoundedIcon  color='secondary' />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton component={Link} to="/dashboard" selected={location.pathname === '/dashboard'}>
      <ListItemIcon sx={{ minWidth: 'unset', marginRight: '10px' }}>
          <DashboardRoundedIcon color='secondary' />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton component={Link} to="/settings" selected={location.pathname === '/settings'} icon>
        <ListItemIcon sx={{ minWidth: 'unset', marginRight: '10px' }}>
          <SettingsSuggestRoundedIcon color='secondary' />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
    </List>
  );
}

export default SideNav;
