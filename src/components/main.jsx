import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Container, Nav, Image} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import { data } from "jquery";

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      image_url: '',
      answer: ''
    }
  }
	componentDidMount(){
		this.fetchQuestion()
	}
	fetchQuestion() {
		fetch("http://152.67.25.103/api/users/question", {
			method: 'GET',
			headers: {
				"Authorization": "bearer " + localStorage.getItem('access-token'),
				'accept': 'application/json'
			}
		}).then(response => response.json())
		.then(data => {
      let image_url = data.content
      let content_type = data.content_type
      this.setState({
        image_url: 'data:' + content_type + ";base64," + image_url
      })
    })
	}
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
              <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
              <div>
                <img width="60%" src={this.state.image_url} alt="question image" />
                <br />
                <input type="text" placeholder="Answer" onChange={event => this.updateAnswer(event)} />
                <button onClick={(event) => this.submitAnswer(event)} >Submit</button>
              </div>
              
          </div>
          
      );
  }
  submitAnswer = (event) => {
    event.preventDefault()

    let answer = {
      "answer": this.state.answer
    }
    let data = JSON.stringify(answer)
    console.log(data)

    fetch("http://152.67.25.103/api/users/answer", {
			method: 'POST',
			headers: {
				"Authorization": "bearer " + localStorage.getItem('access-token'),
				'Content-Type': 'application/json',
			},
      body: data
		}).then(response => {
      if(response.status == 400){
        response.json()
        .then(data => toast.error(data.detail))
      }
      else if(response.status == 200){
        response.json()
        .then(data => {
          toast("Correct answer");
          this.fetchQuestion()
        })
      }
    })
    .then(data => console.log(data))

    
  }
  updateAnswer(event) {
    this.setState({
      answer: event.target.value
    })
  }
}
 
export default Main;