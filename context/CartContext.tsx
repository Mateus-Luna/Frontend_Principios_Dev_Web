import React, { createContext, useContext, useState } from 'react';

type CartItem = { productId: number; quantity: number };
type CartContextType = {
  cart: CartItem[];
  addToCart: (productId: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = async (productId: number) => {
    try {
      await addToCart(productId);  
      setCart([...cart, { productId, quantity: 1 }]);
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error);
    }
  };

  return <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext)!;