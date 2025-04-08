import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
//import App from './App';
//import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Cart } from "./pages/Cart";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produto/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
