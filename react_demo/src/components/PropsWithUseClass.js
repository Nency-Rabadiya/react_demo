import React, { Component } from 'react';
class PropsWithUseClass extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "green" }}>
        <h3>topic : {this.props.topic} , use : {this.props.use}</h3>
      </div>
    )
  }
}
export default PropsWithUseClass;