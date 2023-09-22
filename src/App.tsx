import { Container, Flex, Grid } from './lib';

const App = () => {
  return (
    <>
      <Container maxWidth={100}>hi</Container>
      <Flex gap={10}>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </Flex>
      <Grid gap={10} rows={1} columns={2}>
        <div>first</div>
        <div>second</div>
        <div>third</div>
      </Grid>
    </>
  );
};

export default App;
