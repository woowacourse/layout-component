import React from "react";
import { Flex } from "@solo5star/layout-component";

const App = () => {
  return (
    <Flex direction="row" align="center" style={{ height: '200px' }}>
      <div style={{ width: '50px', height: '100px', background: 'red' }}>1</div>
      <div style={{ width: '50px', height: '200px', background: 'orange' }}>2</div>
      <div style={{ width: '50px', height: '50px', background: 'yellow' }}>3</div>
      <div style={{ width: '50px', height: '150px', background: 'green' }}>4</div>
      <div style={{ width: '50px', height: '200px', background: 'blue' }}>5</div>
      <div style={{ width: '50px', height: '50px', background: 'purple' }}>6</div>
    </Flex>
  );
};

export default App;
