import React from 'react';
import './App.css';
import UserListComponent from './components/UserListComponent';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <main className="container">
      <Switch>
        <Route path='/' component={UserListComponent}/>
      </Switch>
    </main>
  );
}

export default App;
