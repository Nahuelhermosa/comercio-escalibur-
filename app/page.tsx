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
    </main>
  );
}
