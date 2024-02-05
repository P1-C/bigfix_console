import React from 'react';
import { Divider, List, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import TaskIcon from '@mui/icons-material/Task';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';


function SideNav() {
  const location = useLocation();
  const [contextMenuAnchor, setContextMenuAnchor] = React.useState(null);
  const [ctxMenuType, setCtxMenuType] = React.useState(null);

  const handleContextMenu = (event, type) => {
    event.preventDefault();
    setCtxMenuType(type)
    setContextMenuAnchor(event.currentTarget);
  };

  const handleCloseContextMenu = () => {
    setContextMenuAnchor(null);
    setCtxMenuType(null)
  };

  return (
    <>
      <List sx={{
        backdropFilter: 'blur(1px)',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRight: '2px solid rgba(255, 255, 255, 0.3)',
        height: '98%'
      }}
      onContextMenu={(event)=>{event.preventDefault()}}>
        <ListItemButton component={Link} to="/" selected={location.pathname === '/'}>
          <ListItemIcon sx={{ minWidth: 'unset', marginRight: '10px' }} >
            <HomeRoundedIcon color='secondary' />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton component={Link} to="/dashboard" selected={location.pathname === '/dashboard'} >
          <ListItemIcon sx={{ minWidth: 'unset', marginRight: '10px' }}>
            <DashboardRoundedIcon color='secondary' />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton component={Link} to="/fixlets" selected={location.pathname === '/fixlets'} onContextMenu={(e) => handleContextMenu(e, 'fixlets')}>
          <ListItemIcon sx={{ minWidth: 'unset', marginRight: '10px' }}>
            <TaskIcon color='secondary' />
          </ListItemIcon>
          <ListItemText primary="Fixlets" />
        </ListItemButton>
        <ListItemButton component={Link} to="/baselines" selected={location.pathname === '/baselines'} onContextMenu={(e) => handleContextMenu(e, 'baselines')}>
          <ListItemIcon sx={{ minWidth: 'unset', marginRight: '10px' }}>
            <AutoAwesomeRoundedIcon color='secondary' />
          </ListItemIcon>
          <ListItemText primary="Baselines" />
        </ListItemButton>
        <ListItemButton component={Link} to="/actions" selected={location.pathname === '/actions'} icon>
          <ListItemIcon sx={{ minWidth: 'unset', marginRight: '10px' }}>
            <TouchAppIcon color='secondary' />
          </ListItemIcon>
          <ListItemText primary="Actions" />
        </ListItemButton>
        <ListItemButton component={Link} to="/settings" selected={location.pathname === '/settings'} icon>
          <ListItemIcon sx={{ minWidth: 'unset', marginRight: '10px' }}>
            <SettingsSuggestRoundedIcon color='secondary' />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
      </List>
      <Menu
        elevation={8}
        anchorEl={contextMenuAnchor}
        open={Boolean(contextMenuAnchor)}
        onClose={handleCloseContextMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuItem dense component={Link} to={`/${ctxMenuType}`} onClick={handleCloseContextMenu}>Open all {ctxMenuType}</MenuItem>
        {ctxMenuType === 'fixlets' &&
          (<>
            <MenuItem dense component={Link} to={`/fixlets`} onClick={handleCloseContextMenu}>Only fixlets</MenuItem>
            <MenuItem dense component={Link} to={`/fixlets`} onClick={handleCloseContextMenu}>Only tasks</MenuItem>
          </>)}
        <MenuItem dense component={Link} to={ctxMenuType === 'baselines' ?`/create-${ctxMenuType}` : `/${ctxMenuType}`} onClick={handleCloseContextMenu}>Create {ctxMenuType}</MenuItem>
        <Divider  />
        <MenuItem dense onClick={handleCloseContextMenu} >more options ...</MenuItem>
      </Menu>
    </>
  );
}

export default SideNav;
