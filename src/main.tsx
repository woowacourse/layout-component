import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './GlobalStyle.ts';
import { Container, Flex, Grid, Tabs } from './lib/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Container />
    <Flex />
    <Grid />
    <Tabs defaultTabId='' />
  </React.StrictMode>,
);
