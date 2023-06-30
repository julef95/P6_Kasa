import React, { useState } from 'react';
import flecheGauche from '../../assets/fleche_gauche.png';
import flecheDroite from '../../assets/fleche_droite.png';
import './slideshow.css';

function Slideshow({ photos }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const PreviousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => {
      if (prevIndex === 0) {
        return photos.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const NextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => {
      if (prevIndex === photos.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  return (
    <div className='slideshow-container'>
        <div className="slideshow">
        <img src={photos[currentPhotoIndex]} alt="Slideshow" className="slideshow-photo" />

        {photos.length > 1 && (
            <img src={flecheGauche} alt="Précédent" onClick={PreviousPhoto} className="slideshow-prev"/>
        )}

        {photos.length > 1 && (
            <img src={flecheDroite} alt="Suivant" onClick={NextPhoto} className="slideshow-next"/>
        )}

        {photos.length > 1 && (
          <div className="slideshow-number">{currentPhotoIndex + 1}/{photos.length}</div>
        )}
        </div>
    </div>
  );
}

export default Slideshow;