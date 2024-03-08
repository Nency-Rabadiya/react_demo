import React, { Fragment } from 'react';

const PassFunctionAsProps = (props) => {
  return (
    <Fragment>
      <h3>Pass function as props</h3>
      <button onClick={props.data}>click here</button>
    </Fragment>
  )
}
export default PassFunctionAsProps;