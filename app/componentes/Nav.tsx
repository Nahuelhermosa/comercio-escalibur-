import Link from 'next/link';
import './Nav.css';

export default function Nav() {
    return (
      <nav className="nav">
        <ul className="nav-lista">
          <li className="nav-item">
            <Link href="/">
              <img src="astronauta2.png" alt="inicio" />
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/Indumentaria">Indumentaria</Link>
          </li>
          <li className="nav-item">
            <Link href="/servicio">Servicio</Link>
          </li>
          
          <li className="nav-item">
            <Link href="/contacto">Contacto</Link>
          </li>
          <li className="nav-item">
            <Link href="/Sorteo">Sorteos y Premios</Link>
          </li>
          <li className="nav-item">
            <form action="#">
              <input type="text" />
              <input type="submit" value="Buscar" />
            </form>
          </li>
        </ul>
      </nav>
    );
  }
  
  
  
  
  
  
  
  