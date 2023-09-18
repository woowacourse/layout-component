import {Container} from "../../lib";

function ContainerExample() {
  return (
    <>
      <Container>
        <div style={{background: "lightblue"}}>
          <h1>Your content goes here</h1>
          <p>
            This is a container with dynamic maxWidth and a light blue
            background.
          </p>
        </div>
      </Container>
      <Container maxWidth="sm">
        <div style={{background: "lightblue"}}>
          <h1>Your content goes here</h1>
          <p>
            This is a container with dynamic maxWidth and a light blue
            background.
          </p>
        </div>
      </Container>
      <Container maxWidth="md">
        <div style={{background: "lightblue"}}>
          <h1>Your content goes here</h1>
          <p>
            This is a container with dynamic maxWidth and a light blue
            background.
          </p>
        </div>
      </Container>
      <Container maxWidth="lg">
        <div style={{background: "lightblue"}}>
          <h1>Your content goes here</h1>
          <p>
            This is a container with dynamic maxWidth and a light blue
            background.
          </p>
        </div>
      </Container>
      <Container maxWidth="xl">
        <div style={{background: "lightblue"}}>
          <h1>Your content goes here</h1>
          <p>
            This is a container with dynamic maxWidth and a light blue
            background.
          </p>
        </div>
      </Container>
      <Container maxWidth="xxl">
        <div style={{background: "lightblue"}}>
          <h1>Your content goes here</h1>
          <p>
            This is a container with dynamic maxWidth and a light blue
            background.
          </p>
        </div>
      </Container>
      <Container minWidth={600} maxWidth={960}>
        <div style={{background: "lightblue"}}>
          <h1>Your content goes here</h1>
          <p>
            This is a container with dynamic maxWidth and a light blue
            background.
          </p>
        </div>
      </Container>
    </>
  );
}

export default ContainerExample;
