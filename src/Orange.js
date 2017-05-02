import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

class Orange extends Component {
 constructor(props) {
    super(props);
    this.state = {
      isInView: false
    };

    this.onEnter = this.onEnter.bind(this);
  }

  onEnter({ previousPosition }) {
    if (previousPosition === Waypoint.below) {
      this.setState({
        isInView: true
      });
    }
  }
  
  render() {
    const {isInView} = this.state
    return (
    <section className="orange">
      <Waypoint onEnter={this.onEnter.bind(this)}></Waypoint>
      <h1 className={`js--wp-1 ${isInView ? 'animated pulse' : ''}`}>Pulse</h1>
    </section>
    );
  }
}

export default Orange;


