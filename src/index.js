import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { BestContextProvider } from "./stock/BestContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BestContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </BestContextProvider>
);
