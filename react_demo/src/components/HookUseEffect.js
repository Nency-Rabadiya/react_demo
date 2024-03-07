import React, { useEffect, useState } from 'react';

const HookUseEffect = () => {
  const [data, setData] = useState(0);
  useEffect(() => {
    alert("useEffect called");
  })

  return (
    <>
      <h4>Hooks useEffect</h4>
      <p>{data}</p>
      <button onClick={() => setData(data + 1)}>click</button>
    </>
  )
}

export default HookUseEffect;