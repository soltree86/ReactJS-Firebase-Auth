import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TopBar from '../components/TopBar';

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

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <TopBar />
    </div>
  )
}

export default Main;