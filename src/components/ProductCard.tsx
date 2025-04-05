import React from "react";

type Product = {
  id: number;
  nome: string;
  preco: number;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card">
      <h3>{product.nome}</h3>
      <p>Preço: R$ {product.preco.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
