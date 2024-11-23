import React, { Component } from 'react'

export class counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increament = () => {
    this.setState((oldState) => ({
      count: oldState.count + 1,
    }));
  };

  decrease = () =>{
    this.setState((oldState) => (
      {
        count: oldState.count - 1,
      }
    ))
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increament}>Increament</button>
        <button onClick={this.decrease}>Decrease</button>
      </div>
    );
  }
}

export default counter
