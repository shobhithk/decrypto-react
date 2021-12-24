import React, { Component, Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Container, Nav, Image} from 'react-bootstrap';
import { Link } from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Navbar bg="dark" expand="lg" variant="dark">
                    <Container>
                      <Navbar.Brand href="#home">Decrypto 2k21</Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse className="justify-content-end mx-2" id="basic-navbar-nav">
                        <Nav className="">
                          <Link className="mx-3 nav-link" to="/rules">Rules</Link>
                          <Link className="mx-3 nav-link disabled" to="/leaderboard">Leaderboard <i class="bi bi-lock-fill"></i></Link>
                          <Link className="mx-3 nav-link disabled" to="">Logout <i class="bi bi-lock-fill"></i></Link>
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                </Navbar>
                <h1 className="display-1 text-white my-4">Decrypto 2k21</h1>
                <div>
                    <img src="https://picsum.photos/300" alt="" />
                </div>
                
                <Link className="container btn btn-dark m-4 w-75 p-2" to="/login">Login</Link>
                <Link className="container btn btn-dark m-4 w-75 p-2" to="/register">Register</Link>
                <div class="row equal">
                    
                    <div class="col-sm-6 d-flex p-4">
                        <div class="card bg-dark text-white">
                            <div class="card-block">
                                <h3 class="card-header">How to play?</h3>
                                <p class="card-text p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime obcaecati aliquam totam possimus maiores provident, illo minus facilis explicabo libero veniam tempora officiis ullam pariatur recusandae odio eos suscipit! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio voluptate voluptatem facilis iusto itaque laudantium enim animi laboriosam quidem totam. Error a repellat animi, doloribus aut eaque natus odio in?</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 d-flex p-4">
                        <div class="card bg-dark text-white">
                            <div class="card-block">
                                <h3 class="card-header">About LCC-JSSSTU</h3>
                                <p class="card-text p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maxime obcaecati aliquam totam possimus maiores provident, illo minus facilis explicabo libero veniam tempora officiis ullam pariatur recusandae odio eos suscipit! </p>
                            </div>
                        </div>
                    </div>
                    
                </div>




                <footer class="bg-dark">
                     <div class="container py-1">
                         <div class="row py-3">
                             <div class="col-lg-6 col-md-6 mb-4 mb-lg-0">
                                 <h6 class="text-uppercase font-weight-bold mb-4 text-white">Contact</h6>
                                 <ul class="list-unstyled mb-0">
                                     <li class="">
                                         <label htmlFor="" className="text-muted mx-3">Placeholder :</label>
                                         <a href="tel:#" class="text-muted ">9999988888</a>
                                     </li>
                                     <li class="">
                                         <label htmlFor="" className="text-muted mx-3">Placeholder :</label>
                                         <a href="tel:#" class="text-muted ">9999988888</a>
                                     </li>
                                 </ul>
                             </div>

                             <div class="col-lg-6 col-md-6 mb-4 mb-lg-0">
                                 <h6 class="text-uppercase font-weight-bold mb-4 text-white">Developed by</h6>
                                 <ul class="list-unstyled mb-0">
                                     <li class="">
                                         <div className="text-muted">AAAAAA</div>
                                     </li>
                                     <li class="">
                                         <div className="text-muted">AAAAAA</div>
                                     </li>
                                 </ul>
                             </div>
                         </div>
                         <hr />
                         
                     </div>
                     <div class="bg-dark pb-2">
                        <div class="container text-center">
                            <p class="text-muted mb-0 py-2">Copyright © LCC-JSSSTU 2021</p>
                        </div>
                    </div>
                     
                 </footer>
            </div>
        );
    }
}
 
export default Home;