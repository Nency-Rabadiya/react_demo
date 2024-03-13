import { useState } from "react";

const HocCountLogic = (Wraapper) => {
  const Counter = () => {
    const [count, setCount] = useState(0);
    const updateCount = () => {
      setCount(count + 1);
    }
    return <Wraapper count={count} updateCount={updateCount} />
  }
  return Counter;
}

export default HocCountLogic;

