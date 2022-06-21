import React, {Component } from 'react';
import { Link } from "react-router-dom";

class Congratulations extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div>
                </div>
                <div className='display-1 p-3 m-3'>
                    Congratulations...
                </div>
                <div className='display-4 p-3 m-3'>
                    You have successfully answered all the questions
                </div>
                <Link className="container btn btn-dark m-4 w-75 p-2" to="/leaderboard">Check leaderboard</Link>
            </div>
            
            
        );
    }
}
 
export default Congratulations;