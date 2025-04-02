import { ReactNode } from "react"; // ✅ Importamos ReactNode

export const getDerivedCart = (cart: any[]) => {
    const derivedCart: {
      id: any;
      titulo: string; // ✅ Usamos string en vez de ReactNode
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
          quantity: 1,
        });
      }
    });

    return derivedCart;
};
