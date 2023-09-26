import React from "react";
import ReactDOM from "react-dom/client";
import Container from "./layout/Container";
import Flex from "./layout/Flex";
import Grid from "./layout/Grid";
import { Tab } from "./layout/Tab";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Container />
    <Flex />
    <Grid />
    <Tab />
  </>
);
