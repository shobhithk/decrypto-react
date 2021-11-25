import React, { Component } from "react";
import $, { timers } from 'jquery';
import { Link } from "react-router-dom";

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name : '',
            email : '',
            password : '',
        }
    }
    
    render() {
        return (
            <div className="register-container d-flex align-items-center" >
                <form id="register-form-container" className="container border rounded">
                    <h3>Register</h3>

                    <div className="form-group m-2">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Name" onChange={event => this.updateName(event)} />
                    </div>

                    <div className="form-group m-2">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={event => this.updateEmail(event)} />
                    </div>

                    <div className="form-group m-2">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={event => this.updatePassword(event)} />
                    </div>

                    <button className="btn btn-primary btn-block m-2" onClick={event => this.submit(event)}>Register</button>
                    <p className="forgot-password text-right">
                        Already registered <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        );
    }

    submit = (event) => {
        event.preventDefault();
        const details = {
            "full_name": this.state.name.toString(),
            "email": this.state.email.toString(),
            "password": this.state.password.toString()
        }
        const data = JSON.stringify(details)
        console.log(data);

        fetch("http://152.67.25.103/api/users/open", {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => console.log(response))
        .then(data => console.log(data));
          
    }

    updateName(event){
        this.setState({
            name: event.target.value
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