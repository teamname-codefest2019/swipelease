import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {

  var authStatus;

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route path="/login"
               component={Login} 
               render={(props) => <Dashboard {...props} isAuthed={authStatus}/>}
        />
        <Route path="/home"
               component={Homepage} 
               render={(props) => <Dashboard {...props} isAuthed={authStatus}/>}
        />
        <Route path="/user" // example URL: .../user?id=200193454
               component={Profile} 
               render={(props) => <Dashboard {...props} isAuthed={true}/>}
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
