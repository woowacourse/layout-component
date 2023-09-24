import React, { useRef } from 'react';
import { Container, Flex, Grid } from './lib';

function App() {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <>
      <Container
        ref={ref}
        bgColor="red"
        fullScreen
        maxWidth="400px"
        css={{ color: 'blue' }}>
        asdasd
      </Container>
      <Flex gap="100px">
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </Flex>
      <Grid
        rows="repeat(3, 200px)"
        columns={3}
        gap="100px"
        columnGap="10px"
        rowGap="10px">
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </Grid>
    </>
  );
}

export default App;
