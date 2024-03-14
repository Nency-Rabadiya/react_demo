import React from "react";
import { FirstName } from "./ContextParent";
const ContextChild3 = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => { return <h1>Hyyy this is {fname}</h1> }}
      </FirstName.Consumer>
    </>
  )
}
export default ContextChild3;