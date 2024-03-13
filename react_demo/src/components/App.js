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
import Style from './Styles.js'
import ArrayWithList from './ArrayWithList.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import NestedListArray from './NestedListArray.js'
import ReuseComponent from './ReuseComponent.js';
import SendDataChildToParent from './SendDataChildToParent.js';
import PureComponentExample from './PureComponentExample.js';
import HooksUseMemo from './HooksUseMemo.js';
import HooksUseRef from './HooksUseRef.js';
import RefUseInClass from './RefUseInClass.js';
import ForwardRefParent from './ForwardRefParent.js';
import UseMemoToUseEffect from './UseMemoToUseEffect.js';
import HigherOrderComponent from './HigherOrderComponent.js';
import RouteExample from './RouteExample.js';
import DynamicRouting from './DynamicRouting.js';
import ReactMemo from './ReactMemo.js';
import ApiWithGet from './ApiWithGet.js';
import ApiWithPost from './ApiWithPost.js';
import ApiWithDeletePut from './ApiWithDeletePut.js';

function App() {
  const [data, setData] = useState(0);
  const [count, setCount] = useState(0);
  const getData = () => {
    alert("clicked");
  }

  function getDataFromChild(data) {
    alert(data);
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
      <HooksUseEffectWithProps data={data} count={count} />
      <button onClick={() => setCount(count + 1)}>Count update</button>
      <button onClick={() => setData(data + 1)}>Data update</button>
      <Style />
      <ArrayWithList />
      <NestedListArray />
      <ReuseComponent />
      <PureComponentExample />
      <SendDataChildToParent data="parent-to-child" alert={getDataFromChild} />
      <HooksUseMemo />
      <HooksUseRef />
      <RefUseInClass />
      <ForwardRefParent />
      <UseMemoToUseEffect />  
      <HigherOrderComponent />
      <RouteExample />
      <DynamicRouting />
      <ReactMemo />
      <ApiWithGet />
      <ApiWithPost />
      <ApiWithDeletePut />
    </div>
  );
}

export default App;
