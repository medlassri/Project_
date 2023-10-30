//import logo from './logo.svg';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import Image from 'react-bootstrap/Image';
import logo from './image/Logo.png';
import vid from "./image/video1.mp4";
import Image2 from "./image/image2.png";
import Image3 from "./image/image3.png";
import Image4 from "./image/image4.png";
import ImageL from "./image/imageL.png";
import ImageR from "./image/imageR.png";
import Image5 from "./image/image5.png";
import Image6 from "./image/image6.png";
import ImageL2 from "./image/imageL2.png";
import ImageR2 from "./image/imageR2.png";
import Image7 from "./image/image7.png";
import Image8 from "./image/image8.png";
import Ilogo2 from "./image/Ilogo2.png";
import Ilogo3 from "./image/Ilogo3.png";
import Ilogo4 from "./image/Ilogo4.png";
import Ilogo5 from "./image/Ilogo5.png";
import Ilogo6 from "./image/Ilogo6.png";
import Ilogo7 from "./image/Ilogo7.png";

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" data-bs-theme="dark">
        <Container>
          <Image src={logo} rounded />
          <Nav className="me-auto">

            <Nav.Link className="coleur" /*as={Link} to="/"*/>Accueil</Nav.Link>
            <Nav.Link className="coleur" >Notre Ecole</Nav.Link>
            <Nav.Link className="coleur" >Admissions</Nav.Link>
            <Nav.Link className="coleur" >Vie Scolaire</Nav.Link>
            <Nav.Link className="coleur" >Actualitées</Nav.Link>
            <Nav.Link className="coleur" >Contactez nous</Nav.Link>
            <Nav.Link className="inscription">Inscription</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      <Container>
        <video controls className="video" >
          <source src={vid} type="video/mp4" />
        </video>
      </Container>
      <Container>
        <div>
          <h1 className='texte'> <div>BIENVENUE A </div>JEANNE D'ARC <span className='test'>TRILINGUE</span> SCHOOL</h1>
        </div>
        <div className='texte2'><h2>la guéte de l'excellence</h2></div>
        <div className='border1'></div>

        <div className='parti2'>
          <h3 className='Mot_du'> MOT DU DIRECTEUR</h3>
          <p className='paragraphe'>
            <div>Chers parents,</div>
            <div>Fondé en 1921, notre établissement scolaire</div>
            <div>perpétue une tradition marquée par la quéte de</div>
            <div>l'excellence dans tous nos projets nous proposons</div>
            <div>une pédagogie éducative basée sur la réussite</div>
            <div>l'épanouissement la responsabillsation et la </div>
            <div>confiance afin de préparer activement nos éléves</div>
            <div>au monde de demain ... Lire la suite</div></p>

        </div>
        <Image className='image2' src={Image2} rounded />
        <Image className='image3' src={Image3} rounded />
      </Container>
      <Container>
        <h1 className='notre_charte'>NOTRE CHARTE</h1>
        <Image className='imageL' src={ImageL} rounded />
        <Image className='imageR' src={ImageR} rounded />
        <Image className='image4' src={Image4} rounded />
        <h3 className='comentaire1'> <div>Favoriser l’éveil</div>et l’autonomie de l’enfant  </h3>
        <h3 className='comentaire2'> <div>Soutenir l’enfant dans </div>ses émotions et ses désirs</h3>
        <h3 className='comentaire3'> <div>Situer les parents </div>Situer les parents au centre de notreprojet</h3>
        <h3 className='comentaire4'> <div>Assurer à l’enfant une sécurité</div> affective et physique </h3>
        <h3 className='comentaire5'> <div>Respecte les rythmes</div> et repéres de l'enfant</h3>
        <h3 className='comentaire6'> <div>gatantir à chacun</div> des soins individualisés </h3>
      </Container>
      <Container>
        <h1 className='titre2'><div><samp className='par1'>UN ENSEIGNEMENT</samp><samp className='par2'> TRILINGUR</samp></div> <samp className='par3'> D’EXCELLENCE DE</samp><samp className='par4'> LA CRECHE AU LYCEE</samp> </h1>
        <Image className='image5' src={Image5} rounded />
        <Image className='image6' src={Image6} rounded />
        <p className='pragraph2'>L’enseignement trilingue adopté par notre établissement aide </p>
        <h1 className='RAISONS'><div>6 RAISONS</div> POUR NOUS CHOISIR</h1>
        <Image className='imageL2' src={ImageL2} rounded />
        <Image className='imageR2' src={ImageR2} rounded />
        <Image className='image7' src={Image7} rounded />
        <Image className='image8' src={Image8} rounded />
        <Image className='Ilogo2' src={Ilogo2} rounded />
        <Image className='Ilogo3' src={Ilogo3} rounded />
        <Image className='Ilogo4' src={Ilogo4} rounded />
        <Image className='Ilogo5' src={Ilogo5} rounded />
        <Image className='Ilogo6' src={Ilogo6} rounded />
        <Image className='Ilogo7' src={Ilogo7} rounded />

      </Container>
      <Container>
        

      </Container>


    </div>
  );
}
export default App;
