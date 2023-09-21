import React from "react";
import { Container } from "@solo5star/layout-component";

const App = () => {
  return (
    <Container minWidth={320} maxWidth={480} style={{ background: "yellow" }}>
      <div style={{ padding: '20px' }}>
        <h2>Container 컴포넌트입니다!</h2>
        <p>주로 웹 사이트의 주요 컨텐츠의 표시를 한정하는데에 사용합니다.</p>
      </div>
    </Container>
  );
};

export default App;
