import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Container, Nav, Image} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { data } from "jquery";

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      image_url: '',
      answer: '',
      all_answered: false
    }
  }
	componentDidMount(){
    toast("Welcome " + localStorage.getItem('full_name'))
		this.fetchQuestion()
	}
	fetchQuestion() {
		fetch("http://152.67.25.103/api/users/question", {
			method: 'GET',
			headers: {
				"Authorization": "bearer " + localStorage.getItem('access-token'),
				'accept': 'application/json'
			}
		}).then(response => {
      console.log(response)
      if(response.redirected == true){
        this.setState({all_answered: true})
        return
      }
      response.json()
      .then(data => {
        console.log(data)
        let image_url = data.content
        let content_type = data.content_type
        this.setState({
          image_url: 'data:' + content_type + ";base64," + image_url
        })
      })
    })
		
	}
  render() {
    if(this.state.all_answered){
      return (
        <div>
          {this.renderNavbar()}
          <div>
            Congratulations
          </div>
        </div>
      )
    }
      return (
          <div>
              {this.renderNavbar()}
              <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
              <div className="container d-flex flex-column p-4" style={{height: "90vh"}}> 
                <div className="d-inline-block" style={{height: "85%"}}>
                <Image className="h-100" src={this.state.image_url} fluid />
                  {/* <img className="mx-auto" height="100%" src={this.state.image_url} alt="question image" /> */}
                </div>
                <div className="input-group my-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Answer</span>
                  </div>
                  <input type="text " className="form-control" aria-label="Sizing example input" onChange={event => this.updateAnswer(event)} aria-describedby="inputGroup-sizing-default"/>
                </div>
                <button type="button" className="btn btn-dark" onClick={(event) => this.submitAnswer(event)} >Submit</button>
              </div>
              
          </div>
          
      );
  }
  renderNavbar(){
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                  <Navbar.Brand href="#home">Decrypto 2k21</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse className="justify-content-end mx-2" id="basic-navbar-nav">
                    <Nav className="">
                      <Link className="mx-3 nav-link" to="">Rules</Link>
                      <Link className="mx-3 nav-link" to="/leaderboard">Leaderboard</Link>
                      <Link className="mx-3 nav-link" to="">Logout</Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
    )
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