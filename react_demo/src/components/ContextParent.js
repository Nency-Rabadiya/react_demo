import React, { createContext } from "react"

import ContextChild1 from "./ContextChild1"
export const FirstName = createContext();
const ContextParent = () => {
  return (
    <>
      <FirstName.Provider value={'Nency'} >
        <ContextChild1 />
      </FirstName.Provider>
    </>
  )
}
export default ContextParent