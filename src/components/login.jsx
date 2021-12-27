import React, { Component, Fragment } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Navigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { BASE_URL } from "../App";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Container, Nav, Image} from 'react-bootstrap'
import logo from '../images/lcc_icon.png'


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
            redirect: null
        }
    }
    render() { 
        if (this.state.redirect) {
            return <Navigate to={this.state.redirect} />
        }
        return (
            <Fragment>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Container>
                      <Navbar.Brand href="/home">Decrypto 2k21</Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse className="justify-content-end mx-2" id="basic-navbar-nav">
                        <Nav className="">
                          <Link className="mx-3 nav-link" to="/rules">Rules</Link>
                          <Link className="mx-3 nav-link" to="/leaderboard">Leaderboard</Link>
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                </Navbar>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
                    
                    <div className="login-container d-flex align-items-center justify-content-center" >
                        
                        <form id="login-form-container" className="container border rounded shadow m-2 ">
                            <div class="p-3">
                                <img width={100} src={logo} alt="" />
                            </div>
                            <h3 className="py-3">Login</h3>

                            <div className=" m-2">
                                <div className="formLabel p-1 py-2">
                                    Username or Email
                                </div>
                                <input id="usernname" type="text" className="form-control" placeholder="Username or Email" onChange={event => this.updateEmail(event)} />
                            </div>

                            <div className="m-2">
                                <div className="formLabel p-1 py-2">
                                    Password
                                </div>
                                <input type="password" className="form-control" placeholder="Enter password" onChange={event => this.updatePassword(event)}/>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block m-2" onClick={(event) => this.submit(event)}>Login</button>
                            <p className="forgot-password text-right">
                                Not yet registered?  <Link to="/register">Register</Link>
                            </p>
                        </form>
                </div>
            </Fragment>
        );
    }

    submit = (event) => {
        event.preventDefault()

        let formData = new FormData();
        formData.append('username', this.state.email);
        formData.append('password', this.state.password);

        fetch(BASE_URL + "login/access-token", {
            method: 'POST',
            body: formData
        })
        .then((response) => {
            if(response.status == 400){
                response.json()
                .then(data => toast.error(data.detail))
            }
            else if(response.status == 200){
                response.json()
                .then(data => {
                    localStorage.setItem('access-token', data.access_token)
                    this.getUserDetails()
                    this.setState({redirect: "/question"})
                })
            }
        })
    }

    getUserDetails(){
        fetch(BASE_URL + "users/me", {
            method: 'GET',
            headers: {
                "Authorization": "bearer " + localStorage.getItem('access-token'),
                'accept': 'application/json'
			}
        }).then(response => {
            if(response.status == 200){
                response.json()
                .then(data => {
                    localStorage.setItem('full_name', data.full_name)
                    localStorage.setItem('question_number', data.question_number)
                })
            }
        })
    }

    updateEmail(event){
        this.setState({
            email: event.target.value
        })
    }
    updatePassword(event){
        this.setState({
            password: event.target.value
        })
    }
}
 
export default Login;