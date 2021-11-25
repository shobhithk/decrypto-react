import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Container, Nav, Image} from 'react-bootstrap'

class Main extends React.Component {
    render() { 
        return (
            <div>
                <Navbar bg="dark" expand="lg" variant="dark">
                  <Container>
                    <Navbar.Brand href="#home">Decrypto</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end mx-2" id="basic-navbar-nav">
                      <Nav className="">
                        <Nav.Link className="mx-3" href="">Rules</Nav.Link>
                        <Nav.Link className="mx-3" href="">Leaderboard</Nav.Link>
                        <Nav.Link className="mx-3" href="">Logout</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>

                
            </div>

            
        );
    }
}
 
export default Main;