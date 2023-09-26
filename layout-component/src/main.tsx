import React from "react";
import ReactDOM from "react-dom/client";
import { Masonry } from "./lib/components/Masonry";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Masonry columns={4}>
      <img src="https://picsum.photos/200/300" />
      <div style={{ background: "yellow", height: "280px" }}>2</div>
      <img src="https://picsum.photos/300/200" />
      <div style={{ background: "blue", height: "100px" }}>4</div>
      <div style={{ background: "green", height: "340px" }}>5</div>
      <div style={{ background: "red", height: "200px" }}>6</div>
      <div style={{ background: "yellow", height: "260px" }}>7</div>
      <div style={{ background: "blue", height: "120px" }}>8</div>
      <div style={{ background: "green", height: "40px" }}>9</div>
    </Masonry>
  </React.StrictMode>
);
