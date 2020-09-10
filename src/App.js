import React from 'react';
import './App.css';
import UserListComponent from './components/UserList/UserListComponent';
import RegisterComponent from './components/Register/RegisterComponent';
import LoginComponent from './components/Login/LoginComponent';
import ErrorComponent from './components/Error/ErrorComponent';
import UserDetailsComponent from './components/UserDetails/UserDetailsComponent';
import { Switch, Route } from 'react-router';
import { PrivateRoute } from './helpers/PrivateRoute';

function App() {
  return (
    <main className="container">
      <Switch>
        <PrivateRoute path='/' exact component={UserListComponent}/>
        <Route path='/register' exact component={RegisterComponent}/>
        <Route path='/login' exact component={LoginComponent} />
        <PrivateRoute path='/details/:userId' exact component={UserDetailsComponent} />
        <Route component={ErrorComponent}/>
      </Switch>
    </main>
  );
}

export default App;
