import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./styles/GlobalStyle.ts";
import router from "./router.tsx";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
