import React from "react";

export const ProductDetails = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3f4f6",
        padding: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "1rem",
          padding: "2rem",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        {/* Imagem do Produto */}
        <div
          style={{
            height: "240px",
            backgroundColor: "#e5e7eb",
            borderRadius: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1.5rem",
          }}
        >
          <span style={{ color: "#6b7280" }}>Imagem do Produto</span>
        </div>

        {/* Informações do Produto */}
        <h2
          style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#1f2937" }}
        >
          Nome do Produto
        </h2>
        <p
          style={{ fontSize: "1.25rem", color: "#4b5563", marginTop: "0.5rem" }}
        >
          R$ 99,90
        </p>

        {/* Botão */}
        <button
          style={{
            marginTop: "1.5rem",
            width: "100%",
            padding: "0.75rem",
            background: "linear-gradient(to right, #3b82f6, #1e40af)",
            color: "white",
            border: "none",
            borderRadius: "0.75rem",
            fontWeight: "500",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => {
            (e.target as HTMLButtonElement).style.background =
              "linear-gradient(to right, #2563eb, #1e3a8a)";
          }}
          onMouseOut={(e) => {
            (e.target as HTMLButtonElement).style.background =
              "linear-gradient(to right, #3b82f6, #1e40af)";
          }}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

//export default Product;
