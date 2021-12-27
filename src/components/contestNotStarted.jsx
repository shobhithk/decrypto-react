import Countdown from 'react-countdown';
import React, { Component } from "react";

class ContestNotStarted extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className='display-2 m-5 p-3'>
                    Contest will start in
                </div>
                <div className='display-1 my-5 p-3'>
                    {this.renderCountdown()}
                </div>
            </div>
         );
    }
    renderCountdown() {
        const renderer = ({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            window.location.reload()
          } else {
            return <span className="display-1">{("0" + days.toString()).slice(-2)} : {("0" + hours.toString()).slice(-2)} : {("0" + minutes.toString()).slice(-2)} : {("0" + seconds.toString()).slice(-2)}</span>;
          }
        };
        if(this.props.startTime !== null){
          return  <Countdown className="display-1" date={this.props.startTime} renderer={renderer} zeroPadTime={2} zeroPadDays={2}/>
        }
      }
}
 
export default ContestNotStarted;