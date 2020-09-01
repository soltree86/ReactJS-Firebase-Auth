import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const SignIn = () => {
  return(
    <>
      <AppBar position="static">
          <Toolbar>
              <Typography variant="h6">
                  React Firebase Login Web App
              </Typography>
          </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
          <Typography variant="h4" style={styles.center}>Login</Typography>
          <form>
              <TextField type="text" label="USERNAME" fullWidth margin="normal" name="username" value={this.state.username} />

              <TextField type="password" label="PASSWORD" fullWidth margin="normal" name="password" value={this.state.password} />

              <Button variant="contained" color="secondary">Login</Button>
          </form>
      </Container>
    </>
  )
}

const styles= {
    center :{
        display: 'flex',
        justifyContent: 'center'

    },
    notification: {
        display: 'flex',
        justifyContent: 'center',
        color: '#dc3545'
    }
}

export default SignIn;