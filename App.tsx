import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import {ProductDetails} from './pages/ProductDetails'
import { Cart} from './pages/Cart' 
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Headers />  {/* Componente reutilizável */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}