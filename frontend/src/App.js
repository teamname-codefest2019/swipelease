import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {} from 'react-bootstrap';

function App() {

  var authStatus;

  return (
    <Router>
      <div>
        <Route path="/login"
               component={Login} 
               render={(props) => <Dashboard {...props} isAuthed={authStatus}/>}
        />
        <Route path="/register"
               component={Register} 
               render={(props) => <Dashboard {...props}/>}
        />
        <Route path="/home"
               component={Homepage} 
               render={(props) => <Dashboard {...props} isAuthed={authStatus}/>}
        />
        <Route path="/user" // example URL: .../user?id=200193454
               component={Profile} 
               render={(props) => <Dashboard {...props} isAuthed={authStatus}/>}
        />
      </div>
    </Router>
  );
}

function Login(isAuthed) {

  if (isAuthed) {
    this.props.router.push('/home')
  }

  return (
    <div id="login"></div>
  );
}

function Homepage() {
  return (
    <div id="homepage"></div>
  );
}

function Profile() {
 return (
  <div id="profile"></div>
 );
}

export default App;
