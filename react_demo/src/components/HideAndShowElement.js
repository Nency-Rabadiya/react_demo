import React, { useState } from 'react';

const HideAndShowElement = () => {
  const [status, setStatus] = useState(false)
  return (
    <div>
      {
        status ? <h3>Hiiii</h3> : null
      }
      <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>Show</button>
    </div>
  )
}
export default HideAndShowElement;