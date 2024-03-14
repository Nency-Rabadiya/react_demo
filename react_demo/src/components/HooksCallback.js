import { useCallback, useMemo, useState } from "react";
import HooksCallbackChild from "./HooksCallbackChild";

const HooksCallback = () => {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  // const getItems = useMemo(() => {
  //   console.log(countTwo + 1, countTwo - 1)
  //   return [setCountTwo + 1, setCountTwo - 1]
  // }, [countTwo])

  const getItems = useCallback(() => {
    console.log(countTwo + 1, countTwo - 1)
    return [countTwo + 1, countTwo - 1]
  }, [countTwo])

  return (
    <>
      <button onClick={() => setCountOne(countOne + 1)}>count1 : {countOne}</button>
      <button onClick={() => setCountTwo(countTwo + 1)}>count2 : {countTwo}</button>
      <HooksCallbackChild getItems={getItems} />
    </>
  )
}

export default HooksCallback;