import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/header_logo.png';
import './header.css';

function Header() {
    const location = useLocation();

    return (
    <header className="header">
        <div className="logo-header">
            <img src={logo} alt="Logo Kasa" />
        </div>
        <nav className="nav-links">
            <ul>
            <li>
                <Link to="/" className={location.pathname === '/' ? 'nav-links-active' : ''}>Acceuil</Link>
            </li>
            <li>
                <Link to="/about" className={location.pathname === '/about' ? 'nav-links-active' : ''}>A Propos</Link>
            </li>
            </ul>
        </nav>
    </header>
  );
};

export default Header