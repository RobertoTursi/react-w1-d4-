import { Component } from "react"
import {Container, Row, Col, Carousel, ListGroup, Badge} from "react-bootstrap"
import menu from "../data/menu.json"

class Home extends Component{
    state = {
        firstStateValue: 345,
        selectedPasta: null
    }
    render() {
        return(
            <Container>
            <Row className ="justify-content-center">
                <Col xs={12} md={6} className="text-center">
                    <h1>Benvenuti nel nostro ristorante {this.state.firstStateValue}</h1>
                    <p>Abbiamo primi piatti o primi piatti...</p>
                    
    
    
                    <Carousel>
          { menu.map(pasta  => (
          <Carousel.Item key={pasta.id} onClick={e => 
          {this.setState({selectedPasta: pasta})}
          }> 
            <img
              className="d-block w-100"
              src={pasta.img}
              alt={pasta.image}
            />
            <Carousel.Caption>
              <h3>{pasta.name}</h3>
              <p>{pasta.description}</p>
            </Carousel.Caption>
          </Carousel.Item> 
          ))}
          
        </Carousel>
                </Col>
            </Row>
            { this.state.selectedPasta && <Row className ="justify-content-center"> 
                <Col xs={12} md={6} className="text-center">
                <ListGroup>
          {this.state.selectedPasta.comments.map(elem =>
            <ListGroup.Item key={`comment-${elem.id}`}>
                <Badge bg="dark" className = "me-2">
                    {elem.author}
                </Badge>
            {elem.comment}
            </ListGroup.Item>
          )}      
        </ListGroup></Col>
            </Row>}
        </Container>
        )
    }
    
    
} 
    


export default Home

//N.B. il metodo map accetta anche un secondo parametro "index" che può essere utilizzato in questo caso al posto di pasta.id
//  e soprattutto negli array che non hanno l'id

//con l'operatore and (short circuit operator) la funzione parte solo se selectedPasta non è null //Attenzione: per fare in modo che funzioni,
//l'intero codice interessato deve essere racchiuso da parentesi graffe insieme alla condizione che deve essere verificata

// la key serve a identificare un dato o un elemento della pagina 