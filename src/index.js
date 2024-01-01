import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css"
import App from "./App";
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter } from "react-router-dom";
import LogInContextProvider from "./Contexts/LogInContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <LogInContextProvider>
        <App />
      </LogInContextProvider>
    </BrowserRouter>
  </StrictMode>
)

reportWebVitals();