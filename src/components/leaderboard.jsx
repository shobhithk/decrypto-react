import React, { Component } from "react";

class Leaderboard extends React.Component {0
    constructor(props){
        super(props)
        this.state = {
            rank_list: [],
            skip: 0,
            limit: 10
        }
    }
    componentDidMount(){
        this.fetchLeaderboard()
    }
    fetchLeaderboard(){
        fetch("http://152.67.25.103/api/users/leaderboard?skip=" + this.state.skip + "&limit=" + this.state.limit, {
            method: 'GET',
            headers: {
                'accept': 'application/json'
            }
        }).then(response => response.json())
        .then(data => this.setState({rank_list: data}))
    }
    render() { 
        return (
            <div>
                {this.renderTables()}
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item"><button class="page-link" onClick={this.previousPage}>Previous</button></li>
                    <li className="page-item"><button class="page-link" onClick={this.nextPage} >Next</button></li>
                  </ul>
                </nav>
            </div>
        );
    }
    nextPage = () => {
        this.state = {
            skip: this.state.skip + 10,
            limit: this.state.limit + 10
        }
        this.fetchLeaderboard()
    }
    previousPage = () => {
        this.state = {
            skip: this.state.skip - 10,
            limit: this.state.limit - 10
        }
        this.fetchLeaderboard()
    }
    renderTables(){
        return (
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Question</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.rank_list.map(data => {
                        return (
                            <tr key={data.rank}>
                                <td>{data.rank}</td>
                                <td>{data.full_name}</td>
                                <td>{data.question_number}</td>
                            </tr>
                        )
                        
                    })}
                </tbody>

            </table>
        )
    }
}
 
export default Leaderboard;