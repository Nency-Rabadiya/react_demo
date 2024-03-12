import React from 'react';
const ReactMemoChild = (props) => {
  console.log(props)
  return (
    <>
      <h2>{props.data}</h2>
    </>
  )
}
export default React.memo(ReactMemoChild);