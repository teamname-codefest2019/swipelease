import React from 'react';
import ReactDOM from 'react-dom';
import reactSwipe from 'react-swipe';
import logo from './logo.svg';
import './App.css';

//import './slide.js'

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
  let reactSwipeEl;
  return (
    <div id="homepage">
      <body>
        <h1>Servable</h1>
      <div class="slideshow-container">

        <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img src="codefest.jpg" alt="image1" style={{width: "100%", display: "block"}} />
          <div class="text">Caption Text</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img src="swipe.jpg" alt="image1" style={{width: "100%", display: "block"}} />
          <div class="text">Caption Text</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">1 / 3</div>
          <img src="swipe2.jpg" alt="image1" style={{width: "100%", display: "block"}} />
          <div class="text">Caption Text</div>
      </div>


        <a class="prev" onclick={() => reactSwipeEl.next()}>&#10094;</a>
        <a class="next" onclick={() => reactSwipeEl.prev()}>&#10095;</a>
      </div>
      
    </body>
    </div>
  );
}

function Profile() {
 return (
  <div id="profile"></div>
 )
}


export default App;