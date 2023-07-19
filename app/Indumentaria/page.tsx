
import './indumentaria.css'

import Card from '../componentes/Card/Card'


export default function Indumentaria() {
    return (
      <div className="producto">
        <Card />
        <h1>stock</h1>
        <br />
      

      <div className='grillas'>
        <div className="card">
          <img src="pacman.jpg" width={300} alt="Descripción de la imagen" />
          <div className="card-content">
            <h2>Remera pacman</h2>
            <p>remera 100%</p>
            <div className="card-info-detalles">
                    <p className='precio'>$15000</p>
                    <p className='envio'>Envío gratis</p>
            </div>     
          </div>
        </div>

        <div className="card">
          <img src="pacman.jpg" width={300} alt="Descripción de la imagen" />
          <div className="card-content">
            <h2>Remera pacman</h2>
            <p>remera 100%</p>
            <div className="card-info-detalles">
                    <p className='precio'>$15000</p>
                    <p className='envio'>Envío gratis</p>
            </div>     
          </div>
        </div>
        <div className="card">
          <img src="pacman.jpg" width={300} alt="Descripción de la imagen" />
          <div className="card-content">
            <h2>Remera pacman</h2>
            <p>remera 100%</p>
            <div className="card-info-detalles">
                    <p className='precio'>$15000</p>
                    <p className='envio'>Envío gratis</p>
            </div>     
          </div>
        </div>
    </div>
  </div>
 );
}