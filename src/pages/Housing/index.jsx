import React from 'react';
import {useParams, Navigate} from 'react-router-dom';
import {housingList} from '../../datas/housingList';
import Slideshow from '../../components/Slideshow';
import Tag from '../../components/Tag';
import Rating from '../../components/Rating';
import Collapse from '../../components/Collapse';
import './housing.css';

function Housing() { 
  const {id} = useParams();
  const housing = housingList.find((item) => item.id === id);

  if (!housing) {
    return (
      <Navigate to="/error" />
    )
  }

  return (
    <div className='housing-body'>
      <div className='slideshow'>
          <Slideshow photos={housing.pictures} />
      </div>

      <div className='housing-content'>
          <div>
            <h1>{housing.title}</h1>
            <h2>{housing.location}</h2>

            <div>
              <Tag tags={housing.tags} />
            </div>
          </div>

          <div className='housing-content2'>
            <div className='profile'>
              <h2>{housing.host.name.split(' ')[0]}<br />{housing.host.name.split(' ')[1]}</h2>
              <img src={housing.host.picture} alt="{housing.host.name}" />
            </div>

            <div className='rating'>
              <Rating rating={housing.rating} />
            </div>
          </div>
      </div>

      <div className='housing-collapses'>
          <Collapse title='Description' content={housing.description} className='collapse' />
          <Collapse title='Equipements' content={housing.equipments} className='collapse' />
      </div>
    </div>
  );
}

export default Housing