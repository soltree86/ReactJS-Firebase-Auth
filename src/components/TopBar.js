import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { 
  AppBar, 
  Toolbar,
  Button,
} from '@material-ui/core';
import { 
  ExitToApp as ExitToAppIcon
} from '@material-ui/icons';

import logo from '../logo.svg';

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

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <div className={classes.sectionMobile}>
          <img src={logo} alt="logo" className={classes.logo} />
        </div>
        <div className={classes.grow} />
        <Button
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