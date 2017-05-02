import React, {Component} from 'react'
import Green from './Green'
import Orange from './Orange'
import Blue from './Blue'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <div>
        <Blue />
        <Green />
        <Orange />
      </div>
    );
  }
}

export default App;
