import React, {Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Container, Nav} from 'react-bootstrap'
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
            <div>
            <ol class="m-4 list-group list-group-flush list-group-numbered"><li class="list-group-item">Every level has a set of images and/text</li><li class="list-group-item">You are free to use anything from your brains to Google to solve questions</li><li class="list-group-item">Type in your answer in the box provided. Answers contain only small letters and numbers. <strong>No space to separate words.</strong> </li><li class="list-group-item">Don't use any special characters/symbols in the answer(just skip them if they are part of answer)</li><li class="list-group-item">In case of a tie, the person who has submitted first will be on top</li></ol>
            </div>
            </Fragment>
        );
    }
}
 
export default Rules;