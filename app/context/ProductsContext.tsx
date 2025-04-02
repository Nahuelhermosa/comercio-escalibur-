"use client"; 

import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { getDerivedCart } from "../utils/getDerivedCart";

interface Producto {
  id: number;
  imagen: string;
  titulo: string;
  descripcion: string;
  precio: number;
  envio?: boolean;
}

interface CartContextType {
  cart: Producto[];
  derivedCart: ReturnType<typeof getDerivedCart>;
  addToCart: (producto: Producto) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const ProductsContext = createContext<CartContextType | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Producto[]>([]);
  const [isClient, setIsClient] = useState(false); // Para evitar el error de hidratación

  useEffect(() => {
    setIsClient(true);
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isClient]);

  const addToCart = (producto: Producto) => {
    setCart((prevCart) => {
      const exists = prevCart.some((item) => item.id === producto.id);
      return exists ? prevCart : [...prevCart, producto];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const derivedCart = useMemo(() => getDerivedCart(cart), [cart]);

  return (
    <ProductsContext.Provider value={{ cart, derivedCart, addToCart, removeFromCart, clearCart }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts debe usarse dentro de un ProductsProvider");
  }
  return context;
};
