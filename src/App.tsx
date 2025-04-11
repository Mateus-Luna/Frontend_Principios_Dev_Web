import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import {ProductDetails} from './pages/ProductDetails'
import { Cart} from './pages/Cart' 
import Login from './pages/Login';
import Header from 'components/Header';
import Register from './pages/register';

function App() {
  return (
    <Router>
      <Header />  {/* Componente reutilizável */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
export default App;
