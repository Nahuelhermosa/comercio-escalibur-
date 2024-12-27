import Link from 'next/link';
import './Nav.css';

export default function Nav() {
    return (
      <nav className="nav">
        <ul className="nav-lista">
          <li className="nav-item">
            <Link href="/">
              <img src="icono-estrella2.png" alt="inicio" />
            </Link>
          </li>
         
          <li className="nav-item">
            <Link href="/servicio">Escalibur</Link>
          </li>
          <li className="nav-item">
            <Link href="/Indumentaria">Merchandise</Link>
          </li>
          <li className="nav-item">
            <Link href="/contacto">Contact</Link>
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
  
  
  
  
  
  
  
  