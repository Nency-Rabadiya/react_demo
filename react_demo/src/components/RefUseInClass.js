import React, { createRef } from "react";
class RefUseInClass extends React.Component {
  constructor() {
    super();
    this.inputRef = createRef()
  }

  componentDidMount() {
    this.inputRef.current.style.backgroundColor = "red";
    this.inputRef.current.value = '111111'
    this.inputRef.current.focus();
    console.log(this.inputRef)
  }

  render() {
    return (
      <>
        <h1>Ref in class</h1>
        <input type="text" ref={this.inputRef} />
      </>
    )
  }
}

export default RefUseInClass;