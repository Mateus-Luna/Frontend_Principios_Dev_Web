import React from "react";

export const Cart = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center min-h-screen p-4">
      {/* Container do Carrinho */}
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        {/* Título */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Carrinho de Compras
        </h1>

        {/* Lista de Produtos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Produto Exemplo 1 */}
          <div className="bg-gray-200 rounded-lg p-4 text-center shadow-md">
            <div className="h-24 bg-gray-300 rounded-md flex items-center justify-center">
              <span className="text-gray-500 text-sm">Imagem</span>
            </div>
            <p className="mt-2 font-semibold text-gray-700">Produto 1</p>
            <p className="text-gray-600">R$ 50,00</p>
          </div>

          {/* Produto Exemplo 2 */}
          <div className="bg-gray-200 rounded-lg p-4 text-center shadow-md">
            <div className="h-24 bg-gray-300 rounded-md flex items-center justify-center">
              <span className="text-gray-500 text-sm">Imagem</span>
            </div>
            <p className="mt-2 font-semibold text-gray-700">Produto 2</p>
            <p className="text-gray-600">R$ 75,00</p>
          </div>

          {/* Produto Exemplo 3 */}
          <div className="bg-gray-200 rounded-lg p-4 text-center shadow-md">
            <div className="h-24 bg-gray-300 rounded-md flex items-center justify-center">
              <span className="text-gray-500 text-sm">Imagem</span>
            </div>
            <p className="mt-2 font-semibold text-gray-700">Produto 3</p>
            <p className="text-gray-600">R$ 120,00</p>
          </div>
        </div>

        {/* Total */}
        <div className="mt-6 text-center">
          <p className="text-lg font-semibold text-gray-700">Total:</p>
          <p className="text-2xl font-bold text-gray-800">R$ 245,00</p>
        </div>

        {/* Botão Finalizar Compra */}
        <button className="w-full bg-blue-500 text-white py-3 mt-6 rounded-lg hover:bg-blue-600 transition duration-300 shadow-md">
          Finalizar Compra
        </button>
      </div>
    </div>
  );
};
