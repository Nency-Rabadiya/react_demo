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

function App() {
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
    </div>
  );
}

export default App;
