import React, { useRef } from "react";
const HooksUseRef = () => {
  let inputRef = useRef(null);
  const handleInput = () => {
    inputRef.current.value = "11111"
    inputRef.current.style.color = "red"
  }
  return (
    <>
      <h1>useRef in functional component.</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>CLICK</button>
    </>
  )
}
export default HooksUseRef;