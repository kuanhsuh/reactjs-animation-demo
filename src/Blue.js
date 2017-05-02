import React, { Component } from 'react';
class Blue extends Component {
 constructor(props) {
    super(props);
    this.state = {
      isInView: false
    };
  }

  componentDidMount() {
    this.setState({isInView: true})
  }
  
  render() {
    const {isInView} = this.state
    return (
    <section className="blue">
      <h1 className={`js--wp-1 ${isInView ? 'animated fadeInDown' : ''}`}>FadeInDown</h1>
    </section>
    );
  }
}

export default Blue;


