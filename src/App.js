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
          <h3>Favoriser l’éveil et l’autonomie de l’enfant  </h3>
          <h3>Soutenir l’enfant dans ses émotions et ses désirs</h3>
          <h3>Situer les parents au centre de notre projet</h3>
      </Container>
       
    </div>
  );
}
export default App;
