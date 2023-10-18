//import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import logo from './image/Logo.png';
import Image from 'react-bootstrap/Image';
import vid from "./image/video1.mp4";

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" data-bs-theme="dark">
        <Container>
          <Image src={logo} rounded />
          <Nav  className="me-auto">
            
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
            Your browser does not support the video tag.
          </video>
        
      </Container> 
      
    </div>
  );
}
export default App;
