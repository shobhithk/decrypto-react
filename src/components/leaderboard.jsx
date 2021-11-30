import React from "react";

class Leaderboard extends React.Component {0
    constructor(props){
        super(props)
        this.state = {
            rank_list: [],
            current_user_info: {}
        }
        this.ranksInPage = 10
        this.skip = 0
        this.limit = this.ranksInPage
    }
    componentDidMount(){
        this.fetchLeaderboard()
        this.getCurrentUserInfo()
    }
    fetchLeaderboard(){
        fetch("http://152.67.25.103/api/users/leaderboard?skip=" + this.skip + "&limit=" + this.limit, {
            method: 'GET',
            headers: {
                'accept': 'application/json'
            }
        }).then(response => response.json())
        .then(data => {
            if(data.length != 0){
                this.setState({rank_list: data})
            }
            else {
                this.skip -= this.ranksInPage
            }
            
        })
    }
    getCurrentUserInfo(){
        fetch("http://152.67.25.103/api/users/me", {
			method: 'GET',
			headers: {
				"Authorization": "bearer " + localStorage.getItem('access-token'),
				'accept': 'application/json'
			}
		}).then(response => response.json())
        .then(data =>{
            console.log(data)
            this.setState({current_user_info: data})
        })
    }
    render() { 
        return (
            <div>
                {this.renderTables()}
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item"><button className="page-link" onClick={this.previousPage}>Previous</button></li>
                    <li className="page-item"><button className="page-link" onClick={this.nextPage} >Next</button></li>
                  </ul>
                </nav>
            </div>
        );
    }
    nextPage = () => {
        
        this.skip += this.ranksInPage
        this.fetchLeaderboard()
    }
    previousPage = () => {
        if(this.skip == 0){
            return
        }
        this.skip -= this.ranksInPage
        this.fetchLeaderboard()
    }
    renderTables(){
        return (
            <table className="table table-hover">
                <thead className="table-dark">
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Question</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-success">
                        <td>{this.state.current_user_info.rank}</td>
                        <td>{this.state.current_user_info.full_name}</td>
                        <td>{this.state.current_user_info.question_number}</td>
                    </tr>
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