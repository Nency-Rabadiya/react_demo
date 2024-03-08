import React, { PureComponent } from 'react';

export default class PureComponentExample extends PureComponent {
  constructor() {
    super();
    this.state = { count: 0 }
  }
  updateState() {
    this.setState({ count: this.state.count })
  }
  render() {
    console.log("Rendering")
    return (
      <div>
        <h1>PureComponent</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.updateState()}>click</button>
      </div>
    )
  }
}
