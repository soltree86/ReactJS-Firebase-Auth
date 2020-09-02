import React, { useState } from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Redirect } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/utils/theme';

import { UserContext, getUserLocalStorage, setUserLocalStorage } from './Context';

import MainPage from './pages/Main'
import SignInPage from '../src/pages/SignIn'


const App = () => {
  const [user, setUser] = useState(getUserLocalStorage());
  
  const login = (user) => {
    setUserLocalStorage(user);
    setUser(user);
  }

  const logout = () => {
    setUserLocalStorage({});
    setUser(getUserLocalStorage());
  }

  return(
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <UserContext.Provider value={{user, login, logout}}>
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage}>
            {user ? <MainPage /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login" component={SignInPage} />
        </Switch>
      </Router>
    </UserContext.Provider>
    </ThemeProvider>
  )
}

export default App;
