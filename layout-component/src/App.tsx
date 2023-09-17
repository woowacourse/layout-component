import Container from "./components/Container";

function App() {
  return (
    <>
      <Container minWidth={600} maxWidth={660} backgroundColor="red">
        <div>Content</div>
        <div>Content2</div>
      </Container>
    </>
  );
}

export default App;
