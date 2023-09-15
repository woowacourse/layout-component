import Container from './Container';
import Grid from './Grid';

function App() {
  return (
    <>
      <Container maxWidth={300} paddingX={20}>
        <div
          style={{ backgroundColor: 'aqua', height: '100vh', width: '100%' }}
        ></div>
      </Container>
      <Grid></Grid>
    </>
  );
}

export default App;
