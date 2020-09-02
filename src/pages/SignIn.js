import React, { useState, useEffect, useContext } from 'react';
import { 
  useHistory,
  useLocation
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import { Container, TextField, Button, Typography, CircularProgress } from '@material-ui/core';

import { UserContext } from '../Context';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  buttonProgress: {
    color: theme.palette.secondary.main,
    margin: '0 auto',
    display: 'block'
  },
}));

const SignIn = () => {
  const classes = useStyles();
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const { user, login } = useContext(UserContext);
  const { username, setUserName } = useState('');
  const { password, setPassword } = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    if (user) {
      history.replace(from);
    }
  }, [history, user, from])

  const onSubmit = async data => {
    setLoading(true);
    // NOTE request to api login here instead of this fake promise
    await new Promise(resolve => setTimeout(resolve, 3000));
    login({ user: { username: username, password: password } });
    setLoading(false);
    history.replace(from);
  };
  
  return(
    <>
      <Container maxWidth="sm">
          <Typography variant="h4">Login</Typography>
          <form className={classes.root} noValidate>
              <TextField 
                type="text" 
                label="USERNAME" 
                variant="outlined"
                margin="normal" 
                disabled={loading} 
                name="username" 
                value={username} 
              />

              <TextField 
                type="password" 
                label="PASSWORD" 
                variant="outlined" 
                fullWidth 
                margin="normal" 
                disabled={loading} 
                name="password" 
                value={password} 
              />

              <Button variant="contained"
                color="secondary" 
                disabled={loading}>
                { loading ? <CircularProgress size={24} className={classes.buttonProgress} /> : 'Login' } 
              </Button>
          </form>
      </Container>
    </>
  )
}

export default SignIn;