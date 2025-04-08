import React from "react";
import "./Cart.css";

export const Cart: React.FC = () => {
  return (
    <div className="cart-container">
      <div className="cart-box">
        <h1 className="cart-title">Carrinho de Compras</h1>

        <div className="product-list">
          <div className="product-item">
            <div className="product-image">Imagem</div>
            <p className="product-name">Produto 1</p>
            <p className="product-price">R$ 50,00</p>
          </div>

          <div className="product-item">
            <div className="product-image">Imagem</div>
            <p className="product-name">Produto 2</p>
            <p className="product-price">R$ 75,00</p>
          </div>

          <div className="product-item">
            <div className="product-image">Imagem</div>
            <p className="product-name">Produto 3</p>
            <p className="product-price">R$ 120,00</p>
          </div>
        </div>

        <div className="cart-total">
          <p>Total:</p>
          <p className="total-value">R$ 245,00</p>
        </div>

        <button className="checkout-button">Finalizar Compra</button>
      </div>
    </div>
  );
};
