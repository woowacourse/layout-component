import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import GlobalStyle from './GlobalStyle.ts'
import { Container, Flex, Grid } from './index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Container />
    <Flex />
    <Grid />
  </React.StrictMode>,
)
