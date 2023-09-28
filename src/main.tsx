import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '4rem',
        fontWeight: 'bold',
        color: '#0f60ab',
        backgroundColor: 'aliceblue',
      }}
    >
      <a href='https://6505550eb343f2286f179ae2-txbaamrfzf.chromatic.com/' target='_blank'>
        Storybook에서 자유롭게 컴포넌트를 경험해보세요!
      </a>
    </div>
  </React.StrictMode>,
);
