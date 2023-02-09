import { Component } from "react";
import { Container, Row, Col, ListGroup, Spinner, Alert } from "react-bootstrap";

import { format, parseISO } from "date-fns";
import { it } from "date-fns/locale";

// ReservationList è un componente che si occuperà di recuperare la lista degli appuntamenti delle API e presentarle all'utente

// Recuperare una risorsa esterna può richiedere del tempo...
// un'app moderna presenterà all'utente le parti statiche immediatamente, l'attesa verrà compensata con un indicatore di caricamento
// fino a che non si popoleranno i dati da mostrare all'utente


// abbiamo un componente classe perché faremo uso dello STATE

// STEP DA EFFETTUARE

// 1) Inizializzare lo stato iniziale con un array vuoto
// 2) render() viene invocato per la prima volta, essendo collegato allo stato iniziale renderizzerà solo le parti statiche dell'interfaccia (es.: titolo, struttura della griglia ecc..)
// 3) finito il primo rendere serve capire come azionare un cambio di stato una volta sola con i dati proveniente dall'API; 
// 4) per farlo utilizzeremo il componentDidMount() che eseguirà la funzione con dentro la fetch e recupererà i dati. Finito il recupero ida ti vengono inseriti nello stato usando un setState()
// 5) A causa del setState() e del conseguente campio di stato, render() veiene incovato una seconda volta; le parti statiche rimangono invariate, mentre il contenuto connesso allo stato rimarrà invariato


class ReservationList extends Component {
    state = {
        reservations: [],
        loading: true,
        hasError: false,
        errorMessage: ""
    }

    fetchReservations = async () => {
        try{
            const response = await fetch("url dell'API")

                    if (response.ok) {
                        const data = await response.json()

                        this.setState(
                            {
                                reservations: data,
                                loading: false
                            }
                        )
                    } else {
                        alert("Fallito il caricamnento dei contenuti")
                        this.setState(
                            {                                
                                loading: false,
                                hasError: true,
                                // errorMessage: 'Errore di tipo + ${response.status}  vanno messi i backtick
                            }
                        )
                    }
        } catch (error) {
            alert("Fatal Error", error)
            this.setState(
                {
                    loading: false,
                    hasError: true
                }
            )
        }
        
    }

    componentDidMount() {  // componentDidMount avviene una volta sola poco prima della fine del montaggio e avviene dopo render 
        this.fetchReservations()
    } //il fatto che componentDidMount venga eseguita una volta sola unito al fatto che viene eseguito in maniera NON-BLOCCANTE (dopo il rednere iniziale)
      //lo rende perfetto per eseguire operazioni asincrone con fetch()

    render() {
        
        return(
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col xs={12} md={6}>
                        <h2 className="text-center">ciao</h2>
                        {this.state.hasError && <Alert variant="success">{this.state.errorMessage}</Alert>}
                        {this.state.loading && (<div className="text-center"><Spinner animation="border" variant="success" /></div >)}
                        <ListGroup>
                            {this.state.reservations.length === 0 && !this.state.loading && !this.state.hasError && (
                                <ListGroup.Item>Non esistono prenotazioni </ListGroup.Item>
                            )}
                        {this.state.reservations.map((reservations, i) => 
                        <ListGroup.Item key={reservations.id}>
                            <span>{reservations.name}</span>
                            {/* {new Date(reservations.dateTime).toLocaleString}    */}
                            {format(parseISO(reservations.dateTime.split(".")[0]),  "MMM do - HH:mm", {locale:it})}
                            {reservations.smoking && <span>fumatore</span>}
                            </ListGroup.Item>)}
                        </ListGroup>
                        
                        
                    </Col>
                </Row>
            </Container>    
        )
    }
}

export default ReservationList