import { Link } from 'react-router-dom';
import './card.css'

function Card({housing}) {    
    return (
        <Link to={`/housing/${housing.id}`} className="card">
                <img src={housing.cover} alt={housing.title} className="card-cover" />
                <div className="card-content">
                    <h3 className="card-title">{housing.title}</h3>
                    <p className="card-location">{housing.location}</p>
                </div>
        </Link>
    );
}

export default Card