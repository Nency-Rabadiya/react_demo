import React, { useEffect, useState } from "react";

const HooksCallbackChild = ({ getItems }) => {

  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getItems)
  }, [getItems])

  return (
    <>
      {items && items.map(item => {
        return <p key={item}>{item}</p>
      })}
    </>
  )
}

export default HooksCallbackChild;