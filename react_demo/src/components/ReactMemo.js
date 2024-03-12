import { useState } from "react";
import ReactMemoChild from "./ReactMemoChild";

const ReactMemo = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(1)
  return (
    <>
      <h4>{count}</h4>
      <ReactMemoChild data={data} />
      <button onClick={() => setCount(count + 1)}>click</button>
    </>
  )
}

export default ReactMemo;