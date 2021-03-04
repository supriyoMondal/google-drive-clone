import React from 'react';
import Signup from './Authentication/Signup';
import { AuthProvider } from '../context/AuthContent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Authentication/Login';
import PrivateRoute from './Authentication/PrivateRoute';
import ForgotPassword from './Authentication/ForgotPassword';
import UpdateProfile from './Authentication/UpdateProfile';
import Profile from './Authentication/Profile';
import Dashboard from './google-drive/Dashboard';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Drive */}
          <PrivateRoute exact path='/' component={Dashboard} />
          <PrivateRoute exact path='/folder/:folderId' component={Dashboard} />
          {/* Profile */}
          <PrivateRoute path='/user' component={Profile} />
          <PrivateRoute path='/update-profile' component={UpdateProfile} />
          {/* Auth */}
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/forgot-password' component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
