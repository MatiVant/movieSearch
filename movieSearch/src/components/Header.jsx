import { Link } from "react-router-dom";
import Buscador from "./Buscador";

export default function Header() {
  return (
    <header style={{ width: "100%"}}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand">
          <img src="logo.png" width='70'/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toogle="collapse"
            data-bs-target="#navbarNav"
            aria-expanded="false"
            aria-controls="navbarNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/listado">
                Listado
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favoritos">
                Favoritos
              </Link>
              </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
          </div>
          <Buscador />
        </div>
      </nav>
    </header>
  );
}
