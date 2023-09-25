import React from "react";
import ReactDOM from "react-dom/client";
import Container from "./layout/Container";
import Flex from "./layout/Flex";
import Grid from "./layout/Grid";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Container />
    <Flex />
    <Grid />
  </React.StrictMode>
);
