import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import GlobalStyle from './GlobalStyle.ts'
import { Container, Flex, Grid } from './index.tsx'
import Drawer from './components/Drawer.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <Container />
    <Flex />
    <Grid />
    <Drawer direction={'right'} isShow={false} closeDrawer={() => {}} />
  </React.StrictMode>,
)
