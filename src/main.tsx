import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const rootDomNode = document.createElement("div");
const root = createRoot(rootDomNode);

document.body.appendChild(rootDomNode);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
