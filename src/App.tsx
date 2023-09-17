import Container from './libs/Container/Container';
import { styled } from 'styled-components';
function App() {
  return (
    <Container>
      <Layout>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </Layout>
    </Container>
  );
}

export default App;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
`;
