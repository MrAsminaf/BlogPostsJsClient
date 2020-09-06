import React from 'react';
import './App.css';
import UserListComponent from './components/UserList/UserListComponent';
import RegisterComponent from './components/Register/RegisterComponent';
import ErrorComponent from './components/Error/ErrorComponent';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <main className="container">
      <Switch>
        <Route path='/' exact component={UserListComponent}/>
        <Route path='/register' exact component={RegisterComponent}/>
        <Route component={ErrorComponent}/>
      </Switch>
    </main>
  );
}

export default App;
