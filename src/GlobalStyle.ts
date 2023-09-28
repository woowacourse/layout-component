import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html {
    font-size: 62.5%; /* 1rem이 10px로 설정됨 */
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s ease-in;
  }

  ul {
    list-style: none;
  }

  a:hover {
    transform: scale(1.02);
  }

  a:active {
    animation: shrink-grow 0.3s ease;
    transform-origin: center;
  }

  @keyframes shrink-grow {
    0% {
    transform: scale(1);
    }
    25% {
      transform: scale(0.98);
    }
    50% {
      transform: scale(0.99);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default GlobalStyle;
