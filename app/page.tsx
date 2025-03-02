import React from 'react';
import Pokemon from './componentes/Pokemon';
import './page.css';

export default function Home() {
  return (
    <main className="main">
      <div className="principal">
        <div className="pokemon-container-row">
          {/* Contenedor de la imagen del Pokémon */}
          <div className="imagen-container">
            <Pokemon />
          </div>

          {/* Contenedor del texto */}
          <h2 className="info">
            ESCALIBUR "el calabozo del nerd" somos una tienda que se centra en ventas de consolas nuevas como retro, deportes urbanos, en diseño y venta de ropa para hombre, mujeres, niñas y niños, presentando un gran impacto visual, con ideas alternativas dedicadas a la cultura pop, anime, manga y sus variantes.
          </h2>
        </div>
        
      </div>
      <div className="servicio">
            <h1 className="servicio-title">El calaboso del nerd</h1>
            <br />
                <div className="servicio-contenedor">                    
            <p>Bienvenidos a Escalibur "el calaboso del nerd" somos una tienda que se centra en el diseño y venta de ropa para hombre, mujeres, niñas y niño, presentando un gran impacto visual, con ideas alternativas dedicado a la cultura pop, anime, manga y sus variantes.
                 </p>
            <br />
            <div className="contenedor-imagenes">
            <img className='imagen-servicio' src="lombor.jpg" alt="indumetaria" />
            <img className='imagen-servicio' src="nirvana.jpg" alt="indumentaria" />
            </div>
                </div>
        </div>
    </main>
  );
}
