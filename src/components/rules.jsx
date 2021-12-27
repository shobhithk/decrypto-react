import React, {Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Container, Nav, Image} from 'react-bootstrap'
class Rules extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
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
            </Fragment>
        );
    }
}
 
export default Rules;