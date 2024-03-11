import { useMemo, useState } from "react";

const nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isTrue: i === 29_000_000
  }
})
console.log(nums);
const HooksUseMemo = () => {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);
  const findNum = useMemo(() => numbers.find(item => item.isTrue === true), [numbers]);
  // const findNum = numbers.find(item => item.isTrue === true);
  return (
    <>
      <h1>useMemo example</h1>
      <p>{count}</p>
      <h2>Array index is {findNum.index}</h2>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  )
}
export default HooksUseMemo;