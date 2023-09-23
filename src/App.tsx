import React, { useRef } from 'react';
import { Container } from './lib';

function App() {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <Container
      ref={ref}
      bgColor="red"
      fullScreen
      maxWidth="400px"
      css={{ color: 'blue' }}>
      asdasd
    </Container>
  );
}

export default App;
