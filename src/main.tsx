import { Global } from '@emotion/react';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { reset } from '@styles/reset';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global styles={reset} />
    <App />
  </StrictMode>
);
