import Container from './lib/Container';
import Flex from './lib/Flex';
import Grid from './lib/Grid';

function App() {
  return (
    <>
      <Container minWidth={0} maxWidth={300}>
        <div
          style={{
            maxWidth: '',
            backgroundColor: 'aqua',
            height: '100vh',
            width: '100%',
          }}
        ></div>
      </Container>
      <Grid>
        {new Array(9)
          .map((__, index) => index + 1)
          .map((item) => (
            <div key={item}>{item}</div>
          ))}
      </Grid>
      <Flex justifyContent="">
        <div>안녕</div>
        <div>하세요</div>
      </Flex>
    </>
  );
}

export default App;
