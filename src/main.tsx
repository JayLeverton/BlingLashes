import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Components/App.tsx";
import "./SASS/style.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
