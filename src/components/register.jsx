import React, {Fragment } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { Navigate } from "react-router-dom";
import { BASE_URL } from "../App";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import logo from '../images/lcc_icon.png'

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            username: '',
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
                  <Navbar.Brand href="/home">Decrypto 2k23</Navbar.Brand>
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
            <div className="register-container d-flex align-items-center  justify-content-center" >
                <form id="register-form-container" className="container border rounded shadow m-2">
                    <div class="p-3">
                    <img width={100} src={logo} alt="" />
                    </div>
                    <h3>Register</h3>

                    <div className="form-group m-2">
                    <div className="formLabel p-1 py-2">
                                    Name
                                </div>
                        <input type="text" className="form-control" placeholder="Name" onChange={event => this.updateName(event)} />
                    </div>

                    <div className="form-group m-2">
                        <div className="formLabel p-1 py-2">Username</div>
                        <input type="text" className="form-control" placeholder="Username" onChange={event => this.updateUsername(event)} />
                    </div>

                    <div className="form-group m-2">
                        <div className="formLabel p-1 py-2">Email</div>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={event => this.updateEmail(event)} />
                    </div>

                    <div className="form-group m-2">
                        <div className="formLabel p-1 py-2">Password</div>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={event => this.updatePassword(event)} />
                    </div>

                    <button className="btn btn-primary btn-block m-2" onClick={event => this.submit(event)}>Register</button>
                    <p className="forgot-password text-right">
                        Already registered <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
            </Fragment>
        );
    }

    submit = (event) => {
        event.preventDefault();
        const details = {
            "full_name": this.state.name.toString(),
            "email": this.state.email.toString(),
            "username": this.state.username.toString(),
            "password": this.state.password.toString()
        }
        const data = JSON.stringify(details)
        console.log(data);

        fetch( BASE_URL + "users/open", {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => {
            console.log(response)
            let status = response.status
            response.json()
            .then(data => {
                if(status === 400){
                    toast.error(data.detail)
                }
                else if(status === 422){
                    toast.error(data.detail[0].msg)
                }
                else if(status === 200){
                    this.setState({redirect: "/login"})
                }
            })
        });
          
    }

    updateName(event){
        this.setState({
            name: event.target.value
        })
    }
    updateUsername(event){
        this.setState({
            username: event.target.value
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
 
export default Register;
