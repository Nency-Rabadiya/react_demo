import '../App.css';
import GreetWithFunction from './GreetWithFunction.js';
import GreetWithClass from './GreetWithClass.js'
import StateUseWithFunction from './StateUseWithFunction.js';
import StateUseWithClass from './StateUseWithClass.js';
import PropsWithUseFunction from './PropsWithUseFunction.js';
import PropsWithUseClass from './PropsWithUseClass.js';
import GetInputboxValue from './GetInputboxValue.js'
import HideAndShowElement from './HideAndShowElement.js';
import FormCreation from './FormCreation.js';
import PassFunctionAsProps from './PassFunctionAsProps.js';
import PropsAsFunctionMember from './PropsAsFunctionMember.js';
import LifeCycle from './LifeCycle.js';
import HookUseEffect from './HookUseEffect.js';
import HooksUseEffectWithProps from './HooksUseEffectWithProps.js';
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState(0);
  const [count, setCount] = useState(0);
  const getData = () => {
    alert("clicked");
  }
  return (
    <div className="App">
      <GreetWithFunction />
      <GreetWithClass />
      <StateUseWithFunction />
      <StateUseWithClass />
      <PropsWithUseFunction topic="props" use="with function" />
      <PropsWithUseClass topic="props" use="with function" />
      <GetInputboxValue />
      <HideAndShowElement />
      <FormCreation />
      <PassFunctionAsProps data={getData} />
      <PropsAsFunctionMember data={getData} />
      <LifeCycle />
      <HookUseEffect />
      <HooksUseEffectWithProps data={count} count={count} />
      <button onClick={() => setCount(count + 1)}>Count update</button>
      <button onClick={() => setData(data + 1)}>Data update</button>
    </div>
  );
}

export default App;
