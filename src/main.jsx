import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import './App.css'
import { TextFillerV2 } from "./components/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <div className="textFillerSection_Wrapper">
      <TextFillerV2
        text="Releaf® is a plant-based,"
        animStart="70%"
        animEnd="10%"
      />
      <TextFillerV2 text="recyclable plastic." animStart="85%" animEnd="15%" />
      <TextFillerV2
        text="Completely fossil-free."
        animStart="75%"
        animEnd="10%"
      />
    </div>
  </StrictMode>
);
