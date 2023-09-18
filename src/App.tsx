import React from "react";
import Container from "./lib/Container";
import Flex from "./lib/Flex";
import Grid from "./lib/Grid";

function App() {
  return (
    <div className="App">
      <header className="App-header">hello world~~</header>
      <Container
        as="div"
        minWidth="100px"
        maxWidth="110px"
        minHeight="200px"
        maxHeight="300px"
        background="gray"
        borderRadius="10px"
      >
        It's Container
      </Container>
      <Flex justify="center" align="center" gap="10px">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </Flex>
      <Grid rows={"2"} columns={"3"} gap="10px">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </Grid>
    </div>
  );
}

export default App;
