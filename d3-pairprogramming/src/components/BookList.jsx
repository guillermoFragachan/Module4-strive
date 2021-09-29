import { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import MyCard from './SingleBook';


import FantasyBooks from '../data/fantasy.json'


import FormControl from 'react-bootstrap/FormControl'




let filteredBooks = ['d']

class BookList extends Component {


    state = {
        title: ''
    }

    filtreBooksList = (query) => {



        filteredBooks = FantasyBooks.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      )

        
 

    }





    render() {
        return (



            <Container >


                <Row>

                    <FormControl
                        placeholder="Book Title"
                        aria-label="Book Title"
                        value={this.state.title}
                        onChange={
                            // this will happen every time I input a keystroke
                            e => (


                                this.setState({


                                    // with the ... your making a copy of all the properties
                                    // already existing into this.state.reservation
                                    title: e.target.value
                                    // and then you're just overwriting ONE property

                                })

                            )


                        }

                    />


                    {



                        this.filtreBooksList(this.state.title),
                        filteredBooks.map(book => (

                            <Col key={book.asin} xs={2}>
                                <MyCard book={book} />
                                
                            </Col>
                
                
                        )
                        )

                    }




                </Row>
            </Container>







        )

    }
}








export default BookList


