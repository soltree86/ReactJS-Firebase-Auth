import React from 'react';
import { Switch, Route, Router } from 'react-router-dom'
import MainPage from '../src/components/Main'
import SignInPage from '../src/components/SignIn'


const App = () => {
  return(
    <Router>
      <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/login" component={SignInPage} />
      </Switch>
    </Router>
  )
}

export default App;
