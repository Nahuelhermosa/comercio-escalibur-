import { useRouter } from "next/navigation";
import { useProducts } from "../../context/ProductsContext";
import "./Card.css";

interface Producto {
  id: number;
  imagen: string;
  titulo: string;
  descripcion: string;
  precio: number;
  envio?: boolean;
}

export default function Card({ producto }: { producto: Producto }) {
  const router = useRouter();
  const { addToCart } = useProducts();

  const handleAddToCart = () => {
    if (!producto.id) {
      console.error("El producto no tiene ID, no se puede agregar al carrito.");
      return;
    }
    addToCart(producto);
    alert(`"${producto.titulo}" se ha agregado al carrito 🛒`);
    
  };

  return (
    <div className="grillas">
      <div className="card">
        <img className="imagen-producto-venta" src={producto.imagen} alt={producto.titulo} />
        <div className="card-content">
          <h2>{producto.titulo}</h2>
          <p>{producto.descripcion}</p>
          <div className="card-info-detalles">
            <p className="precio">${producto.precio}</p>
            {producto.envio && <p className="envio">Envío gratis</p>}
          </div>
          <button className="btn" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
