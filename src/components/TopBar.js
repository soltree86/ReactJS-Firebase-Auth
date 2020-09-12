import React,{ useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { 
  AppBar, 
  Toolbar,
  Button,
} from '@material-ui/core';
import { 
  ExitToApp as ExitToAppIcon,
  AccountCircle as AccountCircleIcon
} from '@material-ui/icons';
import logo from '../logo.svg';

import { UserContext } from '../Context';


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  logo :{
    height: '2rem',
    pointerEvents: 'none',
    color: theme.palette.primary,
    paddingRight: '1rem'
  },
}));

const TopBar = () => {
  const classes = useStyles();
  const { user, logout } = useContext(UserContext);

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <div className={classes.sectionMobile}>
          <img src={logo} alt="logo" className={classes.logo} />
        </div>
        <div className={classes.grow} />
        <AccountCircleIcon />
        { user.email }
        <Button
          onClick={logout}
          aria-label="log out current user"
          aria-controls="primary-toolbar-logout"
          color="inherit"
        >
          <ExitToAppIcon />
          SIGN OUT
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar;