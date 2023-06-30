import { FaStar } from 'react-icons/fa';
import './rating.css';

function Rating({ rating }) {

    function numberStars() {
        const stars = [];
    
        for (let i = 0; i < 5; i++) {
          const starColor = i < rating ? 'red' : 'gray';
          stars.push(
            <FaStar key={i} className={`star ${starColor}`} />
          );
        }
        return stars;
    };
    
      return <div className="rating-container">{numberStars()}</div>;
    }
export default Rating;