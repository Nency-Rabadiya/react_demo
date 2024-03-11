import React, { useEffect } from 'react';

const HooksUseEffectWithProps = (props) => {
  useEffect(() => {
    alert("count is " + props.count);
  }, [props.count])
  return (
    <>
      <h3>count : {props.count} </h3>
      <h3>data : {props.data} </h3>
    </>
  )
}

export default HooksUseEffectWithProps;