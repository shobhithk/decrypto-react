import React, { Component } from 'react';
import ContestEnd from './contestEnd';

class ContestNotLive extends Component {
    constructor(props) {
        super(props);
        
        this.state = {  }
    }
    
    render() {
        if(new Date().getTime() > this.props.endTime){
            return <ContestEnd />
        }
        return (
            <div>
                Contest not live {this.props.startTime}
            </div>
        );
    }
}
 
export default ContestNotLive;