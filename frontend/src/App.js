// import React from 'react';
import React, { Component } from 'react';
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

        <Route path="/leaderboard" 
               component={Leaderboard} 
              
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

function Register() {
  return (
    <div id="register"></div>
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

function Leaderboard() {
  return (
   <div id="leaderboard">
    
    <Table />
  
   </div>
  );
 }
class Table extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
        users: [
           { id: 1, name: 'Wasif', rating: 5.0, email: 'wasif@email.com' },
           { id: 2, name: 'Ali', rating: 4.9, email: 'ali@email.com' },
           { id: 3, name: 'Saad', rating: 4.6, email: 'saad@email.com' },
           { id: 4, name: 'Asad', rating: 4.0, email: 'asad@email.com' }
        ]
     }
  }

  renderTableHeader() {
     let header = Object.keys(this.state.users[0])
     return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
     })
  }

  renderTableData() {
     return this.state.users.map((users, index) => {
        const { id, name, rating, email } = users //destructuring
        return (
           <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{rating}</td>
              <td>{email}</td>
           </tr>
        )
     })
  }

  render() {
     return (
        <div>
           <h1 id='title'>Leaderboard</h1>
           <table id='users'>
              <tbody>
                 <tr>{this.renderTableHeader()}</tr>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
  }
}
export default App;
