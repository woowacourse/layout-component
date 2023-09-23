import React, { useRef } from 'react';
import { Container } from './lib';

function App() {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <Container ref={ref} as="a">
      asdasds
    </Container>
  );
}

export default App;
