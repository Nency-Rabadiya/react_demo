import React, { Fragment } from 'react';
const PropsAsFunctionMember = (props) => {
  return (
    <Fragment>
      <h3>Pass function as props Member</h3>
      <button onClick={props.data}>click here</button>
    </Fragment>
  )
}
export default PropsAsFunctionMember;