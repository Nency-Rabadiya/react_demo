import React, { useEffect, useRef } from "react";
const PrePropChild = (props) => {

  const preValue = useRef();

  useEffect(() => {
    //console.log("props.count", preValue.current = props.count)
    preValue.current = props.count;
  })

  const preProp = preValue.current;
  //console.log("preValue.current", preProp)

  return (
    <>
      <h1>current {props.count} </h1>
      <h2>previous{preProp}</h2>
    </>
  )
}

export default PrePropChild;