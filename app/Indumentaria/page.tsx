import './indumentaria.css'
export default function Indumentaria() {
    return (
      <div className="producto">
        <h1>stock</h1>
        <br />
        <div className="card">
          <img src="pacman.jpg" width={300} alt="Descripción de la imagen" />
          <div className="card-content">
            <h2>Remera pacman</h2>
            <p>remera 100%</p>
          </div>
        </div>
      </div>
    );
  }