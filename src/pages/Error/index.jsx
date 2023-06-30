import { Link, useLocation } from 'react-router-dom';
import './error.css';

function Error() {
    const location = useLocation();

    return (
        <div className='error-body'>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/" className={location.pathname === '/' ? 'nav-links-active' : ''}>Retourner sur la page d'acceuil</Link>
        </div>
    )
}
 
export default Error