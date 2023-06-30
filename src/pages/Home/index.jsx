import Banner from '../../components/Banner/';
import bannerPhoto from '../../assets/banner_photo.png'
import Card from '../../components/Card/';
import {housingList} from '../../datas/housingList'
import './home.css';

function Home() {

  return (
  <div className='home-body'>
    <div>
      <Banner photo={bannerPhoto} alt='Falaise plongeante mer' quote='Chez vous, partout et ailleurs' />
    </div>
    <div className="card-container">
        {housingList.map((housing) => (
          <div className='card-wrapper'>
            <Card key={housing.id} housing={housing} />
          </div>
        ))}
    </div>
  </div>
  )
}

export default Home