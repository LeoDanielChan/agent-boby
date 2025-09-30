import { Link } from 'react-router-dom';
import bobyLogoMini from '../assets/boby.png'

function Header() {
  return (
    <header className="main-header">
      <nav className="navbar">
        <Link to="/" className="navbar-brand">
          <img src={bobyLogoMini} alt="Boby AI Logo" className="navbar-logo" />
          <span className="brand-name">Boby AI</span>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-item">Inicio</Link>
          </li>
          <li>
            <Link to="/privacidad" className="nav-item">Política de Privacidad</Link>
          </li>
          <li>
            <a 
              href="https://wa.me/TU_NUMERO_DE_WHATSAPP_EMPRESA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="nav-item whatsapp-link"
            >
              Chatea con Boby
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;