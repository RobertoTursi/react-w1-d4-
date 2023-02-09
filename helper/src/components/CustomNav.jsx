
import {Navbar, Container, Nav} from "react-bootstrap"  //per far funzionare gli elementi di bootstrap dobbiamo importarli con queste righe di codice

const CustomNav = ({claim}) =>( //andiamo a destrutturare le props in modo tale da prendere, in questo caso, solo claim, per non ripetere sempre props.claim
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">{claim}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Menu</Nav.Link>
            <Nav.Link href="#link">Prenotazioni</Nav.Link>
            <Nav.Link href="#link">Contatti</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)

export default CustomNav