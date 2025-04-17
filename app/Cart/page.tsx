"use client";

import { useProducts } from "../context/ProductsContext";
import "./Cart.css";

export default function Cart() {
  const { derivedCart, removeFromCart, clearCart } = useProducts();

  const handleCheckout = () => {
    // Acá podrías redirigir a una página de checkout, mostrar un modal, etc.
    alert("Gracias por tu compra 😄");
  };

  return (
    <div className="Cart">
      <h1>Carrito de Compras</h1>
      {derivedCart.length > 0 ? (
        <div>
          {derivedCart.map((item) => (
            <div key={item.id} className="cart-card">
              <p>articulo: {item.titulo}</p>
              <p>precio: {item.precio}</p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          ))}
          <button onClick={clearCart}>Vaciar carrito</button>
          <button onClick={handleCheckout}>Finalizar compra</button>
        </div>
      ) : (
        <p>El carrito está vacío</p>
      )}
    </div>
  );
}
