import "./Nav.css";
import Link from "next/link";
import Filter from "./filter/filter.component";

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-lista">
        <li className="nav-item">
          <Link href="/">
            <img src="/iconoestrella1.png" alt="inicio" />
          </Link>
        </li>

<li className="nav-item">
          <Filter />
        </li>
        <li className="nav-item">
          <Link href="/Indumentaria">CATEGORIAS</Link>
        </li>

        <li className="nav-item">
          <Link href="/contacto">CONTACTO</Link>
        </li>

        <li className="nav-item">
          <Link href="/Cart">
            <img src="/icons8-cart6.png" alt="Carrito" width={60} />
          </Link>
        </li>

        
      </ul>
    </nav>
  );
}
