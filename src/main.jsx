import React from "react";
import ReactDOM from "react-dom";
import { BasketProvider } from "../src/components/Basket";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BasketProvider>
      <App />
    </BasketProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
