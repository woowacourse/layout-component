import { Container, Flex, Grid } from './lib';

function App() {
  return (
    <div>
      <Container maxWidth={1000}>
        <Grid rows={3} columns={3}>
          <Flex className='center'>띠용</Flex>
          <Flex className='center'>띠용</Flex>
          <Flex className='center'>띠용</Flex>
          <Flex className='center'>띠용</Flex>
          <Flex className='center'>띠용</Flex>
          <Flex className='center'>띠용</Flex>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
