import React, { forwardRef } from "react";
const ForwardRefChild = (props, ref) => {
  return (
    <>
      <input type="text" ref={ref} />
    </>
  )
}
export default forwardRef(ForwardRefChild);