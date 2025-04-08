import React from "react";
import "./Home.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

const CarrinhoIcon = FaShoppingCart as unknown as React.FC;

export default function Home() {
  const [products, setProducts] = useState<
    Array<{ id: number; nome: string; preco: number }>
  >([]);

  useEffect(() => {
    getProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Erro ao carregar produtos:", error));
  }, []);

  return (
    //<div className="product-grid">
    //  {products.map((product) => (
    //    <ProductCard key={product.id} product={product} />
    //  ))}

    <div className="home-container">
      <nav className="navbar">
        <h1 className="logo">Minha Loja</h1>
        <ul className="nav-links">
          <li>
            <Link to="/">Produtos</Link>
          </li>
          <li className="cart">
            <Link to="/carrinho">
              Carrinho <CarrinhoIcon />
            </Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      <main className="content">
        <div className="products">
          {[...Array(6)].map((_, index) => (
            <div className="product" key={index}>
              <div className="image-placeholder">Imagem</div>
              <p>Produto {index + 1}</p>
            </div>
          ))}
        </div>

        <div className="info">
          <div className="welcome-box">
            <h2>Bem-vindo</h2>
          </div>
          <div className="description">
            <p>
              Nossa loja contém uma variedade de produtos que você pode adquirir
              clicando nas imagens ao lado.
            </p>
          </div>
        </div>
      </main>
    </div>
    //</div>
  );
}
