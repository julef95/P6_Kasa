import Banner from '../../components/Banner/';
import bannerPhoto from '../../assets/about_photo.png'
import Collapse from '../../components/Collapse/';
import './about.css';

function About() {
  
    return (
        <div className='about-body'>
            <div>
                <Banner photo={bannerPhoto} alt='Rivière montagne' quote=' ' />
            </div>
            <div className='collapse-container'>
                <Collapse title='Fiabilité' content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
                régulièrement vérifiées par nos équipes." />
                <Collapse title='Respect' content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <Collapse title='Service' content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <Collapse title='Sécurité' content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>
        </div>
    )
}
  
export default About