import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import "./index.css";
import { DirectionProvider } from "./context/DirectionContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <DirectionProvider>
        <App />
      </DirectionProvider>
    </BrowserRouter>
  </StrictMode>
);
