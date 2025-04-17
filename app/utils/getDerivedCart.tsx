import { ReactNode } from "react"; // ✅ Importamos ReactNode

export const getDerivedCart = (cart: any[]) => {
    const derivedCart: {
      id: any;
      titulo: string; // ✅ Usamos string en vez de ReactNode
      precio: number; // 👈 Agregamos el precio
      quantity: number;
    }[] = [];

    cart.forEach((item) => {
      const existingItem = derivedCart.find((dItem) => dItem.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        derivedCart.push({
          id: item.id,
          titulo: item.titulo, // ✅ Ahora la propiedad se llama 'titulo'
          precio: item.precio, // 👈 Asegurate que `item` lo tenga
          quantity: 1,
        });
      }
    });

    return derivedCart;
};
