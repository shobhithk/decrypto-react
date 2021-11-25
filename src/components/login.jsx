import React, { Component, Fragment } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
        }
    }
    render() { 
        return (
            <Fragment>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
                    <div className="login-container d-flex align-items-center" >
                    <form id="login-form-container" className="container border rounded">
                        <h3>Login</h3>

                        <div className="form-group m-2">
                            <label>Username</label>
                            <input type="text" className="form-control" placeholder="Username" onChange={event => this.updateEmail(event)} />
                        </div>

                        <div className="form-group m-2">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" onChange={event => this.updatePassword(event)}/>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block m-2" onClick={(event) => this.submit(event)}>Login</button>
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

        fetch("", {
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
                .then(data => console.log(data.access_token))
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