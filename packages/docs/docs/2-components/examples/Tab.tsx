import React from "react";
import { Tab } from "@solo5star/layout-component";

const App = () => {
  return (
    <Tab tabs={['red', 'orange', 'yellow', 'green', 'blue', 'purple']}>
      <div style={{ width: '100%', height: '200px', background: 'red' }}>1</div>
      <div style={{ width: '100%', height: '200px', background: 'orange' }}>2</div>
      <div style={{ width: '100%', height: '200px', background: 'yellow' }}>3</div>
      <div style={{ width: '100%', height: '200px', background: 'green' }}>4</div>
      <div style={{ width: '100%', height: '200px', background: 'blue' }}>5</div>
      <div style={{ width: '100%', height: '200px', background: 'purple' }}>6</div>
    </Tab>
  );
};

export default App;
