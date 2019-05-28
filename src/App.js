import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
	  super();
	  this.state = {
	  	count: 0
	}
}

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.updateCount.bind(this)}></textarea>
        <div className="counter">{this.state.count}</div>
      </div>
    );
  }

  updateCount(e){
  	this.setState({
  		count: e.target.value.length
  	});
  }
}

export default App;
