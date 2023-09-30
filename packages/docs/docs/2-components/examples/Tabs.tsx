import React from "react";
import { Tabs, Tab } from "@solo5star/layout-component";

const App = () => {
  return (
    <Tabs>
      <Tab button="red" style={{ width: '100%', height: '200px', background: 'red' }}>1</Tab>
      <Tab button="orange" style={{ width: '100%', height: '200px', background: 'orange' }}>2</Tab>
      <Tab button="yellow" style={{ width: '100%', height: '200px', background: 'yellow' }}>3</Tab>
      <Tab button="green" style={{ width: '100%', height: '200px', background: 'green' }}>4</Tab>
      <Tab button="blue" style={{ width: '100%', height: '200px', background: 'blue' }}>5</Tab>
      <Tab button="purple" style={{ width: '100%', height: '200px', background: 'purple' }}>6</Tab>
    </Tabs>
  );
};

export default App;
