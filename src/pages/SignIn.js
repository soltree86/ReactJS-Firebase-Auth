import React, { useState, useEffect, useContext } from 'react';
import { 
  useHistory,
  useLocation
} from "react-router-dom";
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import { 
  Avatar, 
  Button, 
  Container,
  Grid, 
  Link, 
  TextField, 
  Typography,
  CircularProgress 
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { UserContext } from '../Context';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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
  const { register, handleSubmit, errors } = useForm();

  const { user, login } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    if (user) {
      history.replace(from);
    }
  }, [history, user, from])

  const onSubmit = async data => {
    setLoading(true);
    // NOTE request to api login here instead of this fake promise
    await new Promise(resolve => setTimeout(resolve, 1000));
    login({ email: data.email, password: data.password });
    setLoading(false);
    history.replace(from);
  };
  
  return(
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus 
            disabled={loading}
            inputRef={
              register({ 
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address"
                } 
              })}
            helperText={errors.email ? errors.email.message : ''}
            error={!!errors.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password" 
            disabled={loading}
            inputRef={register({ required: true })}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ''}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            { loading ? <CircularProgress size={24} className={classes.buttonProgress} /> : 'Login' } 
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default SignIn;