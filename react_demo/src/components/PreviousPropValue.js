import PrePropChild from "./PrePropChild";
import React, { useState } from "react";
const PreviousPropValue = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <PrePropChild count={count} />
      <button onClick={() => setCount(Math.floor(Math.random() * 10))} >click </button>
    </>
  )
}
export default PreviousPropValue;