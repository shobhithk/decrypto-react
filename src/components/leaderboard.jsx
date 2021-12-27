import React, { Fragment } from "react";
import { BASE_URL } from "../App";
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {Navbar, Container, Nav, Image, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";


class Leaderboard extends React.Component {
    
    constructor(props){
        super(props)
        this.ranksInPage = 10
        this.state = {
            rank_list: [],
            current_user_info: {},
            start: 0,
            end: this.ranksInPage
        }
        
        
    }
    componentDidMount(){
        this.fetchLeaderboard()
        this.getCurrentUserInfo()
    }
    fetchLeaderboard(){
        fetch(BASE_URL + "users/leaderboard?skip=0&limit=500", {
            method: 'GET',
            headers: {
                'accept': 'application/json'
            }
        }).then(response => response.json())
        .then(data => {
            if(data.length != 0){
                console.log(data)
                this.setState({rank_list: data})
            }
            
        })
    }
    getCurrentUserInfo(){
        fetch(BASE_URL + "users/me", {
			method: 'GET',
			headers: {
				"Authorization": "bearer " + localStorage.getItem('access-token'),
				'accept': 'application/json'
			}
		}).then(response => response.json())
        .then(data =>{
            this.setState({current_user_info: data})
        })
    }
    render() {
        
        
        return (
            <Fragment>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                  <Navbar.Brand href="">Decrypto 2k21</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse className="justify-content-end mx-2" id="basic-navbar-nav">
                    <Nav className="">
                      <Link className="mx-3 nav-link" to="/rules">Rules</Link>
                      <Link className="mx-3 nav-link disabled" to="/leaderboard">Leaderboard</Link>
                      <Link className="mx-3 nav-link" to="" onClick={this.logout}>Logout</Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="m-3">
                <div className="input-group d-flex flex-nowrap my-2">
                    <button id="back-button" type="button" className="btn btn-dark flex-shrink-1" onClick={() => window.history.go(-1)}>
                        <i class="bi bi-arrow-left"></i>
                    </button>
                    <div className="form-outline w-100">
                      <input id="search-input" type="search" className="form-control" placeholder="Search friend" />
                    </div>
                    <button id="search-button" type="button" className="btn btn-dark flex-shrink-1" onClick={this.searchFriend}>
                      <i className="bi bi-search"></i>
                    </button>
                </div>
                {this.renderTables()}
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item"><button className="page-link" onClick={this.previousPage}>Previous</button></li>
                    <li className="page-item"><button className="page-link" onClick={this.nextPage} >Next</button></li>
                  </ul>
                </nav>
            </div>
            </Fragment>
        );
    }
    searchFriend = () => {
        let friend = document.getElementById("search-input").value
        if(friend === this.state.current_user_info.username){
            return
        }
        let friend_info = null
        for(let f of this.state.rank_list){
            if(f.username === friend){
                friend_info = f
                break
            }
        }
        if(friend_info !== null){
            document.getElementById("friend-row").innerHTML = 
                `<td>${friend_info.rank}</td>` + 
                `<td>${friend_info.username}</td>` +
                `<td>${friend_info.question_number}</td>`
        }
        else {
            toast.error("User not found")
        }
    }
    logout = () => {
        localStorage.clear();
        window.location.href = '/home';
    }
    nextPage = () => {
        if(this.state.start > this.state.rank_list.length){
            return
        }
        this.setState({start: this.state.start + this.ranksInPage})
    }
    previousPage = () => {
        if(this.state.start - this.ranksInPage < 0){
            this.setState({start: 0})
        }
        else {
            this.setState({start: this.state.start - this.ranksInPage})
        }
    }
    renderTables(){
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
            <table className="table table-hover" id="leaderboardTable">
                <thead className="table-dark">
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Question</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-active">
                        <td>{this.state.current_user_info.rank}</td>
                        <td>{this.state.current_user_info.username}</td>
                        <td>{this.state.current_user_info.question_number}</td>
                    </tr>
                    <tr className="table-success" id="friend-row">
                    </tr>
                    {this.state.rank_list.slice(this.state.start, this.state.start + this.state.end).map(data => {
                        return (
                            <tr key={data.rank}>
                                <td>{data.rank}</td>
                                <td>{data.username}</td>
                                <td>{data.question_number}</td>
                            </tr>
                        )
                        
                    })}
                </tbody>

            </table>
            </Fragment>
        )
    }
}
 
export default Leaderboard;