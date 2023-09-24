import React, { useRef } from 'react';
import { Container, Flex } from './lib';

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
    </>
  );
}

export default App;
