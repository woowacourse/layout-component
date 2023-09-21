import React from "react";
import { Grid } from "@solo5star/layout-component";

const App = () => {
  return (
    <Grid rows={2} columns={3} gap={10} style={{ width: '300px', height: '200px' }}>
      <div style={{ background: 'red' }}>1</div>
      <div style={{ background: 'orange' }}>2</div>
      <div style={{ background: 'yellow' }}>3</div>
      <div style={{ background: 'green' }}>4</div>
      <div style={{ background: 'blue' }}>5</div>
      <div style={{ background: 'purple' }}>6</div>
    </Grid>
  );
};

export default App;
