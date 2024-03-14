import React, { useState } from "react";

const PreviousStateValue = () => {
  const [count, setCount] = useState(0);
  const update = () => {
    // let random = Math.floor(Math.random() * 10)
    // setCount((pre) => {
    //   console.log(pre);
    //   return random;
    // }
    //)
    for (let i = 0; i < 5; i++) {
      //console.log("i", i, "count", count)
      // setCount(count + 1)
      setCount((pre) => {
        console.log("i", i, "pre", pre)
        console.log("pre + 1=", pre + 1)
        return pre + 1
      })
    }
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={update} >click</button>
    </>
  )

}

export default PreviousStateValue;