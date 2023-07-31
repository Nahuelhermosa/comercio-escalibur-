import React from 'react';
import Pokemon from './componentes/Pokemon';
import './page.css';

export default function Home() {
  return (
    <main className='main'>
      <div className='principal'>
        <img className="imagen-container"src="astronauta2.jpg" alt="<Home/>" />
        
        <div className='pokemon-container-row'>
          
          <h2>Escalibur "el calaboso del nerd" somos una tienda que se centra en ventas de consolas nuevas como retro, depportes urbanos y en el diseño y venta de ropa para hombre, mujeres, niñas y niño, presentando un gran impacto visual, con ideas alternativas dedicado a la cultura pop, anime, manga y sus variantes. </h2>
        </div>
        <div className='pokemon-container-row'>
          <Pokemon />
          <Pokemon />
        </div>
      </div>
    </main>
  );
}
