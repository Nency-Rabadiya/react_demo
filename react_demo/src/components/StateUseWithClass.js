import React, { Component } from 'react';

export default class StateUseWithClass extends Component {
  constructor() {
    super();
    this.state = { count: 0 }
  }
  updateState() {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.updateState()}>click</button>
      </div>
    )
  }
}