import { createGlobalStyle } from "styled-components";

import { reset } from "./reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body, #root {
    height: 100%;
    width: 100%;
  }
`;
