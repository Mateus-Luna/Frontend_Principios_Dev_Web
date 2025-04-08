import React from "react";
import ReactDOM from "react-dom/client";
//import App from './App';
//import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Cart } from "./pages/Cart";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Cart />
    </BrowserRouter>
  </React.StrictMode>
);
