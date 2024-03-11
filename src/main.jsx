import React from "react";
import { createRoot } from "react-dom/client";
import { BasketProvider } from "../src/components/Basket";
import App from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BasketProvider>
      <App />
    </BasketProvider>
  </React.StrictMode>
);
