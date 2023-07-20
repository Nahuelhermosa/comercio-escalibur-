import './Card.css'

export default function Card () {
  const producto = {

    imagen: 'pacman.jpg',
    titulo: 'remera',
    descripcion: 'remera 100% algodon',
    precio: 15000,
    envio: true

}
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
                    <p className='envio'>Envio gratis</p>
                    }
            </div>      
          </div>
        </div>
        </div>
    )

}