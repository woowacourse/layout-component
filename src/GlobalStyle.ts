import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  :root {
  --primary-color: #5580ff;
  --secondary-color: #eaeffe;
  --border-color: #e3e3e3;
}

  html {
    font-size: 62.5%; /* 1rem이 10px로 설정됨 */
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyle;
