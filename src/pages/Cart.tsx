import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import "./Cart.css";

import ProductCard from "../components/ProductCard";

type Product = {
  id: number;
  nome: string;
  preco: number;
};

export const Cart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false); // controle do modal

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const total = products.reduce((sum: number, p: Product) => sum + p.preco, 0);

  const handleFinalize = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="cart-container">
      <div className="cart-box">
        <h1 className="cart-title">Carrinho de Compras</h1>

        {loading ? (
          <p>Carregando produtos...</p>
        ) : (
          <div className="product-grid">
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="cart-total">
          <p>Total:</p>
          <p className="total-price">R$ {total.toFixed(2)}</p>
        </div>

        <button className="checkout-button" onClick={handleFinalize}>
          Finalizar Compra
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Compra Finalizada!</h2>
            <p>Obrigado por comprar conosco.</p>
            <button className="close-modal" onClick={closeModal}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
