import React, { Component } from 'react';
import ContestEnd from './contestEnd';
import ContestNotStarted from './contestNotStarted';

class ContestNotLive extends Component {
    constructor(props) {
        super(props);
        
        this.state = {  }
    }
    
    render() {
        if(new Date().getTime() > this.props.endTime){
            return <ContestEnd />
        }
        else if(new Date().getTime() < this.props.startTime)
        return <ContestNotStarted startTime = {this.props.startTime} />
    }
}
 
export default ContestNotLive;