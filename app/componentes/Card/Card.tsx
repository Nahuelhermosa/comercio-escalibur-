import './Card.css';

interface Producto {
  imagen: string;
  titulo: string;
  descripcion: string;
  precio: number;
  envio?: boolean;
}

export default function Card({ producto }: { producto: Producto }) {
  return (
    <div className='grillas'>
      <div className="card">
        <img className="imagen-producto-venta"src={producto.imagen} alt="" />
        <div className="card-content">
          <h2>{producto.titulo}</h2>
          <p>{producto.descripcion}</p>
          <div className="card-info-detalles">
            <p className='precio'>${producto.precio}</p>
            <div>
            <p>Precio unitario: ${producto.precio}</p>
            
            {/* Cuarto paso: Mostrar el total */}
            <p>Total: ${ producto.precio}</p>
        </div>
            {producto.envio &&
              <p className='envio'>Envío gratis</p>
            }
          </div>
          <div>
          
          </div>
        </div>
      </div>
    </div>
  );
}
