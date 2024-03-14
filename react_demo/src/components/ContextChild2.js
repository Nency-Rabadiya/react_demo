
import { useContext } from "react"
import { FirstName } from "./ContextParent"

const ContextChild2 = () => {
  const fname = useContext(FirstName);
  return (
    <>
      <h1>Firstname : {fname}</h1>
    </>
  )
}
export default ContextChild2