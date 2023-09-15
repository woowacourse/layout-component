import { createGlobalStyle } from 'styled-components';
import { ResetStyle } from './ResetStyle';

export const GlobalStyle = createGlobalStyle`

* {
    font-family: 'Noto Sans', sans-serif;
}

${ResetStyle}

#root {
    width: 100%;
    height: 100%;
  }
`;
