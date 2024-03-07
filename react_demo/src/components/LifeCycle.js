import React, { Component } from 'react';

class LifeCycle extends Component {
  constructor() {
    super();
    this.state = { count: 0 }
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(preProps, preState, snapShot) {
    console.log("componentDidUpdate", preState);
    if (this.state.count === preState.count) {
      alert("same");
    }
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  render() {
    console.log("render");
    return (
      <>
        <p>count : {this.state.count}</p>
        <button onClick={() => this.setState({ count: 1 })}>click</button>
      </>
    )
  }
}
export default LifeCycle;
