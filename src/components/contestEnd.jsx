import React, { Component } from 'react';
import {BASE_URL} from '../App.js';
import { Link } from "react-router-dom";


class ContestEnd extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.getUserInfo()
    }
    getUserInfo() {
        fetch(BASE_URL + "users/me", {
          method: 'GET',
          headers: {
              "Authorization": "bearer " + localStorage.getItem('access-token'),
              'accept': 'application/json'
          }
          }).then(response => {
              if(response.status === 200){
                  response.json()
                  .then(data => {
                      this.setState({
                          rank: data.rank,
                          questions_answered: data.question_number - 1
                    })
                  })
              }
          })
      }
    render() { 
        return ( 
            <div className=' align-items-center'>
               <div className='display-1'>
                   Contest Ended
               </div>
               <div className='m-5 d-felx align-items-center justify-content-center'>
                   <table id='end-table' className='table '>
                       <thead className='table-dark'>
                            <tr>
                                <th>Your rank</th>
                                <th>Questions answered</th>
                            </tr>
                       </thead>
                       <tbody>
                            <tr>
                                <td>{this.state.rank}</td>
                                <td>{this.state.questions_answered}</td>
                            </tr>
                       </tbody>
                       
                       
                   </table>
               </div>
               <Link className="container btn btn-dark m-4 w-75 p-2" to="/leaderboard">Check leaderboard</Link>
            </div>
        );
    }
}
 
export default ContestEnd;