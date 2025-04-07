import React from "react";
import ReactDOM from "react-dom/client";
//import App from './App';
//import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  </React.StrictMode>
);
