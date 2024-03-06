import React, { useState } from 'react';

const GetInputboxValue = () => {
  const [text, setText] = useState(null);
  const [print, setPrint] = useState(false);
  const getText = (event) => {
    setText(event.target.value);
    setPrint(false);
  }
  return (
    <div>
      {
        print ? <h4>{text}</h4> : null
      }
      <input type='text' onChange={getText} placeholder='Enter some text' />
      <button onClick={() => setPrint(true)}>click to print</button>
    </div>
  )
}

export default GetInputboxValue;