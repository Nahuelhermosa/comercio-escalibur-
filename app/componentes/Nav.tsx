import "./Nav.css";
import Link from "next/link";
import Filter from "./filter/filter.component";

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-lista">
        <li className="nav-item">
          <Link href="/">
            <img src="icono-estrella2.png" alt="inicio" />
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link href="/servicio">Escalibur</Link>
        </li> */}
        <li className="nav-item">
          <Link href="/Indumentaria">Merchandise</Link>
        </li>
        <li className="nav-item">
          <Link href="/contacto">Contact</Link>
        </li>
        <li className="nav-item">
          <Filter />
        </li>
      </ul>
    </nav>
  );
}
