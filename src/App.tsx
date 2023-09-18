import Container from './libs/Container/Container';
import Flex from './libs/Flex/Flex';

function App() {
  return (
    <Flex direction="column" align="center">
      <Flex.Item>Item1</Flex.Item>
      <Flex.Item>Item2</Flex.Item>
      {/* ... */}
    </Flex>
  );
}

export default App;
