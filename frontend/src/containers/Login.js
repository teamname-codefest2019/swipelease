import React, { Component } from 'react';

import { Button, Form, Jumbotron, Container } from 'react-bootstrap';
import { Redirect } from 'react-router'
import Axios from 'axios';
import './Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            username: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        Axios.post("https://servable1.herokuapp.com/api/auth/login", this.state).then(res => {
            console.log(res);
            this.setState({
                ...this.state,
                loggedIn: true,
                password: ""
            });
        }).catch(err => {
            console.log(err);
        });

        if (this.state.loggedIn) {
            this.props.history.push('/home');
        }
    }

    render() {
        return (
            <div id="Login" className="loginform">
                <Jumbotron>
                    <Container>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="username" size="lg">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="password" size="lg">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    type="password"
                                />
                            </Form.Group>
                            <Button variant="primary" 
                                    size="lg" 
                                    disabled={!this.validateForm()} 
                                    type="submit">
                                Login
                            </Button>
                        </Form>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}