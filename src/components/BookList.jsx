import { Component } from "react"
import { Form, Button, Container } from "react-bootstrap"
import SingleBook from "./SingleBook"

class BookList extends Component{
    state = {
        inputValue: "",
        bookFilter: this.props.array
    }

    filterBookList = (e) => {
        e.preventDefault()
        console.log(this.state.inputValue)
        this.setState({bookFilter: this.props.array.filter(book =>(book.title.toLowerCase().includes(this.state.inputValue.toLowerCase())))})
    }

    render() {
        return(
            
               <Container className="mt-5">
                    <Form className="mb-5" onSubmit={this.filterBookList}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Titolo</Form.Label>
        <Form.Control type="text" placeholder="Inserisci un titolo" value={this.state.inputValue} onChange={(e) => this.setState({inputValue: e.target.value})}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
                   {this.state.bookFilter.map(book => (
                           <SingleBook key={book.asin}  genere={book}/>
                           ))}

               </Container> 
    
            
            
    
            
            
            
        
        )
    }
}


// const BookList = ({array}) => (
    
//         array.map(book => (
//         <SingleBook key={book.asin}  genere={book}/>
//     ))
    
// )

export default BookList

