import React from "react";
import ReactDOM from "react-dom/client";
import { Grid } from "./lib/components/Grid";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Grid
      rows={2}
      columns={2}
      gap={10}
      width="100vw"
      height="100vh"
      backgroundColor="blue"
    >
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </Grid>
  </React.StrictMode>
);
