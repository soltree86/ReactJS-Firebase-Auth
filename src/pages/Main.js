import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
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
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <TopBar />
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          ReactJS Firebase Login
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Quickly build an effective login webapp for your potential customers.
          It&apos;s built with ReactJS, Firebase, React Hook Form, Material-UI.
        </Typography>
      </Container>
    </div>
  )
}

export default Main;