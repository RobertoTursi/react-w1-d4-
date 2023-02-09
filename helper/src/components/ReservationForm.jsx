import { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

//queste sono le proprietà che si aspetta il server da noi
//ogni qualvolta invieremo una nuova preotazione

// name <-- string
// phone <-- string/number
// numberOfPeople <-- string/number
// smoking <-- boolean
// dateTime <-- date/string
// specialRequest <-- string

// Il nostro scopo sarà quello di legare tutti gli input allo State interno al componente
// lo state sovrà modificarsi contemporaneamente  all'inserimento del dato nell'input
// e l'input dovrà leggere il valore dello stato

// un input di tipo "controlled" necessita di un collegamento a doppio livello: da e verso lo stato (TWO-WAY DATA BINDING)

//lo spread operator ci aiuta a mantenere una copia dei dati presenti nello this.state.reservation per non perdere 

// spiegazione handleChange: 
// propertyname sarà uno dei nomi degli input (name, phone, ecc...)
// propertyvalue sarà una tra e.target.value oppure e.target.checked ecc..
// le parentesi quadre nel contesto di un oggetto permettono la valutazione di un valore dinamico: [propertyname] assumerà come valore una delle stringhe che passiamo

// .then per aspettare che la funzione abbia finito


class ReservationForm extends Component {
    state = {
        reservation: {
            name: "",
            phone: "",
            numberOfPeople: 1,
            smoking: false,
            dateTime: "",
            specialRequest: ""
        }
    }

    handleChange = (propertyName, propertyValue) => {
        const value = propertyName === "numbertOfPeople" ? parseInt(propertyValue) : propertyValue
        this.setState({
            reservation: {
                ...this.state.reservation,
                 [propertyName]: value
                }})
    }

    handleSubmit = async e => {
        e.preventDefault()

        try{
            const response = await fetch("url dell'API", {  //mettendo l'await tutto quello che viene dopo il fetch non verrà eseguito fino a quando la fetch non avrà finito
            method: "POST",
            body: JSON.stringify(this.state.reservation),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if(response.ok) {
            const parsedBody = await response.json()
            alert("la richiesta è andata a buon fine, la risorsa è stata creata con id " + parsedBody._id)
        } else {
            alert("qualcosa è andato storto")
        }} catch(err) {
            alert("ERRORE FATALE", err)
        }
        
        
        

        console.log(e)
    }
    // handleSubmit = e => {
    //     e.preventDefault()

    //     fetch("url dell'API", {
    //         method: "POST",
    //         body: JSON.stringify(this.state.reservation),
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     }).then(response => {
    //         if(response.ok) {
    //             return response.json
    //         } else {
    //             alert("qualcosa è andato storto")
    //         }
    //     }).then((parsedBody) => {
    //         alert("la richiesta è andata a buon fine, la risorsa è stata creata con id " + parsedBody._id)
    //     }).catch(error => {
    //         alert(error)
    //     })
    // }

    render() {
        return(
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col xs={12} md={6}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" placeholder="Inserisci il tuo nome" value={this.state.reservation.name} onChange={(e) => this.handleChange("name", e.target.value)}/> 
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control type="tel" placeholder="Inserisci il tuo numero di telefono" value={this.state.reservation.phone} onChange={(e) => this.handleChange("phone", e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                        <Form.Select aria-label="Default select example" value={this.state.reservation.numberOfPeople} onChange={(e) => this.handleChange("numberOfPeople", e.target.value)}>
                            <option>Open this select menu</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox" label="Fumatori" checked={this.state.reservation.smoking} onChange={(e) => this.handleChange("smoking", e.target.checked)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Data e ora</Form.Label>
                            <Form.Control type="datatime-local" value={this.state.reservation.dateTime} onChange={(e) => this.handleChange("dateTime", e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Richieste speciali</Form.Label>
                            <Form type="datatime-local" as="text-area" value={this.state.reservation.specialRequest} onChange={(e) => this.handleChange("specialRequest", e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                        </Col>
                    </Row>
                </Container>
        )
    }
}

export default ReservationForm