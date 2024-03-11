import React, { useRef } from "react";
import ForwardRefChild from "./ForwardRefChild";
const ForwardRefParent = () => {
  let inputRef = useRef()
  const update = () => {
    inputRef.current.value = "1111";
    inputRef.current.style.color = "red";
  }
  return (
    <>
      <h1>forwardRef</h1>
      <ForwardRefChild ref={inputRef} />
      <button onClick={update}>update</button>
    </>
  )
}
export default ForwardRefParent;