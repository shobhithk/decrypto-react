import React, { Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
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
                      <Navbar.Brand href="/home">Decrypto 2k22</Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse className="justify-content-end mx-2" id="basic-navbar-nav">
                        <Nav className="">
                          <Link className="mx-3 nav-link" to="/rules">Rules</Link>
                          <Link className="mx-3 nav-link" to="/leaderboard">Leaderboard</Link>
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                </Navbar>
                <h1 className="display-1 my-4">Decrypto 2k22</h1>
                <div>
                    <img src="https://picsum.photos/300" alt="" />
                </div>
                
                <Link className="container btn btn-dark m-4 w-75 p-2" to="/login">Login</Link>
                <Link className="container btn btn-dark m-4 w-75 p-2" to="/register">Register</Link>
                <div class="row equal justify-content-between align-items-center">
                    
                    <div class="col-sm-6 d-flex p-4 justify-content-center">
                        <div class="card bg-dark text-white">
                            <div class="card-block">
                                <h3 class="card-header">How to play?</h3>
                                <p class="card-text p-3">Find the relation between the images and answer</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 d-flex p-4 justify-content-center">
                        <div class="card bg-dark text-white">
                            <div class="card-block">
                                <h3 class="card-header">About LCC-JSSSTU</h3>
                                <p class="card-text p-3">Linux Campus Club is the final destination for young enthusiastic minds who want to Congregate, Create and Contribute. Linux Campus Club, The only Technical Club under the department of Computer Science is a community that fosters learning new technologies from scratch and help you contribute to the open source community with that learning.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>




                <footer class="bg-dark">
                     <div class="container py-1">
                         <div class="row py-3">
                             <div class="col-lg-6 col-md-6 mb-4 mb-lg-0">
                                 <h6 class="text-uppercase font-weight-bold mb-4 text-white">Contact Us</h6>
                                 <ul class="list-unstyled mb-0">
                                     <li class="">
                                         <a href="https://www.instagram.com/linuxcampusclub/" class="text-muted ">Instagram</a>
                                     </li>
                                     <li class="">
                                         <a href="https://discord.gg/xJakYxv5" class="text-muted ">Discord server</a>
                                     </li>
                                 </ul>
                             </div>

                             <div class="col-lg-6 col-md-6 mb-1 mb-lg-0"><h6 class="text-uppercase font-weight-bold mb-4 text-white">Developed by</h6><ul class="list-unstyled mb-0"><li class=""><a href="https://www.instagram.com/varun.1311/" class="text-muted">Varun kumar</a></li><li class=""><a href="https://www.instagram.com/abhay_20___/" class="text-muted">Abhay Chandir</a></li><li class=""><a href="https://github.com/SanchithHegde/" class="text-muted">Sanchith Hegde</a></li></ul></div>
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