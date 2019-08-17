import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function App() {

  var authStatus;

  return (
    <Router>
      <div>
        <Route path="/login"
               component={Login} 
        />
        <Route path="/register"
               component={Register} 
        />
        <Route path="/home"
               component={Homepage} 
        />
        <Route path="/user" // example URL: .../user?id=200193454
               component={Profile} 
        />
      </div>
    </Router>
  );
}

function Login(isAuthed) {

  // if (isAuthed) {
  //   this.props.router.push('/home')
  // }

  return (
    <div id="login">
      <p>The login page</p>
    </div>
  );
}

function Register() {
  return (
    <div id="register">
      <p>The register page</p>
    </div>
  )
}

function Homepage() {
  return (
    <div id="homepage">
      <body>
      <center>
        <h1>Servable</h1>
        <img src = "codefest.jpg" alt="Team" width="500" height="600"/>
      <p >Homepage stuffs here howdy</p>
      </center>
      </body>
    </div>
  )
}

function Profile() {
 return (
  <div id="profile"></div>
 )
}
export default App;