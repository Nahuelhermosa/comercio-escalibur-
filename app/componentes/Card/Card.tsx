import './Card.css';

// Define la interfaz para el tipo de datos de 'producto'
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
        <img src={producto.imagen} width={290} alt="" />
        <div className="card-content">
          <h2>{producto.titulo}</h2>
          <p>{producto.descripcion}</p>
          <div className="card-info-detalles">
            <p className='precio'>${producto.precio}</p>
            {producto.envio &&
              <p className='envio'>Envío gratis</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
